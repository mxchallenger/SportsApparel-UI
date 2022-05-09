import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name makePayment
 * @description sends a purchase request
 * @param {*} cartContents items to purchase
 * @returns payment confirmation response
 */
export default async function makePurchase(products, deliveryAddress, billingAddress, creditCard) {
  await HttpHelper(Constants.PURCHASE_ENDPOINT, 'POST', {
    products,
    deliveryAddress,
    billingAddress,
    creditCard
  })
    .then((response) => response.json())
    .catch(() => {
      /* eslint-disable no-console */
      console.log('Failed to purchase');
      /* eslint-enable no-console */
    });
}

/**
 *
 * @name fetchRate
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export async function fetchRate(setRate, shippingState, setApiError) {
  await HttpHelper(`${Constants.SHIPPING_RATES_ENDPOINT}?${shippingState}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setRate)
    .catch(() => {
      setApiError(true);
    });
}
