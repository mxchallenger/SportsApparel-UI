/**
 * A JSX value formatter that returns true or false based on input value.
 * @param {Object} params truthy or falsey value.
 * @returns either 'true' or 'false' as a string.
 */
export const formatActive = (params) => (params.value === true ? 'True' : 'False');

export default formatActive;
