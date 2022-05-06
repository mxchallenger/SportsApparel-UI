import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import ProductDetail from './forms/ProductDetail';
import addProduct from './AddProductService';
import productValidate from './forms/ProductValidate';
import styles from './AddProductPage.module.css';

/**
 * @name AddProductPage
 * @description Allows entry of product
 * @return component
 */
const AddProductPage = () => {
  const [productData, setProductData] = useState({});
  const [errors, setErrors] = useState({});
  const onProductChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };
  const history = useHistory();

  const colors = {
    White: '#000000',
    Black: '#ffffff',
    Dark_Blue: '#3079ab',
    Light_Blue: '#39add1',
    Mauve: '#c25975',
    Red: '#e15258',
    Orange: '#f9845b',
    Lavender: '#838cc7',
    Purple: '#7d669e',
    Aqua: '#53bbb4',
    Green: '#51b46d',
    Mustard: '#e0ab18',
    Dark_Gray: '#637a91',
    Pink: '#f092b0'
  };

  const productObj = () => {
    const newProduct = {
      Active: productData.Quantity === '0' ? false : productData.Active === 'True',
      Brand: productData.Brand,
      Category: productData.Category,
      DateCreated: new Date().toJSON(),
      DateModified: new Date().toJSON(),
      Demographic: productData.Demographic,
      Description: productData.Description,
      GlobalProductCode: productData.GlobalProductCode,
      Id: 0,
      ImageSrc: productData.ImageSrc,
      Material: productData.Material,
      Name: productData.Name,
      Price: parseFloat(String(productData.Price).replace('$', '')),
      PrimaryColorCode: colors[String(productData.PrimaryColorCode).replace(' ', '_')],
      Quantity: productData.Quantity,
      ReleaseDate: String(productData.ReleaseDate).replace(/-/g, '/'),
      SecondaryColorCode: colors[String(productData.SecondaryColorCode).replace(' ', '_')],
      Sku: productData.Sku,
      StyleNumber: productData.StyleNumber,
      Type: productData.Type
    };
    addProduct(newProduct).then(() => history.push('/maintenance'));
  };

  const updateProduct = () => {
    productValidate(productData, setErrors, productObj);
  };
  return (
    <div className={styles.productContainer}>
      <div className={`${styles.step} ${styles.product}`}>
        <h3 className={styles.title}>Create New Product</h3>
        <ProductDetail
          onChange={onProductChange}
          productData={productData}
          errors={errors}
        />
      </div>
      <div className={styles.buttonArea}>
        <button type="submit" className={styles.submitBtn} onClick={updateProduct}>Submit</button>
      </div>
    </div>
  );
};

export default AddProductPage;
