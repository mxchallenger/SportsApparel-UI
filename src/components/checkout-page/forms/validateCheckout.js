function validateCheckout(delivery, setErrors, setIsValid) {
  const errors = {};
  let isValid = false;
  // validate name
  if (!delivery.firstName) {
    errors.firstName = 'Required Field';
  }
  if (errors.length > 0) {
    isValid = false;
  }
  setErrors(errors);
  setIsValid(isValid);
}

export default validateCheckout;
