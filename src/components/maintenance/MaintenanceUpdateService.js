import { toast } from 'react-toastify';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name updateProducts
 * @description Utilizes HttpHelper to make a Put request to an API
 * @param {*} setUpdatedRow sets state for edited product row
 * @var updatedRow.data payload object to be sent in our request
 * @returns toasts confirming a successful or unsuccessful update.
 */
export default async function updateProducts(setUpdatedRow) {
  await HttpHelper(`${Constants.UPDATE_PRODUCT_ENDPOINT}/${setUpdatedRow.data.id}`, 'PUT', setUpdatedRow.data)
    .then((response) => {
      if (response.ok) {
        toast.success(`The product with ID of : ${setUpdatedRow.data.id} was successfully updated to the database!`);
        response.json();
      } else {
        toast.error('The product was not added to the database');
      }
    })
    .then(setUpdatedRow);
}
