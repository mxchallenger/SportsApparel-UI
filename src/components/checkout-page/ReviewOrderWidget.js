import React, { useState, useEffect } from 'react';
import Constants from '../../utils/constants';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import { fetchRate, getShippingRate, getSubtotal } from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';
import StateDropDown from './forms/StateDropDown';

/**
 * @name ReviewOrderWidget
 * @description Displays order items and subtotal
 * @return component
 */
const ReviewOrderWidget = () => {
  const {
    state: { products }
  } = useCart();

  const [rate, setRate] = React.useState(0);
  const [apiError, setApiError] = useState(false);

  const [shippingState, setShippingState] = useState('');

  const onDeliveryChange = (e) => {
    fetchRate(setRate, shippingState, setApiError);
    setShippingState(e.target.value);
  };

  useEffect(() => {
    fetchRate(setApiError, setRate);
  }, []);
  useEffect(() => {
    fetchRate(setApiError, shippingState);
  }, [shippingState]);

  return (
    <>
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
      <div className={styles.subtotal}>
        <div>
          <p>Subtotal</p>
        </div>
        <div className={styles.price}>
          <p>{getSubtotal(products)}</p>
        </div>
      </div>
      <div className={styles.shipping}>
        <div>
          <p>Shipping</p>
        </div>
        <div className={styles.price}>
          <p>{getShippingRate(products, rate)}</p>
        </div>
      </div>
      <StateDropDown
        onChange={onDeliveryChange}
        value={shippingState.state}
        shippingState={shippingState}
      />
      {apiError && <p className={styles.errMsg} data-testid="errMsg">{Constants.API_ERROR}</p>}
    </>
  );
};

export default ReviewOrderWidget;
