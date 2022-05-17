import { toast } from 'react-toastify';
import { memos, rEx } from './validateUtils';

function validateCheckout(delivery, billing, setErrors, checked, purchaseObj) {
  const errors = {};

  // validate names
  if (!delivery.firstName) {
    errors.firstName = `First Name ${memos.required}`;
    // ${label}? for first names?
  } else if (!rEx.names.test(delivery.firstName)) {
    errors.firstName = `First Name ${memos.names}`;
  }
  if (!delivery.lastName) {
    errors.lastName = `Last name ${memos.required}`;
  } else if (!rEx.names.test(delivery.lastName)) {
    errors.lastName = `Last name ${memos.names}`;
  }

  if (!billing.cardholder) {
    errors.cardholder = `Cardholder name ${memos.required}`;
  } else if (!rEx.names.test(billing.cardholder)) {
    errors.cardholder = `Cardholder name ${memos.names}`;
  }

  // validate delivery street address
  if (!delivery.street) {
    errors.street = `Street ${memos.required}`;
  } else if (!rEx.street.test(delivery.street)) {
    errors.street = `Street ${memos.street}`;
  }
  if (!delivery.city) {
    errors.city = `City ${memos.required}`;
  } else if (!rEx.names.test(delivery.city)) {
    errors.city = `City ${memos.city}`;
  }
  if (!delivery.zip) {
    errors.zip = `Zip code ${memos.required}`;
  } else if (!rEx.zip.test(delivery.zip)) {
    errors.zip = `Delivery ${memos.zip}`;
  }
  if (delivery.state === 'Choose State' || !delivery.state) {
    errors.state = `State ${memos.required}`;
  }

  // validate billing street address
  if (checked === false) {
    if (!billing.billingStreet) {
      errors.billingStreet = `Billing street ${memos.required}`;
    } else if (!rEx.street.test(billing.billingStreet)) {
      errors.billingStreet = `Billing street ${memos.street}`;
    }
    if (!billing.billingCity) {
      errors.billingCity = `Billing city ${memos.required}`;
    } else if (!rEx.names.test(billing.billingCity)) {
      errors.billingCity = `Billing city ${memos.city}`;
    }
    if (!billing.billingZip) {
      errors.billingZip = `Billing zip ${memos.required}`;
    } else if (!rEx.zip.test(billing.billingZip)) {
      errors.billingZip = `Billing ${memos.zip}`;
    }
    if (billing.billingState === 'Choose State' || !billing.billingState) {
      errors.billingState = `Billing state ${memos.required}`;
    }
  }
  // validate phone & email
  if (!billing.email) {
    errors.email = `Email ${memos.required}`;
  } else if (!rEx.email.test(billing.email)) {
    errors.email = memos.email;
  }
  if (!billing.phone) {
    errors.phone = `Phone ${memos.required}`;
  } else if (!rEx.phone.test(billing.phone)) {
    errors.phone = memos.phone;
  }

  // validate credit card
  if (!billing.creditCard) {
    errors.creditCard = `Card number ${memos.required}`;
  } else if (!rEx.cardNumber.test(billing.creditCard)) {
    errors.creditCard = memos.card;
  }

  if (!billing.cvv) {
    errors.cvv = `CVV ${memos.required}`;
  } else if (!rEx.cvv.test(billing.cvv)) {
    errors.cvv = memos.cvv;
  }
  // Checks if field is empty
  if (!billing.expiration) {
    errors.expiration = `Expiration date ${memos.required}`;
    // Checks for a month of 01-09 or 10-12
    // Checks for a special character of / or -
    // Checks for a decade of 2 or 3 followed by any digit 0-9
  } else if (!rEx.expiry.test(billing.expiration)) {
    errors.expiration = memos.expiryMmYy;
  } else {
    // split the expiration date into parts
    const parts = billing.expiration.split(/\D/);
    // convert month to int & add a month
    const month = parseInt(parts[0], 10) + 1;
    // convert year to int
    const year = parseInt(parts[1], 10);
    // compile dateString param with YYYY-MM
    const dateString = `20${year}-${month}`;
    // get todays date in milliseconds since Jan 1, 1970
    const today = Date.now();
    // push dateString param through parse to get milliseconds since
    // Jan 1, 1970 for card expiration date
    const expiryDate = Date.parse(dateString);
    // checks to see if card expiration is greater than today in milliseconds
    if (today > expiryDate) {
      errors.expiration = memos.expiryPastDate;
    }
  }
  // Runs the final validation step, checks to see if there are errors present
  // calls the purchase method if there are no errors
  // otherwise sets errors and runs a toast

  if (!Object.entries(errors).length > 0) {
    purchaseObj();
  } else {
    setErrors(errors);
    toast.error('Purchase was not charged, please check your errors and try again.');
  }
}
export default validateCheckout;
