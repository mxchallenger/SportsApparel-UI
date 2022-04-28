import React from 'react';
import styles from './AddProductPage.module.css';
import ProductDetail from './forms/ProductDetail';

/**
 * @name AddProductPage
 * @description Allows entry of delivery address
 * @return component
 */
const AddProductPage = () => {
  const [productData, setProductData] = React.useState({});

  const onProductChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <div className={styles.product}>
        <div className={styles.step}>
          <h3 className={styles.title}>Create New Product</h3>
          <ProductDetail onChange={onProductChange} productData={productData} />
        </div>
      </div>
      <div>
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
};

export default AddProductPage;
