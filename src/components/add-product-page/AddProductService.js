import { toast } from 'react-toastify';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name addProduct
 * @description sends an add product request
 * @param {*} product to add to product repository
 * @returns product added response
 */
export default async function addProduct(products) {
  await HttpHelper(Constants.PRODUCT_ENDPOINT, 'POST', {
    products
  })
    .then((response) => response.json())
    .catch(() => {
      toast.error('Failed to add product to the database, check connectivity');
    });
}
