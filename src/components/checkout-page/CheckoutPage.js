import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from './CartContext';
import
{
  fetchRate
}
  from './ReviewOrderWidgetService';
import styles from './CheckoutPage.module.css';
import ReviewOrderWidget from './ReviewOrderWidget';
import DeliveryAddress from './forms/DeliveryAddress';
import BillingDetails from './forms/BillingDetails';
import makePurchase from './CheckoutService';
import validateCheckout from './forms/validateCheckout';

/**
 * @name CheckoutPage
 * @description A view that contains details needed to process a transaction for items
 * @returns Component
 * @function makePurchase
 * @description the function that sends the purchaseObj to the api when validated.
 * @function handlePay
 * @description the function triggered by the form submit button that starts the frontend validation
 * @returns the validation status of the form and either submits (calls purchaseObj) or sets errors.
 *  */
const CheckoutPage = () => {
  const history = useHistory();

  const {
    state: { products }
  } = useCart();

  const [rate, setRate] = useState(0);

  const [errors, setErrors] = React.useState({});
  const [billingData, setBillingData] = React.useState({
    billingStreet: '',
    billingStreet2: '',
    billingCity: '',
    billingZip: '',
    email: '',
    phone: '',
    creditCard: '',
    cardholder: '',
    cvv: '',
    expiration: ''
  });

  const onBillingChange = (e) => {
    setBillingData({ ...billingData, [e.target.id]: e.target.value });
  };

  const [deliveryData, setDeliveryData] = React.useState({
    firstName: '',
    lastName: '',
    street: '',
    street2: '',
    city: '',
    zip: ''
  });

  const onDeliveryChange = (e) => {
    if (e.target.id === 'state') {
      const shippingState = e.target.value;
      fetchRate(setRate, shippingState);
      setRate(rate);
    }
    setDeliveryData({ ...deliveryData, [e.target.id]: e.target.value });
  };
  const [checked, setChecked] = React.useState(false);
  const handleCheck = () => {
    setChecked(!checked);
  };
  /**
   * @function purchaseObj
   * @description sends the validated purchase information that is
   * collected from the form through makePurchase
   * @returns purchase confirmation and a toast
   */
  const purchaseObj = () => {
    const productData = products.map(({ productId, quantity }) => ({ productId, quantity }));
    const deliveryAddress = {
      DeliveryFirstName: deliveryData.firstName,
      DeliveryLastName: deliveryData.lastName,
      DeliveryStreet: deliveryData.street,
      DeliveryStreet2: deliveryData.street2,
      DeliveryCity: deliveryData.city,
      DeliveryState: deliveryData.state,
      DeliveryZip: deliveryData.zip
    };
    const billingAddress = {};
    if (checked) {
      billingAddress.BillingStreet = deliveryAddress.street;
      billingAddress.BillingStreet2 = deliveryAddress.street2;
      billingAddress.BillingCity = deliveryAddress.city;
      billingAddress.BillingState = deliveryAddress.state;
      billingAddress.BillingZip = deliveryAddress.zip;
    } else {
      billingAddress.BillingStreet = billingData.billingStreet;
      billingAddress.BillingStreet2 = billingData.billingStreet2;
      billingAddress.BillingCity = billingData.billingCity;
      billingAddress.BillingState = billingData.billingState;
      billingAddress.BillingZip = billingData.billingZip;
    }
    billingAddress.email = billingData.email;
    billingAddress.phone = billingData.phone;

    const creditCard = {
      cardNumber: billingData.creditCard,
      cvv: billingData.cvv,
      expiration: billingData.expiration,
      cardholder: billingData.cardholder
    };
    makePurchase(productData, deliveryAddress, billingAddress, creditCard).then(() => history.push('/confirmation'));
    toast.success('Purchase Successful');
  };
  /**
   * @name handlePay
   * @description a function triggered by the purchase click event.
   * @returns validated or invalidated checkout attempt. Valid calls purchaseObj.
   */
  const handlePay = () => {
    validateCheckout(deliveryData, billingData, setErrors, checked, purchaseObj);
  };
  return (
    <div className={styles.checkoutContainer}>
      <div className={`${styles.step} ${styles.order}`}>
        <h3 className={styles.title}>1. Review Order</h3>
        <ReviewOrderWidget
          rate={rate}
        />
      </div>
      <div className={`${styles.step} ${styles.delivery}`}>
        <h3 className={styles.title}>2. Delivery Address</h3>
        <DeliveryAddress
          onChange={onDeliveryChange}
          deliveryData={deliveryData}
          errors={errors}
        />
        <label htmlFor="useSame" className={styles.sameAddressText}>
          <div className={styles.useSameAddress}>
            <input
              id="useSame"
              onChange={handleCheck}
              type="checkbox"
              value={checked}
            />
          </div>
          Same Billing Address
        </label>
      </div>
      <div className={`${styles.step} ${styles.payment}`}>
        <h3 className={styles.title}>3. Billing Details</h3>
        <BillingDetails
          onChange={onBillingChange}
          billingData={billingData}
          useShippingForBilling={checked}
          errors={errors}
        />
      </div>
      <div className={styles.payNow}>
        <button onClick={handlePay} type="button" className={styles.payButton}>
          Checkout
        </button>
      </div>
    </div>
  );
};
export default CheckoutPage;
