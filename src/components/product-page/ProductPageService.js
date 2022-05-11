import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export async function fetchProducts(setProducts, urlQuery, setApiError) {
  await HttpHelper(`${Constants.PRODUCTS_ACTIVE_ENDPOINT}?${urlQuery}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setProducts)
    .catch(() => {
      setApiError(true);
    });
}

/**
* @name fetchProductsCount
* @description Utilizes HttpHelper to make a get request to an API
* @param {*} setCount sets state for amount of products
* @param {*} setApiError sets error if response other than 200 is returned
* @returns sets state for product count if 200 response, else sets state for apiError
*/
export async function fetchProductsCount(setCount, setApiError, queryString) {
  await HttpHelper(`${Constants.PRODUCTS_COUNT}?${queryString}`, 'GET')
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
