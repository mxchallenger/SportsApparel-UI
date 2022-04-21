import React from "react";
import FormItem from "../../form/FormItem";
import FormItemDropdown from "../../form/FormItemDropdown";
import styles from "./DeliveryAddress.module.css";

/**
 * @name DeliveryAddress
 * @description Allows entry of delivery address
 * @return component
 */

class ValidateDelivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: "",
        lastName: "",
        street: "",
        street2: "",
        city: "",
        state: "",
        zip: ""
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" }); //sets form to english
    //this creates the rules for each form input field based on react-form-input-validation library
    this.form.useRules({
      firstName: "required|alpha",
      lastName: "required|alpha",
      street: "required|alpha_num",
      street2: "alpha_num",
      city: "required|alpha",
      state: "required",
      zip: "required|numeric|size:5"
    });
  }
}

const DeliveryAddress = ({ onChange, deliveryData }) => {
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
      <FormItem
        type="text"
        id="firstName"
        label="First Name"
        onChange={onChange}
        value={deliveryData.firstName}
        data-attribute-name="delivery addressee"
      />

      <FormItem
        type="text"
        id="lastName"
        label="Last Name"
        onChange={onChange}
        value={deliveryData.lastName}
        data-attribute-name="delivery addressee"
      />

      <FormItem
        placeholder="e.g. 123 Sesame Street"
        type="text"
        id="street"
        label="Street"
        onChange={onChange}
        value={deliveryData.street}
        data-attribute-name="delivery address"
      />

      <FormItem
        placeholder="e.g. Unit #1"
        type="text"
        id="street2"
        label="Street 2 (Optional)"
        onChange={onChange}
        value={deliveryData.street2}
        data-attribute-name="delivery address"
      />

      <FormItem
        type="text"
        id="city"
        label="City"
        onChange={onChange}
        value={deliveryData.city}
        data-attribute-name="delivery city"
      />

      <FormItemDropdown
        id="state"
        label="State"
        onChange={onChange}
        value={deliveryData.state}
        options={usStates}
        data-attribute-name="delivery state"
      />
      <FormItem
        placeholder="e.g. 12345"
        type="text"
        id="zip"
        label="Zip"
        onChange={onChange}
        value={deliveryData.zip}
        data-attribute-name="delivery zipcode"
      />
    </div>
  );
};
export default DeliveryAddress;
