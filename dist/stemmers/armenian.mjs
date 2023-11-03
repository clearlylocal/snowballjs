// Generated by Snowball 2.2.0 - https://snowballstem.org/
// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'

/** @typedef {{ stemWord(word: string): string }} Stemmer */

/** @type {{ new(): Stemmer }} */
const ArmenianStemmer = function () {
	var base = new BaseStemmer()
	/** @const */ var a_0 = [
		['րորդ', -1, 1],
		['երորդ', 0, 1],
		['ալի', -1, 1],
		['ակի', -1, 1],
		['որակ', -1, 1],
		['եղ', -1, 1],
		['ական', -1, 1],
		['արան', -1, 1],
		['են', -1, 1],
		['եկեն', 8, 1],
		['երեն', 8, 1],
		['որէն', -1, 1],
		['ին', -1, 1],
		['գին', 12, 1],
		['ովին', 12, 1],
		['լայն', -1, 1],
		['վուն', -1, 1],
		['պես', -1, 1],
		['իվ', -1, 1],
		['ատ', -1, 1],
		['ավետ', -1, 1],
		['կոտ', -1, 1],
		['բար', -1, 1],
	]

	/** @const */ var a_1 = [
		['ա', -1, 1],
		['ացա', 0, 1],
		['եցա', 0, 1],
		['վե', -1, 1],
		['ացրի', -1, 1],
		['ացի', -1, 1],
		['եցի', -1, 1],
		['վեցի', 6, 1],
		['ալ', -1, 1],
		['ըալ', 8, 1],
		['անալ', 8, 1],
		['ենալ', 8, 1],
		['ացնալ', 8, 1],
		['ել', -1, 1],
		['ըել', 13, 1],
		['նել', 13, 1],
		['ցնել', 15, 1],
		['եցնել', 16, 1],
		['չել', 13, 1],
		['վել', 13, 1],
		['ացվել', 19, 1],
		['եցվել', 19, 1],
		['տել', 13, 1],
		['ատել', 22, 1],
		['ոտել', 22, 1],
		['կոտել', 24, 1],
		['ված', -1, 1],
		['ում', -1, 1],
		['վում', 27, 1],
		['ան', -1, 1],
		['ցան', 29, 1],
		['ացան', 30, 1],
		['ացրին', -1, 1],
		['ացին', -1, 1],
		['եցին', -1, 1],
		['վեցին', 34, 1],
		['ալիս', -1, 1],
		['ելիս', -1, 1],
		['ավ', -1, 1],
		['ացավ', 38, 1],
		['եցավ', 38, 1],
		['ալով', -1, 1],
		['ելով', -1, 1],
		['ար', -1, 1],
		['ացար', 43, 1],
		['եցար', 43, 1],
		['ացրիր', -1, 1],
		['ացիր', -1, 1],
		['եցիր', -1, 1],
		['վեցիր', 48, 1],
		['աց', -1, 1],
		['եց', -1, 1],
		['ացրեց', 51, 1],
		['ալուց', -1, 1],
		['ելուց', -1, 1],
		['ալու', -1, 1],
		['ելու', -1, 1],
		['աք', -1, 1],
		['ցաք', 57, 1],
		['ացաք', 58, 1],
		['ացրիք', -1, 1],
		['ացիք', -1, 1],
		['եցիք', -1, 1],
		['վեցիք', 62, 1],
		['անք', -1, 1],
		['ցանք', 64, 1],
		['ացանք', 65, 1],
		['ացրինք', -1, 1],
		['ացինք', -1, 1],
		['եցինք', -1, 1],
		['վեցինք', 69, 1],
	]

	/** @const */ var a_2 = [
		['որդ', -1, 1],
		['ույթ', -1, 1],
		['ուհի', -1, 1],
		['ցի', -1, 1],
		['իլ', -1, 1],
		['ակ', -1, 1],
		['յակ', 5, 1],
		['անակ', 5, 1],
		['իկ', -1, 1],
		['ուկ', -1, 1],
		['ան', -1, 1],
		['պան', 10, 1],
		['ստան', 10, 1],
		['արան', 10, 1],
		['եղէն', -1, 1],
		['յուն', -1, 1],
		['ություն', 15, 1],
		['ածո', -1, 1],
		['իչ', -1, 1],
		['ուս', -1, 1],
		['ուստ', -1, 1],
		['գար', -1, 1],
		['վոր', -1, 1],
		['ավոր', 22, 1],
		['ոց', -1, 1],
		['անօց', -1, 1],
		['ու', -1, 1],
		['ք', -1, 1],
		['չեք', 27, 1],
		['իք', 27, 1],
		['ալիք', 29, 1],
		['անիք', 29, 1],
		['վածք', 27, 1],
		['ույք', 27, 1],
		['ենք', 27, 1],
		['ոնք', 27, 1],
		['ունք', 27, 1],
		['մունք', 36, 1],
		['իչք', 27, 1],
		['արք', 27, 1],
	]

	/** @const */ var a_3 = [
		['սա', -1, 1],
		['վա', -1, 1],
		['ամբ', -1, 1],
		['դ', -1, 1],
		['անդ', 3, 1],
		['ությանդ', 4, 1],
		['վանդ', 4, 1],
		['ոջդ', 3, 1],
		['երդ', 3, 1],
		['ներդ', 8, 1],
		['ուդ', 3, 1],
		['ը', -1, 1],
		['անը', 11, 1],
		['ությանը', 12, 1],
		['վանը', 12, 1],
		['ոջը', 11, 1],
		['երը', 11, 1],
		['ները', 16, 1],
		['ի', -1, 1],
		['վի', 18, 1],
		['երի', 18, 1],
		['ների', 20, 1],
		['անում', -1, 1],
		['երում', -1, 1],
		['ներում', 23, 1],
		['ն', -1, 1],
		['ան', 25, 1],
		['ության', 26, 1],
		['վան', 26, 1],
		['ին', 25, 1],
		['երին', 29, 1],
		['ներին', 30, 1],
		['ությանն', 25, 1],
		['երն', 25, 1],
		['ներն', 33, 1],
		['ուն', 25, 1],
		['ոջ', -1, 1],
		['ությանս', -1, 1],
		['վանս', -1, 1],
		['ոջս', -1, 1],
		['ով', -1, 1],
		['անով', 40, 1],
		['վով', 40, 1],
		['երով', 40, 1],
		['ներով', 43, 1],
		['եր', -1, 1],
		['ներ', 45, 1],
		['ց', -1, 1],
		['ից', 47, 1],
		['վանից', 48, 1],
		['ոջից', 48, 1],
		['վից', 48, 1],
		['երից', 48, 1],
		['ներից', 52, 1],
		['ցից', 48, 1],
		['ոց', 47, 1],
		['ուց', 47, 1],
	]

	/** @const */ var /** Array<int> */ g_v = [209, 4, 128, 0, 18]

	var /** number */ I_p2 = 0
	var /** number */ I_pV = 0

	/** @return {boolean} */
	function r_mark_regions() {
		I_pV = base.limit
		I_p2 = base.limit
		var /** number */ v_1 = base.cursor
		lab0: {
			golab1: while (true) {
				lab2: {
					if (!(base.in_grouping(g_v, 1377, 1413))) {
						break lab2
					}
					break golab1
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			I_pV = base.cursor
			golab3: while (true) {
				lab4: {
					if (!(base.out_grouping(g_v, 1377, 1413))) {
						break lab4
					}
					break golab3
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			golab5: while (true) {
				lab6: {
					if (!(base.in_grouping(g_v, 1377, 1413))) {
						break lab6
					}
					break golab5
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			golab7: while (true) {
				lab8: {
					if (!(base.out_grouping(g_v, 1377, 1413))) {
						break lab8
					}
					break golab7
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			I_p2 = base.cursor
		}
		base.cursor = v_1
		return true
	}

	/** @return {boolean} */
	function r_R2() {
		return I_p2 <= base.cursor
	}

	/** @return {boolean} */
	function r_adjective() {
		base.ket = base.cursor
		if (base.find_among_b(a_0) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_verb() {
		base.ket = base.cursor
		if (base.find_among_b(a_1) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_noun() {
		base.ket = base.cursor
		if (base.find_among_b(a_2) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_ending() {
		base.ket = base.cursor
		if (base.find_among_b(a_3) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!r_R2()) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	this.stem = /** @return {boolean} */ function () {
		r_mark_regions()
		base.limit_backward = base.cursor
		base.cursor = base.limit
		if (base.cursor < I_pV) {
			return false
		}
		var /** number */ v_3 = base.limit_backward
		base.limit_backward = I_pV
		var /** number */ v_4 = base.limit - base.cursor
		r_ending()
		base.cursor = base.limit - v_4
		var /** number */ v_5 = base.limit - base.cursor
		r_verb()
		base.cursor = base.limit - v_5
		var /** number */ v_6 = base.limit - base.cursor
		r_adjective()
		base.cursor = base.limit - v_6
		var /** number */ v_7 = base.limit - base.cursor
		r_noun()
		base.cursor = base.limit - v_7
		base.limit_backward = v_3
		base.cursor = base.limit_backward
		return true
	}

	/**@return{string}*/
	this['stemWord'] = function (/**string*/ word) {
		base.setCurrent(word)
		this.stem()
		return base.getCurrent()
	}
}

export default ArmenianStemmer
