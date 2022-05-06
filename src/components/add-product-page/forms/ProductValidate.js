import validate from './Validate';

function productValidate(product, errorsCallback, pushProduct) {
  const fieldErrors = {};
  const productArray = Object.entries(product);
  if (productArray.length > 0) {
    Object.entries(product).forEach((field) => {
      const key = field[0];
      if (field[1] === undefined) {
        const error = { [key]: 'Required Field' };
        Object.assign(fieldErrors, error);
      } else {
        const errorValue = validate(field);
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

export default productValidate;
