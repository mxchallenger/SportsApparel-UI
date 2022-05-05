function validateCheckout(delivery, billing, setErrors, setIsValid, checked) {
  const errors = {};
  let isValid = false;

  // validate names
  if (!delivery.firstName) {
    errors.firstName = 'Required Field';
  } else if (!/[a-zA-z '-]+$/.test(delivery.firstName)) {
    errors.firstName = 'Only contains letters, dashes, apostrophes and spaces.';
  }
  if (!delivery.lastName) {
    errors.lastName = 'Required Field';
  } else if (!/[a-zA-z '-]+$/.test(delivery.lastName)) {
    errors.lastName = 'Only contains letters, dashes, apostrophes and spaces.';
  }
  if (!billing.cardholder) {
    errors.cardholder = 'Required Field';
  } else if (!/[a-zA-z '-]+$/.test(billing.cardholder)) {
    errors.cardholder = 'Only contains letters, dashes, apostrophes and spaces.';
  }

  // validate delivery street address
  if (!delivery.street) {
    errors.street = 'Required Field';
  } else if (!/[a-zA-z0-9 -]+$/.test(delivery.street)) {
    errors.street = 'Only contains letters, numbers, apostrophes and spaces.';
  }
  if (!delivery.city) {
    errors.city = 'Required Field';
  } else if (!/[a-zA-z '-]+$/.test(delivery.city)) {
    errors.city = 'Only contains letters, numbers, apostrophes and spaces.';
  }
  if (!delivery.zip) {
    errors.zip = 'Required Field';
  } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(delivery.zip)) {
    errors.zip = 'Only contains 5-9 digits with xxxxx or xxxxx-xxxx';
  }
  if (delivery.state === null) {
    errors.state = 'Required Field';
  }

  // validate billing street address
  if (checked === false) {
    if (!billing.billingStreet) {
      errors.billingStreet = 'Required Field';
    } else if (!/[a-zA-z0-9 -]+$/.test(billing.billingStreet)) {
      errors.billingStreet = 'Only contains letters, numbers, apostrophes and spaces.';
    }
    if (!billing.city) {
      errors.billingCity = 'Required Field';
    } else if (!/[a-zA-z '-]+$/.test(billing.billingCity)) {
      errors.billingCity = 'Only contains letters, numbers, apostrophes and spaces.';
    }
    if (!billing.zip) {
      errors.billingZip = 'Required Field';
    } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(billing.billingZip)) {
      errors.billingZip = 'Only contains 5-9 digits with xxxxx or xxxxx-xxxx';
    }
    if (billing.state === null) {
      errors.billingState = 'Required Field';
    }
  }
  // validate phone & email
  if (!billing.email) {
    errors.email = 'Required Field';
  } else if (!/^[\w-]+@[\w-]+.[\w-]+$/.test(billing.email)) {
    errors.email = 'Invalid email, only contains letters, numbers, dashes, underscores';
  }
  if (!billing.phone) {
    errors.phone = 'Required Field';
  } else if (!/^[\d]{3}-[\d]{3}-[\d]{4}$/.test(billing.phone)) {
    errors.phone = 'Only contains 10 digits, no special characters';
  }

  // validate credit card
  if (!billing.creditCard) {
    errors.creditCard = 'Required Field';
  } else if (!/^[\d]{14,19}$/.test(billing.creditCard)) {
    errors.creditCard = 'Contains 14-19 digits';
  }
  if (!billing.cvv) {
    errors.cvv = 'Required Field';
  } else if (!/^[\d]{3,4}$/.test(billing.cvv)) {
    errors.cvv = 'Contains 3-4 digits';
  }
  if (!billing.expiration) {
    errors.expiration = 'Required Field';
  } else if (!/^(0[1-9]|1[0-2])([/-]{1})[23][\d]$/.test(billing.expiration)) {
    errors.expiration = 'Must be MM/YY or MM-YY';
  }
  /*
    const errorsArray = Object.entries(errors);
    if (errorsArray.length > 0) {
      isValid = false;
    }
  */

  if (!errors.contains) {
    isValid = true;
  }
  setIsValid(isValid);
  setErrors(errors);
}
export default validateCheckout;
