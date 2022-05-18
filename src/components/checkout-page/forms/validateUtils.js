const memos = {
  required: 'is required',
  names: 'is invalid. Can only contain letters, dashes, apostrophes and spaces.',
  street: 'is invalid. Can only contain letters, numbers, apostrophes and spaces.',
  city: 'is invalid. Can only contain letters, apostrophes and spaces.',
  zip: 'Zip Code is invalid. Can only contain 5-9 digits with xxxxx or xxxxx-xxxx.',
  email: 'Email is invalid. Can only contain letters, numbers, dashes, underscores.',
  phone: 'Phone is invalid. Can only contain 10 digits.',
  card: 'Card number is invalid. Can only contain 14-19 numbers, no special characters.',
  cvv: 'CVV is invalid. Can only contain 3-4 digits.',
  expiryMmYy: 'Expiration date is invalid. Must be MM/YY or MM-YY. Please check your date.',
  expiryPastDate: 'Credit Card is expired.'
};

const rEx = {
  // Validates for lowercase, uppercase, spaces, apostrophes and dashes
  names: /(@"^[a-zA-Z-' ]+[ ]{1}[a-zA-Z-' ]{2,}([^0-9]*)$")/,
  // Validates for lowercase, uppercase, spaces, numbers, dashes and a first and last name.
  street: /[a-zA-z0-9 -]+$/,
  // Validates for numbers formatted as XXXXX or XXXXX-XXXX
  zip: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
  // Validates for alphanumeric, underscore, dashes formatted something@something.something
  email: /^[\w-]+@[\w-]+.[\w-]+$/,
  // Validates for 10 digits and can optionally include (), whitespaces, dots & dashes
  phone: /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
  // Validates for 14-19 numbers with no special characters
  cardNumber: /^[\d]{14,19}$/,
  // Validates for 3-4 numbers with no special characters
  cvv: /^[\d]{3,4}$/,
  // Validates for MM(-/)YY dates 01-09 & 10-12 with a decade of 20-39.
  expiry: /^(0[1-9]|1[0-2])([/-]{1})[23][\d]$/
};

export { memos, rEx };
