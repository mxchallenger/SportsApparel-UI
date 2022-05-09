// import React from 'react';
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
 * @returns Number
 */
export const getShippingRate = (products) => {
  if (getSubtotal(products) > `$${50}`) {
    return 0;
  }
  return 5;
};
