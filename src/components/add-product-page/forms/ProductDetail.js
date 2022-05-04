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
      <div className={styles.item1}>
        <FormItem
          placeholder="e.g. Soft Golf Shirt "
          type="text"
          id="name"
          label="Product Name"
          onChange={onChange}
          value={(productData.name) || ''}
        />

      </div>
      <div className={styles.item5}>
        <FormItem
          defaultValue=""
          type="text"
          id="category"
          label="Category"
          onChange={onChange}
          value={(productData.category) || ''}
        />
      </div>
      <div className={styles.item13}>
        <FormItem
          placeholder="e.g. https://m.media-amazon.com/images/I/81zNUlGpqJL._AC_UY550_.jpg"
          defaultValue=""
          type="text"
          id="imageSrc"
          label="Image Source"
          onChange={onChange}
          value={(productData.imageSrc) || ''}
        />
      </div>
      <div className={styles.item2}>
        <FormItem
          placeholder="e.g. Golf, Men, Soft"
          defaultValue=""
          type="text"
          id="description"
          label="Product Description"
          onChange={onChange}
          value={(productData.description) || ''}
        />
      </div>
      <div className={styles.item4}>
        <FormItem
          type="text"
          defaultValue=""
          id="type"
          label="Type"
          onChange={onChange}
          value={(productData.type) || ''}
        />
      </div>
      <div className={styles.item15}>
        <FormItem
          placeholder="e.g. sc#####"
          defaultValue=""
          type="text"
          id="styleNumber"
          label="Style Number"
          onChange={onChange}
          value={(productData.styleNumber) || ''}
        />
      </div>
      <div className={styles.item6}>
        <FormItem
          placeholder="e.g. $###.##"
          defaultValue=""
          className={styles.price}
          type="decimal"
          id="price"
          label="Price"
          onChange={onChange}
          value={(productData.price) || ''}
        />
      </div>
      <div className={styles.item12}>
        <FormItem
          type="text"
          defaultValue=""
          id="material"
          label="Material"
          onChange={onChange}
          value={(productData.material) || ''}
        />
      </div>
      <div className={styles.item16}>
        <FormItem
          placeholder="e.g. ABC-EFG-HIGK"
          defaultValue=""
          type="text"
          id="sku"
          label="SKU"
          onChange={onChange}
          value={(productData.sku) || ''}
        />
      </div>
      <div className={styles.item7}>
        <FormItem
          placeholder="e.g. 10"
          type="numeric"
          id="quantity"
          label="Quantity"
          onChange={onChange}
          value={(productData.quantity) || ''}
        />
      </div>
      <div className={styles.item9}>
        <FormItemDropdown
          id="demographics"
          label="Demographics"
          onChange={onChange}
          value={productData.demographics}
          options={demographics}
        />
      </div>
      <div className={styles.item17}>
        <FormItem
          placeholder="e.g. po-ABCDEFG"
          type="text"
          id="globalProductCode"
          label="Global Product Code"
          onChange={onChange}
          value={(productData.globalProductCode) || ''}
        />
      </div>
      <div className={styles.item8}>
        <FormItemDropdown
          id="active"
          label="Active"
          onChange={onChange}
          value={productData.active}
          options={activeStatus}
        />
      </div>
      <div className={styles.item10}>
        <FormItemDropdown
          id="primaryColorCode"
          label="Primary Color"
          onChange={onChange}
          value={productData.primaryColorCode}
          options={colors}
        />
      </div>
      <div className={styles.item14}>
        <FormItem
          type="date"
          id="releaseDate"
          label="Release Date"
          onChange={onChange}
          value={(productData.releaseDate) || ''}
        />
      </div>
      <div className={styles.item3}>
        <FormItem
          type="text"
          id="brand"
          label="Brand"
          onChange={onChange}
          value={(productData.brand) || ''}
        />
      </div>
      <div className={styles.item11}>
        <FormItemDropdown
          id="secondaryColorCode"
          label="Secondary Color"
          onChange={onChange}
          value={productData.secondaryColorCode}
          options={colors}
        />
      </div>
    </div>
  );
};
export default ProductDetail;
