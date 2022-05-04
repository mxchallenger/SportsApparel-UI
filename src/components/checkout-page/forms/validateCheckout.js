function validateCheckout(values) {
  const errors = {};
  if (!values.firstName || undefined) {
    errors.firstName = 'Name is required';
  }
  return errors;
}

export default validateCheckout;
