import React from 'react';
import { useCart } from './CartContext';
import OrderItem from './OrderItem';
import
{
  getSubtotal
}
  from './ReviewOrderWidgetService';
import styles from './ReviewOrderWidget.module.css';

/**
 * @name ReviewOrderWidget
 * @description Displays order items and subtotal
 * @return component
 */
const ReviewOrderWidget = ({ rate }) => {
  const {
    state: { products }
  } = useCart();
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
      <div className="total">
        <div className={styles.subtotal}>
          <div>
            <p className="titles">Subtotal</p>
          </div>
          <div className={styles.price}>
            <p className="subtotal">{`$${getSubtotal(products)}`}</p>
          </div>
        </div>
        <div className={styles.shipping}>
          <div>
            <p className="titles">Shipping</p>
          </div>
          <div className={styles.price}>
            <p>
              {getSubtotal(products, rate) > 50.00 ? `$${(0.00 + rate)
                .toFixed(2)}` : `$${(5.00 + rate).toFixed(2)}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewOrderWidget;
