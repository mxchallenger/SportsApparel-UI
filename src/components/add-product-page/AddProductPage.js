import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ProductDetail from './forms/ProductDetail';
import useForm from './forms/ProductValidate';
import addProduct from './AddProductService';
import styles from './AddProductPage.module.css';

/**
 * @name AddProductPage
 * @description Allows entry of delivery address
 * @return component
 */
const AddProductPage = () => {
  const history = useHistory();
  const [productData, setProductData] = useState({
    name: '',
    active: '',
    brand: '',
    category: '',
    demographics: '',
    description: '',
    globalProductCode: '',
    imageSrc: '',
    material: '',
    price: '',
    primaryColorCode: '',
    quantity: '',
    releaseDate: '',
    secondaryColorCode: '',
    sku: '',
    styleNumber: '',
    type: ''
  });
  const { handleSubmit, errors } = useForm(productData);

  const onProductChange = (e) => {
    setProductData({ ...productData, [e.target.id]: e.target.value });
  };

  const updateProduct = async () => {
    const newProduct = {
      Active: productData.active,
      Brand: productData.brand,
      Category: productData.category,
      DateCreated: new Date().toJSON(),
      DateModified: new Date().toJSON(),
      Demographic: productData.demographics,
      Description: productData.description,
      GlobalProductCode: productData.globalProductCode,
      Id: 0,
      ImageSrc: productData.imageSrc,
      Material: productData.material,
      Name: productData.name,
      Price: productData.price,
      PrimaryColorCode: productData.primaryColorCode,
      Quantity: productData.quantity,
      ReleaseDate: productData.releaseDate,
      SecondaryColorCode: productData.secondaryColorCode,
      Sku: productData.sku,
      StyleNumber: productData.styleNumber,
      Type: productData.type
    };

    newProduct.Price = parseFloat(newProduct.Price.replace('$', ''));
    newProduct.Active = newProduct.Active === 'True';
    addProduct(newProduct).then(() => history.push('/maintenance'));
  };

  const runTheDamnThing = () => {
    handleSubmit();
    if (!errors) {
      updateProduct();
    } else {
      toast.error('Validate failed');
    }
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
        <button type="submit" className={styles.submitBtn} onClick={runTheDamnThing}>Submit</button>
      </div>
    </div>
  );
};

export default AddProductPage;
