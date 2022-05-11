const memos = {
  required: 'Required Field',
  names: 'Only contains letters, dashes, apostrophes and spaces.',
  street: 'Only contains letters, numbers, apostrophes and spaces.',
  city: 'Only contains letters, apostrophes and spaces.',
  zip: 'Only contains 5-9 digits with xxxxx or xxxxx-xxxx',
  email: 'Invalid email, only contains letters, numbers, dashes, underscores',
  phone: 'Only contains 10 digits, no special characters',
  card: 'Only contains 14-19 numbers, no special characters',
  cvv: 'Contains 3-4 digits',
  expiryMmYy: 'Invalid Date, must be MM/YY or MM-YY',
  expiryPastDate: 'Credit Card is expired'
};

const rEx = {
  // Validates for lowercase, uppercase, spaces, apostrophes and dashes
  names: /[a-zA-z '-]+$/,
  // Validates for lowercase, uppercase, spaces, numbers and dashes
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

const isExpiryValid = (expiration) => {
  // split the expiration date into parts
  const parts = expiration.split(/\D/);
  // convert month to int & add a month
  const month = parseInt(parts[0], 10) + 1;
  // convert year to int
  const year = parseInt(parts[1], 10);
  // compile dateString param with YYYY-MM
  const dateString = `20${year}-``0${month}`;
  // get todays date in milliseconds since Jan 1, 1970
  const today = Date.now();
  // push dateString param through parse to get milliseconds since
  // Jan 1, 1970 for card expiration date
  const cardDate = Date.parse(dateString);
  // checks to see if card expiration is greater than today in milliseconds
  return today < cardDate;
};

export { memos, rEx, isExpiryValid };
