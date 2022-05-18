/**
 * REGEX patterns used in validation.
 */
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
  Sku: /^[A-Z]{3}-[A-Z]{3}-([A-Z]{2,10})$/,
  ImageSrc: /^(http(s)?:\/\/)[a-zA-Z0-9@:%._\\+~#?&-//=]{2,256}$/
};

export default patterns;
