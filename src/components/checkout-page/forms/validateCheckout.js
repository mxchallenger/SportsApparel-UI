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
  } else if (!rEx.cardNumber.test(billing.creditCard)) {
    errors.creditCard = memos.card;
  }
  if (!billing.cvv) {
    errors.cvv = memos.required;
  } else if (!rEx.cvv.test(billing.cvv)) {
    errors.cvv = memos.cvv;
  }
  // Checks if field is empty
  if (!billing.expiration) {
    errors.expiration = memos.required;
    // Checks for a month of 01-09 or 10-12
    // Checks for a special character of / or -
    // Checks for a decade of 2 or 3 followed by any digit 0-9
  } else if (!rEx.expiry.test(billing.expiration)) {
    errors.expiration = memos.expiryMmYy;
    const isExpiryValid = () => {
      const parts = billing.expiration.split(/\D/);
      const month = parseInt(parts[0], 10) + 1;
      const year = parseInt(parts[1], 10);
      const dateString = `20${year}-``0${month}`;
      const today = Date.now();
      const cardDate = Date.parse(dateString);
      const isCardDateOk = today < cardDate;

      if (!rEx.expiry.test(billing.expiration)) {
        errors.expiration = memos.expiryMmYy;
      } else if (isCardDateOk === false) {
        errors.expiration = memos.expiryPastDate;
      }
    };
    // Runs the final validation step, checks to see if there are errors present
    // calls the purchase method if there are no errors
    // otherwise sets errors and runs a toast

    if (!Object.entries(errors).length > 0) {
      purchaseObj();
    } else {
      setErrors(errors);
      toast.error('Purchase was not completed and you have not been charged. Please check your errors and try again.');
    }
  }
}
export default validateCheckout;
