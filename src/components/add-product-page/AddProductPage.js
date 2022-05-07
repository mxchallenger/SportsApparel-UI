import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import ProductDetail from './forms/ProductDetail';
import addProduct from './AddProductService';
import productValidate from './forms/ProductValidate';
import styles from './AddProductPage.module.css';
import colors from './utils/ProductColors';
import activeStatus from './utils/ProductStatus';

/**
 * @name AddProductPage
 * @description Allows entry of product
 * @return component
 */
const AddProductPage = () => {
  const [productData, setProductData] = useState({
    Active: activeStatus[0],
    Brand: '',
    Category: '',
    Description: '',
    GlobalProductCode: '',
    ImageSrc: '',
    Material: '',
    Name: '',
    Price: '',
    PrimaryColorCode: colors.White,
    Quantity: '',
    ReleaseDate: '02-22-2022',
    Sku: '',
    SecondaryColorCode: colors.White,
    StyleNumber: '',
    Type: ''
  });
  const [errors, setErrors] = useState({});
  const onProductChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };
  const history = useHistory();

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
      ReleaseDate: productData.ReleaseDate,
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
