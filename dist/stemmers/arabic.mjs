// Generated by Snowball 2.2.0 - https://snowballstem.org/
// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'

/** @typedef {{ stemWord(word: string): string }} Stemmer */

/** @type {{ new(): Stemmer }} */
const ArabicStemmer = function () {
	var base = new BaseStemmer()
	/** @const */ var a_0 = [
		['ـ', -1, 1],
		['ً', -1, 1],
		['ٌ', -1, 1],
		['ٍ', -1, 1],
		['َ', -1, 1],
		['ُ', -1, 1],
		['ِ', -1, 1],
		['ّ', -1, 1],
		['ْ', -1, 1],
		['٠', -1, 2],
		['١', -1, 3],
		['٢', -1, 4],
		['٣', -1, 5],
		['٤', -1, 6],
		['٥', -1, 7],
		['٦', -1, 8],
		['٧', -1, 9],
		['٨', -1, 10],
		['٩', -1, 11],
		['ﺀ', -1, 12],
		['ﺁ', -1, 16],
		['ﺂ', -1, 16],
		['ﺃ', -1, 13],
		['ﺄ', -1, 13],
		['ﺅ', -1, 17],
		['ﺆ', -1, 17],
		['ﺇ', -1, 14],
		['ﺈ', -1, 14],
		['ﺉ', -1, 15],
		['ﺊ', -1, 15],
		['ﺋ', -1, 15],
		['ﺌ', -1, 15],
		['ﺍ', -1, 18],
		['ﺎ', -1, 18],
		['ﺏ', -1, 19],
		['ﺐ', -1, 19],
		['ﺑ', -1, 19],
		['ﺒ', -1, 19],
		['ﺓ', -1, 20],
		['ﺔ', -1, 20],
		['ﺕ', -1, 21],
		['ﺖ', -1, 21],
		['ﺗ', -1, 21],
		['ﺘ', -1, 21],
		['ﺙ', -1, 22],
		['ﺚ', -1, 22],
		['ﺛ', -1, 22],
		['ﺜ', -1, 22],
		['ﺝ', -1, 23],
		['ﺞ', -1, 23],
		['ﺟ', -1, 23],
		['ﺠ', -1, 23],
		['ﺡ', -1, 24],
		['ﺢ', -1, 24],
		['ﺣ', -1, 24],
		['ﺤ', -1, 24],
		['ﺥ', -1, 25],
		['ﺦ', -1, 25],
		['ﺧ', -1, 25],
		['ﺨ', -1, 25],
		['ﺩ', -1, 26],
		['ﺪ', -1, 26],
		['ﺫ', -1, 27],
		['ﺬ', -1, 27],
		['ﺭ', -1, 28],
		['ﺮ', -1, 28],
		['ﺯ', -1, 29],
		['ﺰ', -1, 29],
		['ﺱ', -1, 30],
		['ﺲ', -1, 30],
		['ﺳ', -1, 30],
		['ﺴ', -1, 30],
		['ﺵ', -1, 31],
		['ﺶ', -1, 31],
		['ﺷ', -1, 31],
		['ﺸ', -1, 31],
		['ﺹ', -1, 32],
		['ﺺ', -1, 32],
		['ﺻ', -1, 32],
		['ﺼ', -1, 32],
		['ﺽ', -1, 33],
		['ﺾ', -1, 33],
		['ﺿ', -1, 33],
		['ﻀ', -1, 33],
		['ﻁ', -1, 34],
		['ﻂ', -1, 34],
		['ﻃ', -1, 34],
		['ﻄ', -1, 34],
		['ﻅ', -1, 35],
		['ﻆ', -1, 35],
		['ﻇ', -1, 35],
		['ﻈ', -1, 35],
		['ﻉ', -1, 36],
		['ﻊ', -1, 36],
		['ﻋ', -1, 36],
		['ﻌ', -1, 36],
		['ﻍ', -1, 37],
		['ﻎ', -1, 37],
		['ﻏ', -1, 37],
		['ﻐ', -1, 37],
		['ﻑ', -1, 38],
		['ﻒ', -1, 38],
		['ﻓ', -1, 38],
		['ﻔ', -1, 38],
		['ﻕ', -1, 39],
		['ﻖ', -1, 39],
		['ﻗ', -1, 39],
		['ﻘ', -1, 39],
		['ﻙ', -1, 40],
		['ﻚ', -1, 40],
		['ﻛ', -1, 40],
		['ﻜ', -1, 40],
		['ﻝ', -1, 41],
		['ﻞ', -1, 41],
		['ﻟ', -1, 41],
		['ﻠ', -1, 41],
		['ﻡ', -1, 42],
		['ﻢ', -1, 42],
		['ﻣ', -1, 42],
		['ﻤ', -1, 42],
		['ﻥ', -1, 43],
		['ﻦ', -1, 43],
		['ﻧ', -1, 43],
		['ﻨ', -1, 43],
		['ﻩ', -1, 44],
		['ﻪ', -1, 44],
		['ﻫ', -1, 44],
		['ﻬ', -1, 44],
		['ﻭ', -1, 45],
		['ﻮ', -1, 45],
		['ﻯ', -1, 46],
		['ﻰ', -1, 46],
		['ﻱ', -1, 47],
		['ﻲ', -1, 47],
		['ﻳ', -1, 47],
		['ﻴ', -1, 47],
		['ﻵ', -1, 51],
		['ﻶ', -1, 51],
		['ﻷ', -1, 49],
		['ﻸ', -1, 49],
		['ﻹ', -1, 50],
		['ﻺ', -1, 50],
		['ﻻ', -1, 48],
		['ﻼ', -1, 48],
	]

	/** @const */ var a_1 = [
		['آ', -1, 1],
		['أ', -1, 1],
		['ؤ', -1, 1],
		['إ', -1, 1],
		['ئ', -1, 1],
	]

	/** @const */ var a_2 = [
		['آ', -1, 1],
		['أ', -1, 1],
		['ؤ', -1, 2],
		['إ', -1, 1],
		['ئ', -1, 3],
	]

	/** @const */ var a_3 = [
		['ال', -1, 2],
		['بال', -1, 1],
		['كال', -1, 1],
		['لل', -1, 2],
	]

	/** @const */ var a_4 = [
		['أآ', -1, 2],
		['أأ', -1, 1],
		['أؤ', -1, 1],
		['أإ', -1, 4],
		['أا', -1, 3],
	]

	/** @const */ var a_5 = [
		['ف', -1, 1],
		['و', -1, 1],
	]

	/** @const */ var a_6 = [
		['ال', -1, 2],
		['بال', -1, 1],
		['كال', -1, 1],
		['لل', -1, 2],
	]

	/** @const */ var a_7 = [
		['ب', -1, 1],
		['با', 0, -1],
		['بب', 0, 2],
		['كك', -1, 3],
	]

	/** @const */ var a_8 = [
		['سأ', -1, 4],
		['ست', -1, 2],
		['سن', -1, 3],
		['سي', -1, 1],
	]

	/** @const */ var a_9 = [
		['تست', -1, 1],
		['نست', -1, 1],
		['يست', -1, 1],
	]

	/** @const */ var a_10 = [
		['كما', -1, 3],
		['هما', -1, 3],
		['نا', -1, 2],
		['ها', -1, 2],
		['ك', -1, 1],
		['كم', -1, 2],
		['هم', -1, 2],
		['هن', -1, 2],
		['ه', -1, 1],
		['ي', -1, 1],
	]

	/** @const */ var a_11 = [
		['ن', -1, 1],
	]

	/** @const */ var a_12 = [
		['ا', -1, 1],
		['و', -1, 1],
		['ي', -1, 1],
	]

	/** @const */ var a_13 = [
		['ات', -1, 1],
	]

	/** @const */ var a_14 = [
		['ت', -1, 1],
	]

	/** @const */ var a_15 = [
		['ة', -1, 1],
	]

	/** @const */ var a_16 = [
		['ي', -1, 1],
	]

	/** @const */ var a_17 = [
		['كما', -1, 3],
		['هما', -1, 3],
		['نا', -1, 2],
		['ها', -1, 2],
		['ك', -1, 1],
		['كم', -1, 2],
		['هم', -1, 2],
		['كن', -1, 2],
		['هن', -1, 2],
		['ه', -1, 1],
		['كمو', -1, 3],
		['ني', -1, 2],
	]

	/** @const */ var a_18 = [
		['ا', -1, 1],
		['تا', 0, 2],
		['تما', 0, 4],
		['نا', 0, 2],
		['ت', -1, 1],
		['ن', -1, 1],
		['ان', 5, 3],
		['تن', 5, 2],
		['ون', 5, 3],
		['ين', 5, 3],
		['ي', -1, 1],
	]

	/** @const */ var a_19 = [
		['وا', -1, 1],
		['تم', -1, 1],
	]

	/** @const */ var a_20 = [
		['و', -1, 1],
		['تمو', 0, 2],
	]

	/** @const */ var a_21 = [
		['ى', -1, 1],
	]

	var /** boolean */ B_is_defined = false
	var /** boolean */ B_is_verb = false
	var /** boolean */ B_is_noun = false

	/** @return {boolean} */
	function r_Normalize_pre() {
		var /** number */ among_var
		var /** number */ v_1 = base.cursor
		lab0: {
			while (true) {
				var /** number */ v_2 = base.cursor
				lab1: {
					lab2: {
						var /** number */ v_3 = base.cursor
						lab3: {
							base.bra = base.cursor
							among_var = base.find_among(a_0)
							if (among_var == 0) {
								break lab3
							}
							base.ket = base.cursor
							switch (among_var) {
								case 1:
									if (!base.slice_del()) {
										return false
									}
									break
								case 2:
									if (!base.slice_from('0')) {
										return false
									}
									break
								case 3:
									if (!base.slice_from('1')) {
										return false
									}
									break
								case 4:
									if (!base.slice_from('2')) {
										return false
									}
									break
								case 5:
									if (!base.slice_from('3')) {
										return false
									}
									break
								case 6:
									if (!base.slice_from('4')) {
										return false
									}
									break
								case 7:
									if (!base.slice_from('5')) {
										return false
									}
									break
								case 8:
									if (!base.slice_from('6')) {
										return false
									}
									break
								case 9:
									if (!base.slice_from('7')) {
										return false
									}
									break
								case 10:
									if (!base.slice_from('8')) {
										return false
									}
									break
								case 11:
									if (!base.slice_from('9')) {
										return false
									}
									break
								case 12:
									if (!base.slice_from('ء')) {
										return false
									}
									break
								case 13:
									if (!base.slice_from('أ')) {
										return false
									}
									break
								case 14:
									if (!base.slice_from('إ')) {
										return false
									}
									break
								case 15:
									if (!base.slice_from('ئ')) {
										return false
									}
									break
								case 16:
									if (!base.slice_from('آ')) {
										return false
									}
									break
								case 17:
									if (!base.slice_from('ؤ')) {
										return false
									}
									break
								case 18:
									if (!base.slice_from('ا')) {
										return false
									}
									break
								case 19:
									if (!base.slice_from('ب')) {
										return false
									}
									break
								case 20:
									if (!base.slice_from('ة')) {
										return false
									}
									break
								case 21:
									if (!base.slice_from('ت')) {
										return false
									}
									break
								case 22:
									if (!base.slice_from('ث')) {
										return false
									}
									break
								case 23:
									if (!base.slice_from('ج')) {
										return false
									}
									break
								case 24:
									if (!base.slice_from('ح')) {
										return false
									}
									break
								case 25:
									if (!base.slice_from('خ')) {
										return false
									}
									break
								case 26:
									if (!base.slice_from('د')) {
										return false
									}
									break
								case 27:
									if (!base.slice_from('ذ')) {
										return false
									}
									break
								case 28:
									if (!base.slice_from('ر')) {
										return false
									}
									break
								case 29:
									if (!base.slice_from('ز')) {
										return false
									}
									break
								case 30:
									if (!base.slice_from('س')) {
										return false
									}
									break
								case 31:
									if (!base.slice_from('ش')) {
										return false
									}
									break
								case 32:
									if (!base.slice_from('ص')) {
										return false
									}
									break
								case 33:
									if (!base.slice_from('ض')) {
										return false
									}
									break
								case 34:
									if (!base.slice_from('ط')) {
										return false
									}
									break
								case 35:
									if (!base.slice_from('ظ')) {
										return false
									}
									break
								case 36:
									if (!base.slice_from('ع')) {
										return false
									}
									break
								case 37:
									if (!base.slice_from('غ')) {
										return false
									}
									break
								case 38:
									if (!base.slice_from('ف')) {
										return false
									}
									break
								case 39:
									if (!base.slice_from('ق')) {
										return false
									}
									break
								case 40:
									if (!base.slice_from('ك')) {
										return false
									}
									break
								case 41:
									if (!base.slice_from('ل')) {
										return false
									}
									break
								case 42:
									if (!base.slice_from('م')) {
										return false
									}
									break
								case 43:
									if (!base.slice_from('ن')) {
										return false
									}
									break
								case 44:
									if (!base.slice_from('ه')) {
										return false
									}
									break
								case 45:
									if (!base.slice_from('و')) {
										return false
									}
									break
								case 46:
									if (!base.slice_from('ى')) {
										return false
									}
									break
								case 47:
									if (!base.slice_from('ي')) {
										return false
									}
									break
								case 48:
									if (!base.slice_from('لا')) {
										return false
									}
									break
								case 49:
									if (!base.slice_from('لأ')) {
										return false
									}
									break
								case 50:
									if (!base.slice_from('لإ')) {
										return false
									}
									break
								case 51:
									if (!base.slice_from('لآ')) {
										return false
									}
									break
							}
							break lab2
						}
						base.cursor = v_3
						if (base.cursor >= base.limit) {
							break lab1
						}
						base.cursor++
					}
					continue
				}
				base.cursor = v_2
				break
			}
		}
		base.cursor = v_1
		return true
	}

	/** @return {boolean} */
	function r_Normalize_post() {
		var /** number */ among_var
		var /** number */ v_1 = base.cursor
		lab0: {
			base.limit_backward = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (base.find_among_b(a_1) == 0) {
				break lab0
			}
			base.bra = base.cursor
			if (!base.slice_from('ء')) {
				return false
			}
			base.cursor = base.limit_backward
		}
		base.cursor = v_1
		var /** number */ v_2 = base.cursor
		lab1: {
			while (true) {
				var /** number */ v_3 = base.cursor
				lab2: {
					lab3: {
						var /** number */ v_4 = base.cursor
						lab4: {
							base.bra = base.cursor
							among_var = base.find_among(a_2)
							if (among_var == 0) {
								break lab4
							}
							base.ket = base.cursor
							switch (among_var) {
								case 1:
									if (!base.slice_from('ا')) {
										return false
									}
									break
								case 2:
									if (!base.slice_from('و')) {
										return false
									}
									break
								case 3:
									if (!base.slice_from('ي')) {
										return false
									}
									break
							}
							break lab3
						}
						base.cursor = v_4
						if (base.cursor >= base.limit) {
							break lab2
						}
						base.cursor++
					}
					continue
				}
				base.cursor = v_3
				break
			}
		}
		base.cursor = v_2
		return true
	}

	/** @return {boolean} */
	function r_Checks1() {
		var /** number */ among_var
		base.bra = base.cursor
		among_var = base.find_among(a_3)
		if (among_var == 0) {
			return false
		}
		base.ket = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length <= 4) {
					return false
				}
				B_is_noun = true
				B_is_verb = false
				B_is_defined = true
				break
			case 2:
				if (base.current.length <= 3) {
					return false
				}
				B_is_noun = true
				B_is_verb = false
				B_is_defined = true
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Prefix_Step1() {
		var /** number */ among_var
		base.bra = base.cursor
		among_var = base.find_among(a_4)
		if (among_var == 0) {
			return false
		}
		base.ket = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length <= 3) {
					return false
				}
				if (!base.slice_from('أ')) {
					return false
				}
				break
			case 2:
				if (base.current.length <= 3) {
					return false
				}
				if (!base.slice_from('آ')) {
					return false
				}
				break
			case 3:
				if (base.current.length <= 3) {
					return false
				}
				if (!base.slice_from('ا')) {
					return false
				}
				break
			case 4:
				if (base.current.length <= 3) {
					return false
				}
				if (!base.slice_from('إ')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Prefix_Step2() {
		base.bra = base.cursor
		if (base.find_among(a_5) == 0) {
			return false
		}
		base.ket = base.cursor
		if (base.current.length <= 3) {
			return false
		}
		{
			var /** number */ v_1 = base.cursor
			lab0: {
				if (!(base.eq_s('ا'))) {
					break lab0
				}
				return false
			}
			base.cursor = v_1
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Prefix_Step3a_Noun() {
		var /** number */ among_var
		base.bra = base.cursor
		among_var = base.find_among(a_6)
		if (among_var == 0) {
			return false
		}
		base.ket = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length <= 5) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				if (base.current.length <= 4) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Prefix_Step3b_Noun() {
		var /** number */ among_var
		base.bra = base.cursor
		among_var = base.find_among(a_7)
		if (among_var == 0) {
			return false
		}
		base.ket = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length <= 3) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				if (base.current.length <= 3) {
					return false
				}
				if (!base.slice_from('ب')) {
					return false
				}
				break
			case 3:
				if (base.current.length <= 3) {
					return false
				}
				if (!base.slice_from('ك')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Prefix_Step3_Verb() {
		var /** number */ among_var
		base.bra = base.cursor
		among_var = base.find_among(a_8)
		if (among_var == 0) {
			return false
		}
		base.ket = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length <= 4) {
					return false
				}
				if (!base.slice_from('ي')) {
					return false
				}
				break
			case 2:
				if (base.current.length <= 4) {
					return false
				}
				if (!base.slice_from('ت')) {
					return false
				}
				break
			case 3:
				if (base.current.length <= 4) {
					return false
				}
				if (!base.slice_from('ن')) {
					return false
				}
				break
			case 4:
				if (base.current.length <= 4) {
					return false
				}
				if (!base.slice_from('أ')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Prefix_Step4_Verb() {
		base.bra = base.cursor
		if (base.find_among(a_9) == 0) {
			return false
		}
		base.ket = base.cursor
		if (base.current.length <= 4) {
			return false
		}
		B_is_verb = true
		B_is_noun = false
		if (!base.slice_from('است')) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Noun_Step1a() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_10)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length < 4) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				if (base.current.length < 5) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 3:
				if (base.current.length < 6) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Noun_Step1b() {
		base.ket = base.cursor
		if (base.find_among_b(a_11) == 0) {
			return false
		}
		base.bra = base.cursor
		if (base.current.length <= 5) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Noun_Step2a() {
		base.ket = base.cursor
		if (base.find_among_b(a_12) == 0) {
			return false
		}
		base.bra = base.cursor
		if (base.current.length <= 4) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Noun_Step2b() {
		base.ket = base.cursor
		if (base.find_among_b(a_13) == 0) {
			return false
		}
		base.bra = base.cursor
		if (base.current.length < 5) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Noun_Step2c1() {
		base.ket = base.cursor
		if (base.find_among_b(a_14) == 0) {
			return false
		}
		base.bra = base.cursor
		if (base.current.length < 4) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Noun_Step2c2() {
		base.ket = base.cursor
		if (base.find_among_b(a_15) == 0) {
			return false
		}
		base.bra = base.cursor
		if (base.current.length < 4) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Noun_Step3() {
		base.ket = base.cursor
		if (base.find_among_b(a_16) == 0) {
			return false
		}
		base.bra = base.cursor
		if (base.current.length < 3) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Verb_Step1() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_17)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length < 4) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				if (base.current.length < 5) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 3:
				if (base.current.length < 6) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Verb_Step2a() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_18)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length < 4) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				if (base.current.length < 5) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 3:
				if (base.current.length <= 5) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 4:
				if (base.current.length < 6) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Verb_Step2b() {
		base.ket = base.cursor
		if (base.find_among_b(a_19) == 0) {
			return false
		}
		base.bra = base.cursor
		if (base.current.length < 5) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_Verb_Step2c() {
		var /** number */ among_var
		base.ket = base.cursor
		among_var = base.find_among_b(a_20)
		if (among_var == 0) {
			return false
		}
		base.bra = base.cursor
		switch (among_var) {
			case 1:
				if (base.current.length < 4) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
			case 2:
				if (base.current.length < 6) {
					return false
				}
				if (!base.slice_del()) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_Suffix_All_alef_maqsura() {
		base.ket = base.cursor
		if (base.find_among_b(a_21) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_from('ي')) {
			return false
		}
		return true
	}

	this.stem = /** @return {boolean} */ function () {
		B_is_noun = true
		B_is_verb = true
		B_is_defined = false
		var /** number */ v_1 = base.cursor
		r_Checks1()
		base.cursor = v_1
		r_Normalize_pre()
		base.limit_backward = base.cursor
		base.cursor = base.limit
		var /** number */ v_3 = base.limit - base.cursor
		lab0: {
			lab1: {
				var /** number */ v_4 = base.limit - base.cursor
				lab2: {
					if (!B_is_verb) {
						break lab2
					}
					lab3: {
						var /** number */ v_5 = base.limit - base.cursor
						lab4: {
							{
								var v_6 = 1
								while (true) {
									var /** number */ v_7 = base.limit - base.cursor
									lab5: {
										if (!r_Suffix_Verb_Step1()) {
											break lab5
										}
										v_6--
										continue
									}
									base.cursor = base.limit - v_7
									break
								}
								if (v_6 > 0) {
									break lab4
								}
							}
							lab6: {
								var /** number */ v_8 = base.limit - base.cursor
								lab7: {
									if (!r_Suffix_Verb_Step2a()) {
										break lab7
									}
									break lab6
								}
								base.cursor = base.limit - v_8
								lab8: {
									if (!r_Suffix_Verb_Step2c()) {
										break lab8
									}
									break lab6
								}
								base.cursor = base.limit - v_8
								if (base.cursor <= base.limit_backward) {
									break lab4
								}
								base.cursor--
							}
							break lab3
						}
						base.cursor = base.limit - v_5
						lab9: {
							if (!r_Suffix_Verb_Step2b()) {
								break lab9
							}
							break lab3
						}
						base.cursor = base.limit - v_5
						if (!r_Suffix_Verb_Step2a()) {
							break lab2
						}
					}
					break lab1
				}
				base.cursor = base.limit - v_4
				lab10: {
					if (!B_is_noun) {
						break lab10
					}
					var /** number */ v_9 = base.limit - base.cursor
					lab11: {
						lab12: {
							var /** number */ v_10 = base.limit - base.cursor
							lab13: {
								if (!r_Suffix_Noun_Step2c2()) {
									break lab13
								}
								break lab12
							}
							base.cursor = base.limit - v_10
							lab14: {
								lab15: {
									if (!B_is_defined) {
										break lab15
									}
									break lab14
								}
								if (!r_Suffix_Noun_Step1a()) {
									break lab14
								}
								lab16: {
									var /** number */ v_12 = base.limit - base.cursor
									lab17: {
										if (!r_Suffix_Noun_Step2a()) {
											break lab17
										}
										break lab16
									}
									base.cursor = base.limit - v_12
									lab18: {
										if (!r_Suffix_Noun_Step2b()) {
											break lab18
										}
										break lab16
									}
									base.cursor = base.limit - v_12
									lab19: {
										if (!r_Suffix_Noun_Step2c1()) {
											break lab19
										}
										break lab16
									}
									base.cursor = base.limit - v_12
									if (base.cursor <= base.limit_backward) {
										break lab14
									}
									base.cursor--
								}
								break lab12
							}
							base.cursor = base.limit - v_10
							lab20: {
								if (!r_Suffix_Noun_Step1b()) {
									break lab20
								}
								lab21: {
									var /** number */ v_13 = base.limit - base.cursor
									lab22: {
										if (!r_Suffix_Noun_Step2a()) {
											break lab22
										}
										break lab21
									}
									base.cursor = base.limit - v_13
									lab23: {
										if (!r_Suffix_Noun_Step2b()) {
											break lab23
										}
										break lab21
									}
									base.cursor = base.limit - v_13
									if (!r_Suffix_Noun_Step2c1()) {
										break lab20
									}
								}
								break lab12
							}
							base.cursor = base.limit - v_10
							lab24: {
								lab25: {
									if (!B_is_defined) {
										break lab25
									}
									break lab24
								}
								if (!r_Suffix_Noun_Step2a()) {
									break lab24
								}
								break lab12
							}
							base.cursor = base.limit - v_10
							if (!r_Suffix_Noun_Step2b()) {
								base.cursor = base.limit - v_9
								break lab11
							}
						}
					}
					if (!r_Suffix_Noun_Step3()) {
						break lab10
					}
					break lab1
				}
				base.cursor = base.limit - v_4
				if (!r_Suffix_All_alef_maqsura()) {
					break lab0
				}
			}
		}
		base.cursor = base.limit - v_3
		base.cursor = base.limit_backward
		var /** number */ v_15 = base.cursor
		lab26: {
			var /** number */ v_16 = base.cursor
			lab27: {
				if (!r_Prefix_Step1()) {
					base.cursor = v_16
					break lab27
				}
			}
			var /** number */ v_17 = base.cursor
			lab28: {
				if (!r_Prefix_Step2()) {
					base.cursor = v_17
					break lab28
				}
			}
			lab29: {
				var /** number */ v_18 = base.cursor
				lab30: {
					if (!r_Prefix_Step3a_Noun()) {
						break lab30
					}
					break lab29
				}
				base.cursor = v_18
				lab31: {
					if (!B_is_noun) {
						break lab31
					}
					if (!r_Prefix_Step3b_Noun()) {
						break lab31
					}
					break lab29
				}
				base.cursor = v_18
				if (!B_is_verb) {
					break lab26
				}
				var /** number */ v_19 = base.cursor
				lab32: {
					if (!r_Prefix_Step3_Verb()) {
						base.cursor = v_19
						break lab32
					}
				}
				if (!r_Prefix_Step4_Verb()) {
					break lab26
				}
			}
		}
		base.cursor = v_15
		r_Normalize_post()
		return true
	}

	/**@return{string}*/
	this['stemWord'] = function (/**string*/ word) {
		base.setCurrent(word)
		this.stem()
		return base.getCurrent()
	}
}

export default ArabicStemmer
