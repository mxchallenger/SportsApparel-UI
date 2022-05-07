import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import ProductDetail from './forms/ProductDetail';
import addProduct from './AddProductService';
import validateProduct from './utils/ValidateProduct';
import styles from './AddProductPage.module.css';
import colors from './utils/ProductColors';
import activeStatus from './utils/ProductStatus';
import demographic from './utils/ProductDemographics';

/**
 * @name AddProductPage
 * @description Allows entry of product
 * @return component
 */
const AddProductPage = () => {
  const colorsArray = Object.keys(colors);
  const [productData, setProductData] = useState({
    Active: activeStatus[0],
    Brand: '',
    Category: '',
    Description: '',
    Demographic: demographic[0],
    GlobalProductCode: '',
    ImageSrc: '',
    Material: '',
    Name: '',
    Price: '',
    PrimaryColorCode: colorsArray[0],
    Quantity: '',
    ReleaseDate: '2022-02-22',
    Sku: '',
    SecondaryColorCode: colorsArray[0],
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
      PrimaryColorCode: colors[productData.PrimaryColorCode],
      Quantity: productData.Quantity,
      ReleaseDate: productData.ReleaseDate,
      SecondaryColorCode: colors[productData.SecondaryColorCode],
      Sku: productData.Sku,
      StyleNumber: productData.StyleNumber,
      Type: productData.Type
    };
    addProduct(newProduct).then(() => history.push('/maintenance'));
  };

  const updateProduct = () => {
    validateProduct(productData, setErrors, productObj);
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
