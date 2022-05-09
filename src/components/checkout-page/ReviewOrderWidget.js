import React from 'react';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import { getShippingRate, getSubtotal } from './ReviewOrderWidgetService';
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
  const [deliveryData, setDeliveryData] = React.useState({});

  const onDeliveryChange = (e) => {
    setDeliveryData({ ...deliveryData, [e.target.id]: e.target.value });
  };

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
          <p>{getShippingRate(products)}</p>
        </div>
      </div>
      <StateDropDown onChange={onDeliveryChange} deliveryData={deliveryData} />
    </>
  );
};

export default ReviewOrderWidget;
