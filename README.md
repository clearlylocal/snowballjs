# Snowball.js

ESM-compatible ([EcmaScript modules](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)) build of [snowballstem/snowball](https://github.com/snowballstem/snowball), with TypeScript-compatible types provided by JSDoc. For use in modern JavaScript and TypeScript apps on the Web, Deno, or Nodejs.

Also includes the following functionality:
* Dynamically import stemmer by locale
* Get stop words by locale (via [quanteda/stopwords](https://github.com/quanteda/stopwords))

## Compile

```sh
deno task compile
```

## Test

```sh
deno task test
```

## Import in your code

Import and instantiate a stemmer for an individual language:

```js
import EnglishStemmer from 'snowball/esm/stemmers/english.mjs'

const stemmer = new EnglishStemmer()
stemmer.stemWord('location') // locat
```

Import a stemmer for a language using its ISO code:

```js
import { getStemmerByLocale } from 'snowball/esm/core/getStemmerByLocale.mjs'

const locale = 'es' // Spanish

const Stemmer = await getStemmerByLocale(locale)
const stemmer = new Stemmer()

stemmer.stemWord('ubicación') // ubic
```

TypeScript will detect the type of an imported stemmer as being `StemmerConstructor | null` if locale is a dynamic string, or `StemmerConstructor` if it's a constant string literal that corresponds to an existing stemmer. You can thus implement a fallback with a known locale like this:

```ts
import { getStemmerByLocale } from 'snowball/esm/core/getStemmerByLocale.mjs'

const dynamicLocales = ['xx', 'yy'] // not sure if these exist
const fallbackLocale = 'en'

let Stemmer: Awaited<ReturnType<typeof getStemmerByLocale>> = null
for (const locale of dynamicLocales) Stemmer ??= await getStemmerByLocale(locale)
Stemmer ??= await getStemmerByLocale(fallbackLocale) // `en` stemmer exists - type of `Stemmer` now omits `null`

const stemmer = new Stemmer()
```
