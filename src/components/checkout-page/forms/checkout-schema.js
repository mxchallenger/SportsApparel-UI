import { creditCard } from '../CheckoutPage'

function checkoutRules(values) {
  const schema = {
    names: /[a-zA-z '-]+$/,
    nErr: 'Only contains letters, numbers, apostrophes and spaces.',
    cityStreet: /[a-zA-z0-9 -]+$/,
    csErr: 'Only contains letters, numbers, dashes and spaces.',
    zip: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
    zErr: 'Only contains 5-9 digits with xxxxx or xxxxx-xxxx formatting',
    email: /^[\w-]+@[\w-]+.[\w-]+$/,
    eErr: 'Invalid email, only contains letters, numbers, dashes, underscores',
    phone: /^[\d]{10}$/,
    pErr: 'Only contains 10 digits, no special characters',
    card: /^[\d]{14,19}$/,
    cErr: 'Contains 14-19 digits',
    cvv: /^[\d]{3,4}$/,
    vErr: 'Contains 3-4 digits',
    expiry: /^(0[1-9]|1[0-2])([\/-]{1})[23][\d]$/,
    xErr: 'Month must be 1-12, no letters or special characters and be formatted MM/YY or MM-YY',
  };
  expValidate = (value) => {
    const ed = creditCard[expiration];
    const arr = ed.split(/'\/-'/);
    const month = arr[0];
    const year = arr[1] + 2000;
    const ed2 = moment(`${year} ${month}`, 'YYYY-MM').format();
    const today = Date.now();
    const expiry = ed2.getUTCMilliseconds();
    if (today > expiry) {
      return 'Expired Card'
    }
  }
};
export default checkoutRules;