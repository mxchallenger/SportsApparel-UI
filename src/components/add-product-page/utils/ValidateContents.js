import patterns from './ProductRegex';

/**
 * Validates through a regex pattern.
 * @param {Object} field of a product object to be validated.
 * @returns error string if not matched.
 */
function validateContents(field) {
  let error = '';

  const key = field[0];
  if (Object.prototype.hasOwnProperty.call(patterns, key)) {
    if (!patterns[key].test(field[1])) {
      error = `${field[0]}: Invalid Format`;
    }
  }
  return error;
}

export default validateContents;
