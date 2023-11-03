// @ts-check

/** @typedef {{ stemWord(word: string): string }} Stemmer */
/** @typedef {{ new(): Stemmer }} StemmerConstructor */

const _stemmers = /** @type {const} */ ([
	['ar', () => import('../stemmers/arabic.mjs')],
	['ca', () => import('../stemmers/catalan.mjs')],
	['da', () => import('../stemmers/danish.mjs')],
	['de', () => import('../stemmers/german.mjs')],
	['el', () => import('../stemmers/greek.mjs')],
	['en', () => import('../stemmers/english.mjs')],
	['es', () => import('../stemmers/spanish.mjs')],
	['et', () => import('../stemmers/estonian.mjs')],
	['eu', () => import('../stemmers/basque.mjs')],
	['fi', () => import('../stemmers/finnish.mjs')],
	['fr', () => import('../stemmers/french.mjs')],
	['ga', () => import('../stemmers/irish.mjs')],
	['hi', () => import('../stemmers/hindi.mjs')],
	['hu', () => import('../stemmers/hungarian.mjs')],
	['hy', () => import('../stemmers/armenian.mjs')],
	['id', () => import('../stemmers/indonesian.mjs')],
	['it', () => import('../stemmers/italian.mjs')],
	['lt', () => import('../stemmers/lithuanian.mjs')],
	['ne', () => import('../stemmers/nepali.mjs')],
	['nl', () => import('../stemmers/dutch.mjs')],
	['no', () => import('../stemmers/norwegian.mjs')],
	['pt', () => import('../stemmers/portuguese.mjs')],
	['ro', () => import('../stemmers/romanian.mjs')],
	['ru', () => import('../stemmers/russian.mjs')],
	['sr', () => import('../stemmers/serbian.mjs')],
	['sv', () => import('../stemmers/swedish.mjs')],
	['ta', () => import('../stemmers/tamil.mjs')],
	['tr', () => import('../stemmers/turkish.mjs')],
	['yi', () => import('../stemmers/yiddish.mjs')],
])

const _wipStemmers = /** @type {const} */ ([
	['cs', () => import('../stemmers/czech.mjs')],
	['pl', () => import('../stemmers/polish.mjs')],
	['sk', () => import('../stemmers/slovak.mjs')],
	['uk', () => import('../stemmers/ukrainian.mjs')],
])

/** @typedef {typeof _stemmers[number][0]} StemmerLocale */
/** @typedef {typeof _wipStemmers[number][0]} WipStemmerLocale */

/** @type Map<string, () => Promise<{ default: StemmerConstructor }>> */
const stemmers = new Map(_stemmers)
/** @type Map<string, () => Promise<{ default: StemmerConstructor }>> */
const wipStemmers = new Map(_wipStemmers)

/**
 * @typedef {Object} Options
 *
 * @property {boolean} [allowWip] - Whether to allow work-in-progress stemmers or not.
 * If not, `null` is returned for any work-in-progress stemmers.
 * @default false
 */

/** @type {Options} */
const defaultOptions = {
	allowWip: false,
}

/**
 * @overload
 * @param {StemmerLocale} locale
 * @param {Partial<Options>} [options]
 * @return {Promise<StemmerConstructor>} `Stemmer` constructor
 */

/**
 * @overload
 * @param {StemmerLocale | WipStemmerLocale} locale
 * @param {Partial<Options> & { allowWip: true }} options
 * @returns {Promise<StemmerConstructor>} `Stemmer` constructor
 */

/**
 * @overload
 * @param {string | Intl.Locale} locale
 * @param {Partial<Options>} [options]
 * @returns {Promise<StemmerConstructor | null>} `Stemmer` constructor, or `null` if none available for that locale
 * @throws {TypeError} if an invalid locale is passed
 */

/**
 * Dynamically imports the stemmer class for a given locale and returns it.
 * If no stemmer class is available for that locale, returns `null` instead
 *
 * @param {string | Intl.Locale} locale
 * @param {Partial<Options>} [options]
 * @returns {Promise<StemmerConstructor | null>} `Stemmer` constructor, or `null` if none available for that locale
 */
export async function getStemmerByLocale(locale, options) {
	const { allowWip } = { ...defaultOptions, ...options }
	const { language } = new Intl.Locale(locale)

	const mod = stemmers.get(language) ?? (allowWip ? wipStemmers.get(language) : null)
	return mod ? (await mod()).default : null
}
