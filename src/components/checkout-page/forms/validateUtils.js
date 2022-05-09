const memos = {
  required: 'Required Field',
  names: 'Only contains letters, dashes, apostrophes and spaces.',
  street: 'Only contains letters, numbers, apostrophes and spaces.',
  city: 'Only contains letters, apostrophes and spaces.',
  zip: 'Only contains 5-9 digits with xxxxx or xxxxx-xxxx',
  email: 'Invalid email, only contains letters, numbers, dashes, underscores',
  phone: 'Only contains 10 digits, no special characters',
  creditCard: 'Contains 14-19 digits',
  cvv: 'Contains 3-4 digits',
  expiration: 'Must be MM/YY or MM-YY'
};

const rEx = {
  names: /[a-zA-z '-]+$/,
  street: /[a-zA-z0-9 -]+$/,
  city: /[a-zA-z '-]+$/,
  zip: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
  email: /^[\w-]+@[\w-]+.[\w-]+$/,
  phone: /^[\d]{10}$/,
  creditCard: /^[\d]{14,19}$/,
  cvv: /^[\d]{3,4}$/,
  expiry: /^(0[1-9]|1[0-2])([/-]{1})[23][\d]$/
};

export { memos, rEx };
