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
export default async function addProduct(product) {
  await HttpHelper(Constants.PRODUCT_ENDPOINT, 'POST', product)
    .then((response) => {
      if (response.ok) {
        toast.success('A product was added to the database');
        response.json();
      } else {
        toast.error('Failed to add product, check internal error');
      }
    })
    .catch(() => {
      toast.error('Failed to add product to the database, check connectivity');
    });
}
