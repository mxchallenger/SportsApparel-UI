import React from 'react';
import FormItem from '../../form/FormItem';
import FormItemDropdown from '../../form/FormItemDropdown';
import styles from './DeliveryAddress.module.css';
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
      <FormItem
        // className={!hasErrors ? styles.input : styles.errorBorder}
        type="text"
        id="firstName"
        label="First Name"
        onChange={onChange}
        value={deliveryData.firstName}
        errors={errors}
      />
      {errors && <p className={styles.errorMessage}>{errors.firstName}</p>}

      <FormItem
        type="text"
        id="lastName"
        label="Last Name"
        onChange={onChange}
        value={deliveryData.lastName}
        errors={errors}
      />
      {errors && <p className={styles.errorMessage}>{errors.lastName}</p>}

      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="street"
        label="Street"
        onChange={onChange}
        value={deliveryData.street}
        errors={errors}
      />
      {errors && <p className={styles.errorMessage}>{errors.street}</p>}

      <FormItem
        placeholder="e.g. Unit #1"
        type="text"
        id="street2"
        label="Street 2 (Optional)"
        onChange={onChange}
        value={deliveryData.street2}
        errors={errors}
      />
      {errors && <p className={styles.errorMessage}>{errors.street2}</p>}

      <FormItem
        type="text"
        id="city"
        label="City"
        onChange={onChange}
        value={deliveryData.city}
        errors={errors}
      />
      {errors && <p className={styles.errorMessage}>{errors.city}</p>}

      <FormItemDropdown
        id="state"
        label="State"
        onChange={onChange}
        value={deliveryData.state}
        options={usStates}
        errors={errors}
      />
      {errors && <p className={styles.errorMessage}>{errors.state}</p>}

      <FormItem
        placeholder="e.g. 12345"
        type="text"
        id="zip"
        label="Zip"
        onChange={onChange}
        value={deliveryData.zip}
        errors={errors}
      />
      {errors && <p className={styles.errorMessage}>{errors.zip}</p>}
    </div>
  );
};
export default DeliveryAddress;
