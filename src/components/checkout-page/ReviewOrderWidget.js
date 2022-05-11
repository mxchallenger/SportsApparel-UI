import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import
{
  fetchRate,
  fetchRateObject,
  getShippingRate,
  getSubtotal
}
  from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';
import StateDropDown from './forms/StateDropDown';
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

  const [shippingState, setShippingState] = useState('');
  const [rate, setRateObject] = useState(0);
  const [apiError, setApiError] = useState(false);

  // const {
  //   state: { shippingRate }
  // } = rate();

  // const onDeliveryChange = (e) => {
  //   setShippingState(e.target.value);
  //   // fetchRate(setRateObject, [rate]);
  // };

  const onDeliveryChange = (e) => {
    setShippingState(e.target.value);
    setRateObject(rate);
  };

  useEffect(() => {
    fetchRate(setShippingState, setApiError);
  }, [shippingState]);
  useEffect(() => {
    fetchRateObject(setRateObject, setApiError);
  }, [rate]);
  useEffect(() => {
    fetchRate(shippingState, setApiError);
  }, [shippingState]);

  // const [rateObject, setRateObject] = useState({ rate: 1 });

  // useEffect(() => {
  //   fetchRate(setRateObject, shippingState, setApiError);
  // }, [setRateObject, rate, shippingState]);

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
          <p>{`${rate}`}</p>
          <p>{`${shippingState}`}</p>
        </div>
      </div>
      <StateDropDown
        onChange={onDeliveryChange}
        value={shippingState.state}
        shippingState={shippingState}
        rate={rate}
      />
    </>
  );
};

export default ReviewOrderWidget;
