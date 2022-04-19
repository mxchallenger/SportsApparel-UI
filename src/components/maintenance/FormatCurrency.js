/**
 * A JSX value formatter that takes in params (props) and returs the
 * string in a monetary format.
 * @param {Object} params a number representing a price.
 * @returns monetary string
 */
export const formatCurrency = (params) => '$'.concat(parseFloat(params.value).toFixed(2).toString());

export default formatCurrency;
