import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';
/**
 *
 * @name fetchProductsCount
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setCount sets state for amount of products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for product count if 200 response, else sets state for apiError
 */
export default async function fetchProductsCount2(setCount, queryString, setApiError) {
  await HttpHelper(`${Constants.ACTIVE_COUNT_FILTER_ENDPOINT}?${queryString}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setCount)
    .catch(() => {
      setApiError(false);
    });
}
