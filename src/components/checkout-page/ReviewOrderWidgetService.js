import React from 'react';
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
export const getSubtotal = (products) => {
  const errorMessage = <h1> Oops, your cart is empty! </h1>;
  if (products.length > 0) {
    return toPrice(products.reduce(
      (acc, item) => acc + (item.quantity * item.price), 0
    ));
  }
  return errorMessage;
};
