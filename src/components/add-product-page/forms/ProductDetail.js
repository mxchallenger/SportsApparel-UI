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
    'white', // '#000000',
    'black', // '#ffffff',
    'lightBlue', // '#39add1',
    'darkBlue', // '#3079ab',
    'mauve', // '#c25975',
    'red', // '#e15258',
    'orange', // '#f9845b',
    'lavender', // '#838cc7',
    'purple', // '#7d669e',
    'aqua', // '#53bbb4',
    'green', // '#51b46d',
    'mustard', // '#e0ab18',
    'darkGray', // '#637a91',
    'pink', // '#f092b0',
    'lightGray' // '#b7c0c7'
  ];
  const types = [
    'Pant',
    'Short',
    'Shoe',
    'Glove',
    'Jacket',
    'Tank Top',
    'Sock',
    'Sunglasses',
    'Hat',
    'Helmet',
    'Belt',
    'Visor',
    'Shin Guard',
    'Elbow Pad',
    'Headband',
    'Wristband',
    'Hoodie',
    'Flip Flop',
    'Pool Noodle'
  ];
  const demographics = ['Men', 'Women', 'Kids'];
  const categories = ['Golf', 'Soccer', 'Basketball', 'Hockey', 'Football', 'Running', 'Baseball', 'Skateboarding', 'Boxing', 'Weightlifting'
  ];
  const activeStatus = ['False', 'True'];
  return (
    <div className={styles.productDetail}>
      <FormItem
        placeholder="e.g. (Adjective Category Type) Soft Golf Pant "
        type="text"
        id="name"
        label="Product Name"
        onChange={onChange}
        value={productData.name}
      />
      <FormItemDropdown
        id="category"
        label="Category"
        onChange={onChange}
        value={productData.category}
        options={categories}
      />
      <FormItem
        type="text"
        id="imageSrc"
        label="Image Source"
        onChange={onChange}
        value={productData.imageSrc}
      />
      <FormItem
        placeholder="e.g. (Category, Demographic, Adjective) Golf, Men, Soft"
        type="text"
        id="description"
        label="Product Description"
        onChange={onChange}
        value={productData.description}
      />
      <FormItemDropdown
        id="type"
        label="Type"
        onChange={onChange}
        value={productData.type}
        options={types}
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
        type="text"
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
        value={productData.secondaryColorCOde}
        options={colors}
      />

    </div>
  );
};
export default ProductDetail;
