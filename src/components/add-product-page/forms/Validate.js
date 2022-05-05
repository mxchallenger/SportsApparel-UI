function validate(field) {
  let error = '';
  const patterns = {
    Name: /^[a-zA-Z' -]+$/,
    Description: /^[a-zA-Z', -]+$/,
    Brand: /^[a-zA-Z' -]+$/,
    Type: /^[a-zA-Z' -]+$/,
    Category: /^[a-zA-Z' -]+$/,
    Material: /^[a-zA-Z' -]+$/,
    Quantity: /^[\d]+$/,
    Price: /^\$[0-9]+(\.[0-9]{2})$/,
    StyleNumber: /^sc([\d]{5})$/,
    GlobalProductCode: /^po-([A-Z]{7})$/,
    Sku: /^[A-Z]{3}-[A-Z]{3}-([A-Z]{2,10})$/
  };
  const key = field[0];
  if (Object.prototype.hasOwnProperty.call(patterns, key)) {
    if (!patterns[key].test(field[1])) {
      error = 'Invalid Format';
    }
  }
  return error;
}

export default validate;
