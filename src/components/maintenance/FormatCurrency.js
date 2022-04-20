/**
 * A JSX value formatter that takes in params (props) and returs the
 * string in a monetary format.
 * @param {Object} priceString containing a number string representing a price.
 * @returns monetary string
 */
export const formatCurrency = (priceString) => '$'.concat(parseFloat(priceString.value).toFixed(2).toString());

export default formatCurrency;
