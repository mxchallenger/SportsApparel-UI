import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import ProductDetail from './forms/ProductDetail';
import addProduct from './AddProductService'; import productValidate from './forms/ProductValidate';
import styles from './AddProductPage.module.css';

/**
 * @name AddProductPage
 * @description Allows entry of product
 * @return component
 */
const AddProductPage = () => {
  const history = useHistory();
  const [productData, setProductData] = useState({});
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const onProductChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };
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
  const updateProduct = async () => {
    const newProduct = {
      Active: productData.Active,
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
      Price: productData.Price,
      PrimaryColorCode: productData.PrimaryColorCode,
      Quantity: productData.Quantity,
      ReleaseDate: productData.ReleaseDate,
      SecondaryColorCode: productData.SecondaryColorCode,
      Sku: productData.Sku,
      StyleNumber: productData.StyleNumber,
      Type: productData.Type
    };
    productValidate(newProduct, setErrors, setValid);
    if (valid) {
      let colorKey = newProduct.SecondaryColorCode.replace(' ', '_');
      newProduct.SecondaryColorCode = colors[colorKey];
      colorKey = newProduct.PrimaryColorCode.replace(' ', '_');
      newProduct.PrimaryColorCode = colors[colorKey];
      newProduct.Price = parseFloat(newProduct.Price.replace('$', ''));
      newProduct.Active = newProduct.Active === 'True';
      newProduct.ReleaseDate = newProduct.ReleaseDate.replace(/-/g, '/');
      if (newProduct.Quantity === '0') {
        newProduct.Active = false;
      }
      addProduct(newProduct).then(() => history.push('/maintenance'));
    }
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
