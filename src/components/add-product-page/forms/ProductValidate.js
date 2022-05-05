import validate from './Validate';

function productValidate(product, errorsCallback, validCallBack) {
  const fieldErrors = {};
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
  const errorsArray = Object.entries(fieldErrors);
  if (errorsArray.length > 0) {
    validCallBack(false);
  } else {
    validCallBack(true);
  }
  errorsCallback(fieldErrors);
}

export default productValidate;
