<<<<<<< HEAD
import React from "react";
import FormItem from "../../form/FormItem";
import FormItemDropdown from "../../form/FormItemDropdown";
import styles from "./DeliveryAddress.module.css";


=======
import React from 'react';
import FormItem from '../../form/FormItem';
import FormItemDropdown from '../../form/FormItemDropdown';
import styles from './DeliveryAddress.module.css';
>>>>>>> 455b6170b0b944fe105f9f7db7157bd61289bd5e
/**
 * @name BillingDetails
 * @description Allows entry of Billing Details
 * @return component
 */
class ValidateBilling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        billingStreet: "",
        billingStreet2: "",
        billingState: "",
        billingZip: "",
        email: "",
        phone: "",
        creditCard: "",
        cvv: "",
        expiration: "",
        cardholder: ""
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" }); //sets form to english
    //this creates the rules for each form input field based on react-form-input-validation library
    this.form.useRules({
      billingStreet: "required|alpha_num",
      billingStreet2: "alpha_num",
      billingState: "required",
      billingZip: "required|numeric|size:5",
      email: "required|email",
      phone: "required|numeric",
      creditCard: "required|digits_between:14,16",
      cvv: "required|digits_between:3,4",
      expiration: ["required|regex:^(0[1-9]|1[0-2])([\\/-]{1})[0-9]{2}$"],
      cardholder: "required|alpha"
    });
  }
}

const BillingDetails = ({ onChange, billingData, useShippingForBilling }) => {
  const usStates = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
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
            data-attribute-name="billing street"
          />

          <FormItem
            placeholder="e.g. Unit #1"
            type="text"
            id="billingStreet2"
            label="Street 2 (Optional)"
            onChange={onChange}
            value={billingData.billingStreet2}
            data-attribute-name="billing street"
          />

          <FormItem
            type="text"
            id="billingCity"
            label="City"
            onChange={onChange}
            value={billingData.billingCity}
            data-attribute-name="billing city"
          />

          <FormItemDropdown
            id="billingState"
            label="State"
            onChange={onChange}
            value={billingData.billingState}
            options={usStates}
          />

          <FormItem
            placeholder="e.g. 12345"
            type="text"
            id="billingZip"
            label="Zip"
            onChange={onChange}
            value={billingData.billingZip}
            data-attribute-name="billing zipcode"
          />
        </>
      )}
      <FormItem
        placeholder="e.g. example@catalyte.io"
        type="email"
        id="email"
        label="Email"
        onChange={onChange}
        value={billingData.email}
        data-attribute-name="billing email"
      />

      <FormItem
        placeholder="e.g. 555-555-5555"
        type="text"
        id="phone"
        label="Phone"
        onChange={onChange}
        value={billingData.phone}
        data-attribute-name="billing phone"
      />
      ?errors && <span className="errors">{errors}</span>

      <FormItem
        placeholder="e.g. 1234567812345678"
        type="text"
        id="creditCard"
        label="Credit Card"
        onChange={onChange}
        value={billingData.creditCard}
<<<<<<< HEAD
        errorMessage="must be between 14-16 digits"
        data-attribute-name="credit card number"
=======
        pattern="^[0-9]{14,19}$"
        errorMessage="Card number must be between 14-16 digits"
        required
>>>>>>> 455b6170b0b944fe105f9f7db7157bd61289bd5e
      />

      <FormItem
        placeholder="e.g. 555"
        type="text"
        id="cvv"
        label="CVV"
        onChange={onChange}
        value={billingData.cvv}
<<<<<<< HEAD
        errorMessage="CVV must have 3 or 4 digits"
        data-attribute-name="CVV"
=======
        pattern="^[0-9]{3,4}$"
        errorMessage="CVV must have 3 or 4 digits"
        required
>>>>>>> 455b6170b0b944fe105f9f7db7157bd61289bd5e
      />

      <FormItem
        placeholder="e.g. 05/21"
        type="text"
        id="expiration"
        label="Expiration"
        onChange={onChange}
        value={billingData.expiration}
<<<<<<< HEAD
        errorMessage="Expiration date should be MM/YY or MM-YY and after today's date"
        data-attribute-name="expiration date"
=======
        pattern="^(0[1-9]|1[0-2])([\/-]{1})[0-9]{2}$"
        errorMessage="Expiration date should be MM/YY or MM-YY and after today's date"
        required
>>>>>>> 455b6170b0b944fe105f9f7db7157bd61289bd5e
      />

      <FormItem
        type="text"
        id="cardholder"
        label="Cardholder Name"
        onChange={onChange}
        value={billingData.cardholder}
<<<<<<< HEAD
        errorMessage="Cardholder name should be letters only"
        data-attribute-name="cardholder name"
=======
        pattern="^[A-Za-z]+$"
        errorMessage="Cardholder name should be letters only"
        required
>>>>>>> 455b6170b0b944fe105f9f7db7157bd61289bd5e
      />
    </div>
  );
};

export default BillingDetails;
