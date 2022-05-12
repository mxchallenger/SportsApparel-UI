import React, { useState } from 'react';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import FormItemDropdown from '../form/FormItemDropdown';
import
{
  fetchRate,
  getShippingRate,
  getSubtotal
}
  from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';
import Constants from '../../utils/constants';

/**
 * @name ReviewOrderWidget
 * @description Displays order items and subtotal
 * @return component
 */
const ReviewOrderWidget = () => {
  const {
    state: { products }
  } = useCart();

  const [rate, setRate] = useState(0);
  const [apiError, setApiError] = useState(false);

  const usStates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const onDeliveryChange = (e) => {
    const shippingState = e.target.value;
    fetchRate(setRate, shippingState, setApiError);
    setRate(rate);
  };
  return (
    <>
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
      <div className="oops">
        {products.length === 0
          && <h1> Oops, your cart is empty!</h1>}
      </div>
      {products.map(({
        price, title, description, quantity
      }) => (
        <OrderItem
          key={title}
          price={price}
          title={title}
          description={description}
          quantity={quantity}
        />
      ))}
      <hr />
      <div className="total">
        <div className={styles.subtotal}>
          <div>
            <p>Subtotal</p>
          </div>
          <div className={styles.subtotal.price}>
            <p>{getSubtotal(products)}</p>
          </div>
        </div>
        <div className={styles.shipping.state}>
          <FormItemDropdown
            label="Delivery State"
            onChange={onDeliveryChange}
            value={usStates.state}
            options={usStates}
          />
        </div>
        <div className={styles.shipping}>
          <div>
            <p>Shipping</p>
          </div>
          <div className={styles.shipping.price}>
            <p>{getShippingRate(products, rate)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewOrderWidget;
