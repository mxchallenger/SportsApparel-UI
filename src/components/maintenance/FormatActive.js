/**
 * A JSX value formatter that returns true or false based on input value.
 * @param {Object} isActive containing a boolean value.
 * @returns either 'true' or 'false' as a string.
 */
export const formatActive = (isActive) => (isActive.value === true ? 'True' : 'False');

export default formatActive;
