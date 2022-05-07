/**
 *
 * @param {Object} field is a product field.
 * @returns {Object} error object for state.
 */
function validateFields(field) {
  let error = '';
  let inputValue = field[1];
  if (typeof (inputValue) === 'string') {
    inputValue = inputValue.trim();
  }
  if ((inputValue === undefined || inputValue === null || inputValue === '')) {
    error = `${field[0]}: Required Field`;
  }
  return error;
}

export default validateFields;
