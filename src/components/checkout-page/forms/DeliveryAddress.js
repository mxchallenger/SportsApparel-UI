import React from 'react';
import FormItem from '../../form/FormItem';
import FormItemDropdown from '../../form/FormItemDropdown';
import styles from './BillingDelivery.module.css';
/**
 * @name DeliveryAddress
 * @description Allows entry of delivery address
 * @return component
 */

const DeliveryAddress = ({
  deliveryData, onChange, errors
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
      <FormItem
        type="text"
        id="firstName"
        label="First Name"
        onChange={onChange}
        value={deliveryData.firstName}
        className={(errors.firstName ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.firstName}</p>}

      <FormItem
        type="text"
        id="lastName"
        label="Last Name"
        onChange={onChange}
        value={deliveryData.lastName}
        className={(errors.lastName ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.lastName}</p>}

      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="street"
        label="Street"
        onChange={onChange}
        value={deliveryData.street}
        className={(errors.street ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.street}</p>}

      <FormItem
        placeholder="e.g. Unit #1"
        type="text"
        id="street2"
        label="Street 2 (Optional)"
        onChange={onChange}
        value={deliveryData.street2}
        className={(errors.street2 ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.street2}</p>}

      <FormItem
        type="text"
        id="city"
        label="City"
        onChange={onChange}
        value={deliveryData.city}
        className={(errors.city ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.city}</p>}

      <FormItemDropdown
        id="state"
        label="State"
        onChange={onChange}
        value={deliveryData.state}
        options={usStates}
        className={(errors.state ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.state}</p>}

      <FormItem
        placeholder="e.g. 12345"
        type="text"
        id="zip"
        label="Zip"
        onChange={onChange}
        value={deliveryData.zip}
        className={(errors.zip ? styles.errorBorder : styles.input)}
      />
      {errors && <p className={styles.errorMessage}>{errors.zip}</p>}
    </div>
  );
};
export default DeliveryAddress;
