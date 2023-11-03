import { assertEquals, assertExists, assertRejects } from 'std/assert/mod.ts'
import { getStemmerByLocale } from '../dist/core/getStemmerByLocale.mjs'
import EnglishStemmer from '../dist/stemmers/english.mjs'
import SpanishStemmer from '../dist/stemmers/spanish.mjs'

type Stemmer = { stemWord(word: string): string }
type StemmerConstructor = { new (): Stemmer }

function assertSameStem(stemmer: Stemmer, word1: string, word2: string) {
	assertEquals(stemmer.stemWord(word1), stemmer.stemWord(word2))
}

Deno.test('TS type checking', () => {
	const _tsCheck = async () => {
		for (const stemmer of [new EnglishStemmer(), new (await getStemmerByLocale('en'))!()]) {
			type Params = Parameters<typeof stemmer.stemWord>
			type Return = ReturnType<typeof stemmer.stemWord>
			type NullishNumber = null | undefined | number
			// type checking will fail if `Params` length > 1 or is a type that doesn't include `[string]`
			const _paramIncludesString: [string] = [''] as Params
			// type checking will fail if `Params[0]` is `any` or is nullable
			const _paramExcludesNonString: Exclude<[NullishNumber | string], Params> = [1] as [NullishNumber]
			// type checking will fail if `Return` is a type that doesn't include `string`
			const _returnIncludesString: string = '' as Return
			// type checking will fail if `Return` is `any` or is nullable
			const _returnExcludesNonString: Exclude<NullishNumber | string, Return> = 1 as NullishNumber
		}

		const _en1: StemmerConstructor = await getStemmerByLocale('en')
		const _en2: StemmerConstructor = await getStemmerByLocale('en', { allowWip: true })
		const _en3: StemmerConstructor = await getStemmerByLocale('en', { allowWip: false })

		const _allowedWip: StemmerConstructor = await getStemmerByLocale('cs', { allowWip: true })

		const dynamicStr = String('')
		const localeObj = new Intl.Locale('')

		const _dynamic1: StemmerConstructor | null = await getStemmerByLocale(dynamicStr)
		const _dynamic2: StemmerConstructor | null = await getStemmerByLocale(dynamicStr, { allowWip: true })
		const _dynamic3: StemmerConstructor | null = await getStemmerByLocale(dynamicStr, { allowWip: false })

		const _dynamicWithObj1: StemmerConstructor | null = await getStemmerByLocale(localeObj)
		const _dynamicWithObj2: StemmerConstructor | null = await getStemmerByLocale(localeObj, { allowWip: true })
		const _dynamicWithObj3: StemmerConstructor | null = await getStemmerByLocale(localeObj, { allowWip: false })

		// ⚠️ expected errors below

		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'StemmerConstructor'.
		const _disallowedWip: StemmerConstructor = await getStemmerByLocale('cs', { allowWip: false })
		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'StemmerConstructor'.
		const _defaultDisallowedWip: StemmerConstructor = await getStemmerByLocale('cs')

		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'null'.
		const _noexist1: null = await getStemmerByLocale('xx', { allowWip: true })
		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'null'.
		const _noexist2: null = await getStemmerByLocale('xx', { allowWip: false })
		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'null'.
		const _noexist3: null = await getStemmerByLocale('xx')

		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'StemmerConstructor'.
		const _dynamic4: StemmerConstructor = await getStemmerByLocale(dynamicStr)
		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'StemmerConstructor'.
		const _dynamic5: StemmerConstructor = await getStemmerByLocale(dynamicStr, { allowWip: true })
		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'StemmerConstructor'.
		const _dynamic6: StemmerConstructor = await getStemmerByLocale(dynamicStr, { allowWip: false })

		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'null'.
		const _dynamic7: null = await getStemmerByLocale(dynamicStr)
		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'null'.
		const _dynamic8: null = await getStemmerByLocale(dynamicStr, { allowWip: true })
		// @ts-expect-error Type 'StemmerConstructor | null' is not assignable to type 'null'.
		const _dynamic9: null = await getStemmerByLocale(dynamicStr, { allowWip: false })
	}
})

Deno.test('English Stemmer', () => {
	const stemmer = new EnglishStemmer()

	assertSameStem(stemmer, 'locate', 'location')
})

Deno.test('Spanish Stemmer', () => {
	const stemmer = new SpanishStemmer()

	assertSameStem(stemmer, 'ubicar', 'ubicación')
})

Deno.test('getStemmerByLocale', async (t) => {
	await t.step('language-only locale returns correct stemmer', async () => {
		const locale = 'es'

		const Stemmer = await getStemmerByLocale(locale)
		const stemmer = new Stemmer()

		assertExists(stemmer)
		assertSameStem(stemmer, 'ubicar', 'ubicación')
	})

	await t.step('fully-specified locale returns correct stemmer for its ase language', async () => {
		const locale = 'es-Latn-MX'

		const Stemmer = await getStemmerByLocale(locale)
		const stemmer = new Stemmer!()

		assertExists(stemmer)
		assertSameStem(stemmer, 'ubicar', 'ubicación')
	})

	await t.step('fully-specified `Intl.Locale` obj returns correct stemmer for its base language', async () => {
		const locale = new Intl.Locale('es-Latn-MX')

		const Stemmer = await getStemmerByLocale(locale)
		const stemmer = new Stemmer!()

		assertExists(stemmer)
		assertSameStem(stemmer, 'ubicar', 'ubicación')
	})

	await t.step('absent locale returns null', async () => {
		const locale = 'xx-XX'

		const Stemmer = await getStemmerByLocale(locale)

		assertEquals(Stemmer, null)
	})

	await t.step('invalid locale throws', () => {
		const locale = '!?*$'

		assertRejects(() => Promise.resolve(getStemmerByLocale(locale)))
	})

	await t.step('WIP locale returns null with default options', async () => {
		const locale = 'cs'
		const Stemmer = await getStemmerByLocale(locale)

		assertEquals(Stemmer, null)
	})

	await t.step('WIP locale returns WIP stemmer with `allowWip=true`', async () => {
		const locale = 'cs'

		const Stemmer = await getStemmerByLocale(locale, { allowWip: true })
		const stemmer = new Stemmer()

		assertExists(stemmer)
	})

	await t.step('fallbacks', async () => {
		const dynamicLocales = ['xx', 'yy'] // not sure if these exist
		const fallbackLocale = 'en'

		let Stemmer: Awaited<ReturnType<typeof getStemmerByLocale>> = null
		for (const locale of dynamicLocales) Stemmer ??= await getStemmerByLocale(locale)
		Stemmer ??= await getStemmerByLocale(fallbackLocale) // `en` stemmer exists - type of `Stemmer` now omits `null`

		const stemmer = new Stemmer()

		assertExists(stemmer)
	})
})
