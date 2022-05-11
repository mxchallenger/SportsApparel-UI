import React, { useState } from 'react';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import FormItemDropdown from '../form/FormItemDropdown';
import
{
  fetchRateObject,
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

  const [rate, setRateObject] = useState(0);
  const [apiError, setApiError] = useState(false);

  const usStates = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  // const onDeliveryChange = (e) => {
  //   setShippingState(e.target.value);
  //   fetchRate(setShippingState, shippingState, setRateObject, setApiError);
  //   fetchRate(rate);
  // };

  // const onDeliveryChange = (e) => {
  //   setShippingState(e.target.value);
  //   fetchRate(setShippingState, shippingState, setApiError);
  //   fetchRateObject(setRateObject, setApiError);
  //   fetchRateObject(rate);
  // };

  const onDeliveryChange = (e) => {
    const shippingState = e.target.value;
    fetchRateObject(setRateObject, shippingState, setApiError);
    setRateObject(rate);
  };

  // useEffect(() => {
  //   fetchRate(setRateObject, setApiError);
  // }, [rate]);
  // useEffect(() => {
  //   fetchRate(shippingState, setApiError);
  // }, [shippingState]);

  // useEffect(() => {
  //   fetchRateObject(setRateObject, setApiError);
  // }, [rate]);
  // useEffect(() => {
  //   fetchProducts(setProducts, setApiError);
  // }, []);
  // useEffect(() => {
  //   fetchProductsCount(setApiError, urlQuery);
  // }, [urlQuery]);

  // const onDeliveryChange = () => {
  //   setShippingState(e.target.value);
  //   useEffect(() => {
  //     fetchRateObject(setRateObject, setApiError);
  //   }, [rate]);
  // };

  // useEffect(() => {
  //   setShippingStateHelper(setShippingState, setApiError);
  // }, [shippingState]);
  // useEffect(() => {
  //   fetchRateObject(setRateObject, setApiError);
  // }, [rate]);
  // useEffect(() => {
  //   setShippingStateHelper(shippingState, setApiError);
  // }, [shippingState]);

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
        </div>
      </div>
      <div>
        <FormItemDropdown
          label="State"
          onChange={onDeliveryChange}
          value={usStates.state}
          options={usStates}
        />
      </div>
    </>
  );
};

export default ReviewOrderWidget;
