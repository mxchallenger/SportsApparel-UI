import { toast } from 'react-toastify';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name updateProducts
 * @description Utilizes HttpHelper to make a Put request to an API
 * @param {*} setUpdatedRow sets state for edited product row
 * @param {*} setApiError sets error if response other than 200 is returned
 * @param {*} updatedRow payload object to be sent in request
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export default async function updateProducts(setUpdatedRow) {
  await HttpHelper(`${Constants.UPDATE_PRODUCT_ENDPOINT}/${setUpdatedRow.data.id}`, 'PUT', setUpdatedRow.data)
    .then((response) => {
      if (response.ok) {
        toast.success(`The product with ID of :${setUpdatedRow.data.id} was successfully edited!`);
        response.json();
      } else {
        toast.error('The product was not added to the database');
      }
    })
    .then(setUpdatedRow);
}
