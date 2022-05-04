export const validate = (field, errors) => {
  const patterns = {
    name: /^[a-zA-Z', -]+$/,
    description: /^[a-zA-Z', -]+$/,
    brand: /^[a-zA-Z', -]+$/,
    type: /^[a-zA-Z', -]+$/,
    category: /^[a-zA-Z', -]+$/,
    material: /^[a-zA-Z', -]+$/,
    quantity: /^[\d]+$/,
    price: /^\$[0-9]+(\.[0-9]{2})$/,
    styleNumber: /^(sc[\d]{5})$/,
    globalProductCode: /^(po-[A-Z]{7})$/,
    sku: /^[A-Z]{3}-[A-Z]{3}-([A-Z]{2,10})$/
  };

  if (field[1] === undefined) {
    errors.push(`${field[0]} is a required field`);
  } else {
    const key = String((field[0])).toLowerCase();
    if (Object.prototype.hasOwnProperty.call(patterns, key)) {
      if (!patterns[key].test(field[1])) {
        errors.push(`${field[0]}: invalid format`);
      }
    }
  }
};

export default validate;
