// @ts-check

const _stopWords = /** @type {const} */ ([
	// <stopWords>
	['en', [['snowball', () => import('../dist/stop/en/snowball.mjs')]]],
	// </stopWords>
])

/** @typedef {typeof _stopWords[number][0]} StopWordLocale */
/** @typedef {typeof _stopWords[number][1][number][0]} StopWordSource */

/** @type Map<string, Map<string, () => Promise<{ default: string[] }>>> */
const stopWords = new Map(_stopWords.map(([k, v]) => [k, new Map(v)]))

/**
 * @typedef {{ sources?: StopWordSource[], allowFallback?: boolean }} Options
 *
 * @property {StopWordSource[]} [sources] - Preferred sources, in order of preference
 * @default true
 *
 * @property {boolean} [allowFallback] - Whether to return stop words from any source
 * if none of the preferred ones are available
 * @default true
 */

/** @type {Options} */
const defaultOptions = {
	sources: ['snowball'],
	allowFallback: true,
}

// StopWordLocale | (string & { locale?: any } type explanation:
// https://github.com/microsoft/TypeScript/issues/29729#issuecomment-460346421

/**
 * Dynamically imports the stop words for a given locale and returns them.
 * If no stop words are available for that locale and with the options provided, returns empty array.
 *
 * @param {StopWordLocale | (string & { locale?: any })} locale
 * @param {Partial<Options>} [options]
 * @return {Promise<string[]>} list of stop words
 */
export async function getStopWordsByLocale(locale, options) {
	const opts = { ...defaultOptions, ...options }

	// TODO: prefer region-specific locale if available (e.g. zh-CN -> zh_cn)
	const { language } = new Intl.Locale(locale)

	const sources = stopWords.get(language)
	if (!sources) return []

	for (const source of opts.sources ?? []) {
		const mod = stopWords.get(language)?.get(source)
		if (mod) return (await mod()).default
	}

	return opts.allowFallback ? (await sources[Symbol.iterator]().next().value).default : []
}
