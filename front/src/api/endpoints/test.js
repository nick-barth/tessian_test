/*
 * ADMIN
 * =====
 */

export default function getChampionApi (exec) {

	/*
	 * Expose API
	 * --
	 * On top for clarity, mind the hoisting
	 */
	return {
		getFilters
	};



	/*
	 * Get all questions
	 * --
	 * @return {Promise} from .exec
	 */
	function getFilters () {
		return exec({
			method: 'get',
			url: '/filters'
		});
	}

}
