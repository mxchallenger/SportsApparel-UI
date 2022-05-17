import HttpHelper from '../../utils/HttpHelper';
import Constants, { REVIEW_PRODUCTID_ENDPOINT } from '../../utils/constants';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export default async function fetchProducts(currentPage, setReviews, setApiError) {
  await HttpHelper(`${REVIEW_PRODUCTID_ENDPOINT}${currentPage + 1}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setReviews)
    .catch(() => {
      setApiError(true);
    });
}
