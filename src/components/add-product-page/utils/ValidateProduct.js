import validateContents from './ValidateContents';
import validateFields from './ValidateFields';

/**
 * Iterates through the fields of a product object to validate each
 * field.
 * @param {Object} product to validate
 * @param {Function} errorsCallback sets errors state variable object
 * @param {Function} pushProduct function that sends a product to add
 * to database.
 */
function validateProduct(product, errorsCallback, pushProduct) {
  const fieldErrors = {};
  Object.entries(product).forEach((field) => {
    let errorValue = '';
    errorValue = validateFields(field);
    if (!errorValue) {
      errorValue = validateContents(field);
    }
    if (errorValue) {
      const error = { [field[0]]: `${errorValue}` };
      Object.assign(fieldErrors, error);
    }
  });

  const errorsArray = Object.entries(fieldErrors);
  if (errorsArray.length <= 0) {
    pushProduct();
  } else {
    errorsCallback(fieldErrors);
  }
}

export default validateProduct;
