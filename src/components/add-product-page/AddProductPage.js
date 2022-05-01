import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import ProductDetail from './forms/ProductDetail';
import addProduct from './AddProductService';
import styles from './AddProductPage.module.css';

/**
 * @name AddProductPage
 * @description Allows entry of delivery address
 * @return component
 */
const AddProductPage = () => {
  const history = useHistory();
  const [productData, setProductData] = useState({});

  const onProductChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };

  const updateProduct = () => {
    const product = {
      dateCreated: '',
      dateModified: '',
      name: productData.name,
      sku: productData.sku,
      description: productData.description,
      demographic: productData.demographics,
      category: productData.category,
      type: productData.type,
      releaseDate: productData.releaseDate,
      primaryColorCode: productData.primaryColorCode,
      secondaryColorCode: productData.secondaryColorCode,
      styleNumber: productData.styleNumber,
      globalProductCode: productData.globalProductCode,
      active: productData.active,
      brand: productData.brand,
      imageSrc: productData.imageSrc,
      material: productData.material,
      price: productData.price,
      quantity: productData.quantity
    };
    product.active = product.active === 'True';
    addProduct(product).then(() => history.push('/maintenance'));
  };
  return (
    <div className={styles.productContainer}>
      <div className={`${styles.step} ${styles.product}`}>
        <h3 className={styles.title}>Create New Product</h3>
        <ProductDetail
          className={styles.product}
          onChange={onProductChange}
          productData={productData}
        />
      </div>
      <div className={styles.buttonArea}>
        <button type="submit" className={styles.submitBtn} onClick={updateProduct}>Submit</button>
      </div>
    </div>
  );
};

export default AddProductPage;
