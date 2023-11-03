import { join, relative } from 'std/path/mod.ts'
import { assertEquals } from 'std/assert/mod.ts'
import { green, red, yellow } from 'std/fmt/colors.ts'

const lines = (await Promise.all([
	'./snowball/libstemmer/modules.txt',
	'./src/wip.txt',
].map((path) => Deno.readTextFile(path))))
	.join('\n').split('\n').map((x) => x.trim()).filter((
		x,
	) => x && !x.startsWith('#')).map((x) => x.split(/\s+/))

function chooseCanonicalLocale(locales: string[]) {
	for (const locale of locales) {
		try {
			if (
				locale === new Intl.Locale(locale).toString() &&
				locale !== new Intl.DisplayNames('en', { type: 'language' }).of(new Intl.Locale(locale).toString())
			) {
				return locale
			}
		} catch { /* ignore errors */ }
	}

	return null
}

const found = new Set<string>()

const languageCodes = Object.fromEntries(
	lines
		.map(([langName, _, locales, wipMarker]) => {
			const isWip = wipMarker === '[WIP]'
			const isoCode = chooseCanonicalLocale(locales.split(','))

			if (found.has(langName)) {
				if (isWip) {
					console.warn(yellow(`WIP version of ${langName} no longer required. Skipping...`))
				} else {
					console.error(red(`Multiple versions of ${langName} found. Skipping...`))
				}

				return null
			}

			found.add(langName)

			return [langName, { isoCode, isWip }]
		}).filter(function <T extends unknown>(x: T): x is Exclude<T, null> {
			return Boolean(x)
		}),
)

const sblExt = '.sbl'
const jsExt = '.js'

const written: string[] = []
const skipped: string[] = []

async function writeTextFile(path: string | URL, content: string) {
	await Deno.writeTextFile(path, content)

	written.push(String(path))
}

try {
	await Deno.stat('./snowball/snowball')
} catch {
	await new Deno.Command('make', { cwd: './snowball' }).output()
}

const base = await Deno.readTextFile('./snowball/javascript/base-stemmer.js')

await writeTextFile(
	'./dist/core/base-stemmer.mjs',
	`// deno-lint-ignore-file
${
		base.replace(/^.+BaseStemmer\s*=\s*function(.*)$/m, `export default function BaseStemmer $1`)
			.replace(/^.*@ts-check.*$/m, '')
			.replace(/^.+module.exports.+$/m, '')
	}`,
)

const StemmerTypeDef = `/** @typedef {{ stemWord(word: string): string }} Stemmer */`

const filePaths: Record<string, { path: string; isWip?: boolean }> = {}

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

for (const dir of ['./snowball/algorithms', './src/wip']) {
	for await (const x of Deno.readDir(dir)) {
		if (x.isFile && x.name.endsWith(sblExt)) {
			const languageName = x.name.slice(0, -sblExt.length)
			const className = `${capitalize(languageName)}Stemmer`

			const languageMeta: { isoCode: string | null; isWip?: boolean } | undefined =
				languageCodes[languageName as keyof typeof languageCodes]

			if (!languageMeta?.isoCode) {
				skipped.push(x.name)
				continue
			}

			const outFilePath = `./dist/stemmers/${languageName}.mjs`

			assertEquals(
				languageMeta.isoCode,
				new Intl.Locale(languageMeta.isoCode).toString(),
				`ISO code ${languageMeta.isoCode} is not normalized`,
			)

			filePaths[languageMeta.isoCode] = { path: outFilePath, isWip: languageMeta.isWip }

			const tempFilePath = await Deno.makeTempFile({ prefix: 'Ctor', suffix: jsExt })

			await new Deno.Command('./snowball/snowball', {
				// cwd: './snowball',
				args: [
					`${dir}/${x.name}`,
					'-js=global',
					'-utf8',
					...['-o', `${tempFilePath.slice(0, -jsExt.length)}`],
					...['-n', className],
				],
			}).output()

			const content = await Deno.readTextFile(tempFilePath)

			if (!content.trim()) throw new Error(`No content for ${languageName}`)

			await writeTextFile(
				outFilePath,
				`${
					content.replace(
						new RegExp(String.raw`^(//.+)[\s\S]+?${className} = function`),
						`$1
				// deno-lint-ignore-file
				import BaseStemmer from '../core/base-stemmer.mjs';

				${StemmerTypeDef}

				/** @type {{ new(): Stemmer }} */
				const ${className} = function`,
					)
						.replace(/$/, `\nexport default ${className};\n`)
						.replace(/^.+require\(.+$/m, '')
						.replace(/^.+module.exports.+$/m, '')
						.replaceAll(
							/(?<!\\)\\u(\p{AHex}{4})/gu,
							(m) => JSON.stringify(JSON.parse(`"${m}"`)).slice(1, -1),
						)
				}`,
			)

			await Deno.remove(tempFilePath)
		}
	}
}

const allImports = Object.entries(filePaths).sort(([a], [b]) => a.localeCompare(b))

const toStemmerImportMap = (imports: typeof allImports) => {
	return imports.map((x) =>
		`[${JSON.stringify(x[0])}, () => import(${JSON.stringify(join('..', relative('./dist', x[1].path)))})],`
	).join('\n')
}

const stemmers = toStemmerImportMap(allImports.filter((x) => !x[1].isWip))
const wip_stemmers = toStemmerImportMap(allImports.filter((x) => x[1].isWip))

const templateReplacements = {
	stemmers,
	wip_stemmers,
}

const getStemmerByLocale = (await Deno.readTextFile('./src/getStemmerByLocale.template.mjs'))
	.replaceAll(
		new RegExp(String.raw`//\s*<(${Object.keys(templateReplacements).join('|')})>[\s\S]+?//\s*</\1>`, 'g'),
		(_, p1) => templateReplacements[p1 as keyof typeof templateReplacements],
	)

await writeTextFile('./dist/core/getStemmerByLocale.mjs', getStemmerByLocale)

for (const path of ['./dist/stemmers', './dist/core']) {
	await new Deno.Command('deno', {
		args: ['fmt', path],
	}).output()
}

function langNameFromPath(path: string) {
	return path.split('/').at(-1)!.split('.').at(0)!
}

console.info(`✅ Wrote ${written.map((path) => green(path)).join(', ')}`)
console.info(`⚠️  Skipped ${skipped.map((path) => yellow(langNameFromPath(path))).join(', ')}`)

// // stop words - TODO

const stopWordTempFilePath = await Deno.makeTempFile()

await new Deno.Command('Rscript', { args: ['./scripts/stopWords.r', stopWordTempFilePath] }).output()
const stopWords = JSON.parse(await Deno.readTextFile(stopWordTempFilePath)) as {
	sources: Record<string, Record<string, string[]>>
}
await Deno.remove(stopWordTempFilePath)

const stopInfo: Record<string, Record<string, string[]>> = {}

for (const [source, langs] of Object.entries(stopWords.sources)) {
	for (const [lang, words] of Object.entries(langs)) {
		stopInfo[lang] ??= {}
		stopInfo[lang][source] = words
	}
}

await Deno.remove('./dist/stop', { recursive: true })

for (const [lang, sources] of Object.entries(stopInfo)) {
	await Deno.mkdir(join('./dist/stop', lang), { recursive: true })

	for (const [source, words] of Object.entries(sources)) {
		await Deno.writeTextFile(join('./dist/stop', lang, `${source}.mjs`), `export default ${JSON.stringify(words)}`)
	}
}

// // TODO: dynamic importing for stop words - see getStopWordsByLocale.template.mjs
// const stopOut: [string, [string, string][]][] = []
