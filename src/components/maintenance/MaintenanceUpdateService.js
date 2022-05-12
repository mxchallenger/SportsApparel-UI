import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setUpdatedRow sets state for edited product row
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export default async function updateProducts(setUpdatedRow, setApiError) {
  await HttpHelper(Constants.UPDATE_PRODUCT_ENDPOINT, 'PUT' /* , updatedRow */)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setUpdatedRow)
    .catch(() => {
      setApiError(true);
    });
}
