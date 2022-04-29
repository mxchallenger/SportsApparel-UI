import React from 'react';
import FormItem from '../../form/FormItem';
import FormItemDropdown from '../../form/FormItemDropdown';
import styles from './ProductDetail.module.css';

/**
 * @name DeliveryAddress
 * @description Allows entry of delivery address
 * @return component
 */
const ProductDetail = ({ onChange, productData }) => {
  const colors = [
    'White', // '#000000',
    'Black', // '#ffffff',
    'Dark Blue', // '#3079ab',
    'Light Blue', // '#39add1',
    'Mauve', // '#c25975',
    'Red', // '#e15258',
    'Orange', // '#f9845b',
    'Lavender', // '#838cc7',
    'Purple', // '#7d669e',
    'Aqua', // '#53bbb4',
    'Green', // '#51b46d',
    'Mustard', // '#e0ab18',
    'Dark Gray', // '#637a91',
    'Light Gray', // '#b7c0c7'
    'Pink' // '#f092b0',

  ];

  const demographics = ['Men', 'Women', 'Kids'];
  const activeStatus = ['False', 'True'];

  return (
    <div className={styles.productDetailContainer}>
      <FormItem
        placeholder="e.g. Soft Golf Shirt "
        type="text"
        id="name"
        label="Product Name"
        onChange={onChange}
        value={productData.name}
      />
      <FormItem
        type="text"
        id="category"
        label="Category"
        onChange={onChange}
        value={productData.category}
      />
      <FormItem
        type="text"
        id="imageSrc"
        label="Image Source"
        onChange={onChange}
        value={productData.imageSrc}
      />
      <FormItem
        placeholder="e.g. Golf, Men, Soft"
        type="text"
        id="description"
        label="Product Description"
        onChange={onChange}
        value={productData.description}
      />
      <FormItem
        type="text"
        id="type"
        label="Type"
        onChange={onChange}
        value={productData.type}
      />
      <FormItem
        placeholder="e.g. sc#####"
        type="text"
        id="styleNumber"
        label="Style Number"
        onChange={onChange}
        value={productData.styleNumber}
      />
      <FormItem
        placeholder="e.g. $###.##"
        className={styles.price}
        type="decimal"
        id="price"
        label="Price"
        onChange={onChange}
        value={productData.price}
      />
      <FormItem
        type="text"
        id="material"
        label="Material"
        onChange={onChange}
        value={productData.material}
      />
      <FormItem
        placeholder="e.g. ABC-EFG-HIGK"
        type="text"
        id="sku"
        label="SKU"
        onChange={onChange}
        value={productData.sku}
      />
      <FormItem
        placeholder="e.g. ##"
        type="numeric"
        id="quantity"
        label="Quantity"
        onChange={onChange}
        value={productData.quantity}
      />
      <FormItemDropdown
        id="demographics"
        label="Demographics"
        onChange={onChange}
        value={productData.demographics}
        options={demographics}
      />
      <FormItem
        placeholder="e.g. po-ABCDEFG"
        type="text"
        id="globalProductCode"
        label="Global Product Code"
        onChange={onChange}
        value={productData.globalProductCode}
      />
      <FormItemDropdown
        id="active"
        label="Active"
        onChange={onChange}
        value={productData.active}
        options={activeStatus}
      />

      <FormItemDropdown
        id="primaryColorCode"
        label="Primary Color"
        onChange={onChange}
        value={productData.primaryColorCode}
        options={colors}
      />
      <FormItem
        placeholder="e.g. mm/dd/yyyy"
        type="text"
        id="releaseDate"
        label="Release Date"
        onChange={onChange}
        value={productData.releaseDate}
      />

      <FormItem
        type="text"
        id="brand"
        label="Brand"
        onChange={onChange}
        value={productData.brand}
      />

      <FormItemDropdown
        id="secondaryColorCode"
        label="Secondary Color"
        onChange={onChange}
        value={productData.secondaryColorCode}
        options={colors}
      />

    </div>
  );
};
export default ProductDetail;
