import React, { useState, useEffect } from 'react';
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

  const [shippingState, setShippingState] = useState('');
  const [rate, setRateObject] = useState(0);

  const onDeliveryChange = (e) => {
    setShippingState(e.target.value);
    fetchRate(setRateObject, [rate]);
  };

  useEffect(() => {
    fetchRate(setRateObject);
  }, [rate]);
  useEffect(() => {
    fetchRate(shippingState);
  }, [shippingState]);

  // const [rateObject, setRateObject] = useState({ rate: 1 });

  // const onDeliveryChange = (e) => {
  //   setShippingState(e.target.value);
  // };

  // useEffect(() => {
  //   fetchRate(setRateObject, shippingState);
  // }, [setRateObject, rateObject, shippingState]);

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
          <p>{rate}</p>
        </div>
      </div>
      <StateDropDown
        onChange={onDeliveryChange}
        value={shippingState.state}
        shippingState={shippingState}
      />
    </>
  );
};

export default ReviewOrderWidget;
