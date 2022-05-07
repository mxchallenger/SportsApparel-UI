import validateContents from './ValidateContents';

/**
 *
 * @param {Object} product to validate
 * @param {Function} errorsCallback sets errors state variable object
 * @param {Function} pushProduct function that sends a product to add
 * to database.
 */
function validateProduct(product, errorsCallback, pushProduct) {
  const fieldErrors = {};
  const productArray = Object.entries(product);
  if (productArray.length > 0) {
    Object.entries(product).forEach((field) => {
      const key = field[0];
      let inputValue = field[1];
      if (typeof (inputValue) === 'string') {
        inputValue = inputValue.trim();
      }
      if ((inputValue === undefined) || (inputValue === null)) {
        const error = { [key]: 'Required Field' };
        Object.assign(fieldErrors, error);
      } else {
        const errorValue = validateContents(field);
        if (errorValue) {
          const error = { [key]: `${errorValue}` };
          Object.assign(fieldErrors, error);
        }
      }
    });
  } else {
    Object.assign(fieldErrors, { Name: 'All fields are required.' });
  }
  const errorsArray = Object.entries(fieldErrors);
  if (errorsArray.length <= 0) {
    pushProduct();
  } else {
    errorsCallback(fieldErrors);
  }
}

export default validateProduct;
