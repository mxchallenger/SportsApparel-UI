import React from 'react';
import FormItem from '../../form/FormItem';
import FormItemDropdown from '../../form/FormItemDropdown';
import styles from './BillingDelivery.module.css';

/**
 * @name BillingDetails
 * @description Allows entry of Billing Details
 * @return component
 */

const BillingDetails = ({
  errors, onChange, billingData, useShippingForBilling
}) => {
  const usStates = [
    'Choose State',
    'AL',
    'AK',
    'AS',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FM',
    'FL',
    'GA',
    'GU',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MH',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'MP',
    'OH',
    'OK',
    'OR',
    'PW',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VI',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY'
  ];
  return (
    <div className={styles.deliveryAddress}>
      {!useShippingForBilling && (
        <>
          <FormItem
            placeholder="e.g. 123 Sesame Street"
            type="text"
            id="billingStreet"
            label="Street"
            onChange={onChange}
            value={billingData.billingStreet}
            className={(errors.billingStreet ? styles.errorBorder : styles.input)}
          />
          {errors && (
            <p className={styles.errorMessage}>
              {FormItem.label}
              {errors.billingStreet}
            </p>
          )}

          <FormItem
            placeholder="e.g. Unit #1"
            type="text"
            id="billingStreet2"
            label="Street 2 (Optional)"
            onChange={onChange}
            value={billingData.billingStreet2}
            className={styles.input}
          />
          {errors && <p className={styles.errorMessage}>{errors.billingStreet2}</p>}

          <FormItem
            type="text"
            id="billingCity"
            label="City"
            onChange={onChange}
            value={billingData.billingCity}
            className={(errors.billingCity ? styles.errorBorder : styles.input)}
          />
          {errors && <p className={styles.errorMessage}>{errors.billingCity}</p>}

          <FormItemDropdown
            id="billingState"
            label="State"
            onChange={onChange}
            value={billingData.billingState}
            options={usStates}
            className={(errors.billingState ? styles.errorBorder : styles.input)}
          />
          {errors && <p className={styles.errorMessage}>{errors.billingState}</p>}

          <FormItem
            placeholder="e.g. 12345"
            type="text"
            id="billingZip"
            label="Zip"
            onChange={onChange}
            value={billingData.billingZip}
            className={(errors.billingZip ? styles.errorBorder : styles.input)}
          />
          {errors && <p className={styles.errorMessage}>{errors.billingZip}</p>}
        </>
      )}
      <FormItem
        placeholder="e.g. example@catalyte.io"
        type="email"
        id="email"
        label="Email"
        onChange={onChange}
        value={billingData.email}
        className={(errors.email ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.email}</p>}

      <FormItem
        placeholder="e.g. 555-555-5555"
        type="text"
        id="phone"
        label="Phone"
        onChange={onChange}
        value={billingData.phone}
        className={(errors.phone ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.phone}</p>}

      <FormItem
        placeholder="e.g. 1234567812345678"
        type="text"
        id="creditCard"
        label="Credit Card"
        onChange={onChange}
        value={billingData.creditCard}
        className={(errors.creditCard ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.creditCard}</p>}

      <FormItem
        placeholder="e.g. 555"
        type="text"
        id="cvv"
        label="CVV"
        onChange={onChange}
        value={billingData.cvv}
        className={(errors.cvv ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.cvv}</p>}

      <FormItem
        placeholder="e.g. 05/23"
        type="text"
        id="expiration"
        label="Expiration"
        onChange={onChange}
        value={billingData.expiration}
        className={(errors.expiration ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.expiration}</p>}

      <FormItem
        type="text"
        id="cardholder"
        label="Cardholder Name"
        onChange={onChange}
        value={billingData.cardholder}
        className={(errors.cardholder ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.cardholder}</p>}
    </div>
  );
};

export default BillingDetails;
