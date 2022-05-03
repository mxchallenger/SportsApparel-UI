const required = (field, errors) => {
  if (field[1] === undefined) {
    errors.push(`${field[0]} is a required field`);
  }
};

// const validateStrings = (product, errors) => {
//   // errors.push(`${field[0]}: format is incorrect`);
//   errors.push('Name: format is incorrect');
// };

export const productValidate = (product) => {
  const errors = [];
  Object.entries(product).forEach((e) => required(e, errors));
  // validateStrings(product.Name, errors);
  return errors.join(' * ');
};
export default productValidate;
