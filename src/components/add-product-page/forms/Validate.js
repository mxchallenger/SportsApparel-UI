import patterns from '../utils/ProductRegex';

/**
 * Validates through a regex pattern.
 * @param {Object} field of a product object to be validated.
 * @returns error string if not matched.
 */
function validate(field) {
  let error = '';

  const key = field[0];
  if (Object.prototype.hasOwnProperty.call(patterns, key)) {
    if (!patterns[key].test(field[1])) {
      error = 'Invalid Format';
    }
  }
  return error;
}

export default validate;
