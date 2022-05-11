// import React from 'react';
import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 * converts a price to a formatted string
 * @param {number} price
 * @returns {string} formatted price
 */
export const toPrice = (price) => `$${price.toFixed(2)}`;

/**
 * Gets the subtotal of an order
 * @param {Object []} products
 * @returns Number
 */
export const getSubtotal = (products) => toPrice(products.reduce(
  (acc, item) => acc + (item.quantity * item.price), 0
));

/**
 * Gets the subtotal of an order
 * * @param {Object []} products
 * * @param {int} rate
 * @returns Number
 */
export const getShippingRate = (products, rate) => {
  if (getSubtotal(products) > `$${50}`) {
    return 0 + rate;
  }
  return 5 + rate;
};

/**
 *
 * @name fetchRate
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setRate sets state for rate
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
export async function fetchRate(shippingState, setRateObject, setApiError) {
  await HttpHelper(`${Constants.SHIPPING_RATE_ENDPOINT}/?state=${shippingState}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then(setRateObject)
    .catch(() => {
      setApiError(false);
    });
}
