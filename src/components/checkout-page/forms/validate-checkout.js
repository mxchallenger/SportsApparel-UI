import { deliveryAddress, billingAddress, creditCard } from '../CheckoutPage';
import { schema, expValidate } from './checkout-schema';

function validateCheckout(values) {
  const errors = {};
  const values = { ...billingAddress, ...deliveryAddress, ...creditCard };
  
  const validator = useForm({
    validations: {
      firstName: {
        pattern: {
          value: schema[names],
          message: schema[nErr],
        }
      },
      lastName: {
        pattern: {
          value: schema[names],
          message: schema[nErr]
        }
      },
      street: {
        pattern: {
          value: schema[cityStreet],
          message: schema[csErr]
        }
      },
      city: {
        pattern: {
          value: schema[cityStreet],
          message: schema[csErr]
        }
      },
      zip: {
        pattern: {
          value: schema[zip],
          message: schema[zErr]
        }
      },
      email: {
        pattern: {
          value: schema[email],
          message: schema[eErr]
        }
      },
      phone: {
        pattern: {
          value: schema[phone],
          message: schema[pErr]
        }
      },
      cardNumber: {
        pattern: {
          value: schema[card],
          message: schema[cErr]
        }
      },
      cvv: {
        pattern: {
          value: schema[cvv],
          message: schema[vErr]
        }
      },
      expiration: {
        pattern: {
          value: schema[expiry],
          message: schema[xErr]
        }
      },
      cardholder: {
        pattern: {
          value: schema[names],
          message: schema[nErr]
        }
      },
    },
  });
  if(expiration !== null) {
    return expValidate();
  }
  return errors
};

export default validateCheckout;