import { validate } from './Validate';

export const productValidate = (product) => {
  const errors = [];
  Object.entries(product).forEach((e) => validate(e, errors));
  return errors.join(' * ');
};
export default productValidate;
