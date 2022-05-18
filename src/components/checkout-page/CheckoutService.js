import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';
import toast from '../toast/Toast';

/**
 *
 * @name makePayment
 * @description sends a purchase request
 * @param {*} cartContents items to purchase
 * @returns payment confirmation response
 */
export default async function makePurchase(products, deliveryAddress, billingAddress, creditCard) {
  await HttpHelper(Constants.PURCHASE_ENDPOINT, 'POST', {
    lineItems: products,
    deliveryAddress,
    billingAddress,
    creditCard
  })
    .then((response) => {
      if (response.ok) {
        response.json();
      } else {
        toast.error('Failed to add product, check internal error');
      }
    });
}
