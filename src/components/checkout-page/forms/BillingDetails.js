import React from 'react';
import FormItem from '../../form/FormItem';
import FormItemDropdown from '../../form/FormItemDropdown';
import styles from './DeliveryAddress.module.css';

/**
 * @name BillingDetails
 * @description Allows entry of Billing Details
 * @return component
 */

const BillingDetails = (
  {
    errors, onChange, billingData, useShippingForBilling, handlePay
  }
) => {
  const usStates = [
    '',
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  return (
    <div className={styles.deliveryAddress}>
      {!useShippingForBilling && (
        <div className={styles.errorMessage}>
          <div className={errors.billingStreet === undefined ? undefined : styles.redDanger}>
            <FormItem
              placeholder="e.g. 123 Sesame Street"
              type="text"
              id="billingStreet"
              label="Street"
              onChange={onChange}
              value={(billingData.billingStreet) || ''}
            />
          </div>
          <div className={errors.billingStreet2 === undefined ? undefined : styles.redDanger}>
            {errors && <p className={styles.errorMessage}>{errors.billingStreet}</p>}
            <FormItem
              placeholder="e.g. Unit #1"
              type="text"
              id="billingStreet2"
              label="Street 2 (Optional)"
              onChange={onChange}
              value={billingData.billingStreet2}
              errors={errors}
            />
          </div>
          <div className={errors.billingCity === undefined ? undefined : styles.redDanger}>
            {errors && <p className={styles.errorMessage}>{errors.billingStreet2}</p>}
            <FormItem
              type="text"
              id="billingCity"
              label="City"
              onChange={onChange}
              value={billingData.billingCity || ''}
            />
          </div>
          {errors && <p className={styles.errorMessage}>{errors.billingCity}</p>}
          <div className={styles.errorMessage}>
            <div className={errors.billingState === undefined ? undefined : (styles.redDanger)}>
              <FormItemDropdown
                id="billingState"
                label="State"
                onChange={handlePay}
                value={billingData.billingState}
                options={usStates}
              />
            </div>
            {errors && <p className={styles.errorMessage}>{errors.billingState}</p>}
          </div>
          <div className={errors.billingZip === undefined ? undefined : styles.redDanger}>
            <FormItem
              placeholder="e.g. 12345"
              type="text"
              id="billingZip"
              label="Zip"
              onChange={onChange}
              value={billingData.billingZip}
            />
          </div>
          {errors && <p className={styles.errorMessage}>{errors.billingZip}</p>}
        </div>
      )}
      <div>
        <div className={errors.email === undefined ? undefined : styles.redDanger} />
        <FormItem
          placeholder="e.g. example@catalyte.io"
          type="email"
          id="email"
          label="Email"
          onChange={onChange}
          value={billingData.email || ''}
        />
      </div>
      {errors && <p className={styles.errorMessage}>{errors.email}</p>}
      <div className={errors.phone === undefined ? undefined : styles.redDanger} />
      <FormItem
        placeholder="e.g. 555-555-5555"
        type="text"
        id="phone"
        label="Phone"
        onChange={onChange}
        value={billingData.phone || ''}
      />
      {errors && <p className={styles.errorMessage}>{errors.phone}</p>}

      <div className={errors.creditCard === undefined ? undefined : styles.redDanger}>
        <FormItem
          placeholder="e.g. 1234567812345678"
          type="text"
          id="creditCard"
          label="Credit Card"
          onChange={onChange}
          value={billingData.creditCard || ''}
        />
      </div>
      {errors && <p className={styles.errorMessage}>{errors.creditCard}</p>}
      <div className={errors.cvv === undefined ? undefined : styles.redDanger}>
        <FormItem
          placeholder="e.g. 555"
          type="text"
          id="cvv"
          label="CVV"
          onChange={onChange}
          value={billingData.cvv || ''}
        />
      </div>
      {errors && <p className={styles.errorMessage}>{errors.cvv}</p>}
      <div className={errors.expiration === undefined ? undefined : styles.redDanger}>
        <FormItem
          placeholder="e.g. 05/21"
          type="text"
          id="expiration"
          label="Expiration"
          onChange={onChange}
          value={billingData.expiration || ''}
        />
      </div>
      {errors && <p className={styles.errorMessage}>{errors.expiration}</p>}
      <div className={errors.cardholder === undefined ? undefined : styles.redDanger}>
        <FormItem
          type="text"
          id="cardholder"
          label="Cardholder Name"
          onChange={onChange}
          value={billingData.cardholder || ''}
        />
      </div>
      {errors && <p className={styles.errorMessage}>{errors.cardholder}</p>}
    </div>

  );
};

export default BillingDetails;
