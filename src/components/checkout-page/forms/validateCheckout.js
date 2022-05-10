import { toast } from 'react-toastify';
import { memos, rEx } from './validateUtils';

function validateCheckout(delivery, billing, setErrors, checked, purchaseObj) {
  const errors = {};

  // validate names
  if (!delivery.firstName) {
    errors.firstName = memos.required;
  } else if (!rEx.names.test(delivery.firstName)) {
    errors.firstName = memos.names;
  }
  if (!delivery.lastName) {
    errors.lastName = memos.required;
  } else if (!rEx.names.test(delivery.lastName)) {
    errors.lastName = memos.names;
  }

  if (!billing.cardholder) {
    errors.cardholder = memos.required;
  } else if (!rEx.names.test(billing.cardholder)) {
    errors.cardholder = memos.names;
  }

  // validate delivery street address
  if (!delivery.street) {
    errors.street = memos.required;
  } else if (!rEx.street.test(delivery.street)) {
    errors.street = memos.street;
  }
  if (!delivery.city) {
    errors.city = memos.required;
  } else if (!rEx.names.test(delivery.city)) {
    errors.city = memos.names;
  }
  if (!delivery.zip) {
    errors.zip = memos.required;
  } else if (!rEx.zip.test(delivery.zip)) {
    errors.zip = memos.zip;
  }
  if (delivery.state === 'Choose State' || !delivery.state) {
    errors.state = memos.required;
  }

  // validate billing street address
  if (checked === false) {
    if (!billing.billingStreet) {
      errors.billingStreet = memos.required;
    } else if (!rEx.street.test(billing.billingStreet)) {
      errors.billingStreet = memos.street;
    }
    if (!billing.billingCity) {
      errors.billingCity = memos.required;
    } else if (!rEx.names.test(billing.billingCity)) {
      errors.billingCity = memos.names;
    }
    if (!billing.billingZip) {
      errors.billingZip = memos.required;
    } else if (!rEx.zip.test(billing.billingZip)) {
      errors.billingZip = memos.zip;
    }
    if (billing.billingState === 'Choose State' || !billing.billingState) {
      errors.billingState = memos.required;
    }
  }
  // validate phone & email
  // validate phone & email
  if (!billing.email) {
    errors.email = memos.required;
  } else if (!rEx.email.test(billing.email)) {
    errors.email = memos.email;
  }
  if (!billing.phone) {
    errors.phone = memos.required;
  } else if (!rEx.phone.test(billing.phone)) {
    errors.phone = memos.phone;
  }

  // validate credit card
  if (!billing.creditCard) {
    errors.creditCard = memos.required;
  } else if (!rEx.creditCard.test(billing.creditCard)) {
    errors.creditCard = memos.creditCard;
  }
  if (!billing.cvv) {
    errors.cvv = memos.required;
  } else if (!rEx.cvv.test(billing.cvv)) {
    errors.cvv = memos.cvv;
  }
  if (!billing.expiration) {
    errors.expiration = memos.required;
  } else if (!rEx.expiry.test(billing.expiration)) {
    errors.expiration = memos.expiry;
  }

  if (!Object.entries(errors).length > 0) {
    purchaseObj();
  } else {
    setErrors(errors);
    toast.error('Purchase was not completed and you have not been charged. Please check your errors and try again.');
  }
}
export default validateCheckout;
