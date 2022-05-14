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
export async function fetchProducts(setProducts, currentPage, urlQuery, setApiError) {
  await HttpHelper(`${Constants.PRODUCTS_ACTIVE_ENDPOINT}${currentPage + 1}${urlQuery}`, 'GET')
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
export async function fetchProductsCount(setProducts, setApiError) {
  await HttpHelper(`${Constants.PRODUCTS_ACTIVE_ENDPOINT}${1}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setProducts)
    .catch(() => {
      setApiError(false);
    });
}
