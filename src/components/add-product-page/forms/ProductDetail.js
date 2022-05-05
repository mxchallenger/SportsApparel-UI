import React from 'react';
import FormItem from '../../form/FormItem';
import FormItemDropdown from '../../form/FormItemDropdown';
import styles from './ProductDetail.module.css';

/**
 * @name DeliveryAddress
 * @description Allows entry of delivery address
 * @return component
 */
const ProductDetail = ({ onChange, productData, errors }) => {
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

  const demographic = ['Men', 'Women', 'Kids'];
  const activeStatus = ['False', 'True'];

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.item1}>
        <FormItem
          placeholder="e.g. Soft Golf Shirt "
          type="text"
          id="Name"
          label="Product Name"
          onChange={onChange}
          value={(productData.Name || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Name}</p>}
      </div>

      <div className={styles.item5}>
        <FormItem
          placeholder="e.g. Golf"
          type="text"
          id="Category"
          label="Category"
          onChange={onChange}
          value={(productData.Category || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Category}</p>}
      </div>

      <div className={styles.item13}>
        <FormItem
          placeholder="e.g. https://m.media-amazon.com/images/I/81zNUlGpqJL._AC_UY550_.jpg"
          type="text"
          id="ImageSrc"
          label="Image Source"
          onChange={onChange}
          value={(productData.ImageSrc || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.ImageSrc}</p>}
      </div>

      <div className={styles.item2}>
        <FormItem
          placeholder="e.g. Golf, Men, Soft"
          type="text"
          id="Description"
          label="Product Description"
          onChange={onChange}
          value={(productData.Description || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Description}</p>}
      </div>

      <div className={styles.item4}>
        <FormItem
          placeholder="e.g. Shirt"
          type="text"
          id="Type"
          label="Type"
          onChange={onChange}
          value={(productData.Type || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Type}</p>}
      </div>

      <div className={styles.item15}>
        <FormItem
          placeholder="e.g. sc#####"
          type="text"
          id="StyleNumber"
          label="Style Number"
          onChange={onChange}
          value={(productData.StyleNumber || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.StyleNumber}</p>}
      </div>

      <div className={styles.item6}>
        <FormItem
          placeholder="e.g. $###.##"
          type="decimal"
          id="Price"
          label="Price"
          onChange={onChange}
          value={(productData.Price || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Price}</p>}
      </div>

      <div className={styles.item12}>
        <FormItem
          placeholder="e.g. Cotton"
          type="text"
          id="Material"
          label="Material"
          onChange={onChange}
          value={(productData.Material || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Material}</p>}
      </div>

      <div className={styles.item16}>
        <FormItem
          placeholder="e.g. ABC-EFG-HIGK"
          type="text"
          id="Sku"
          label="SKU"
          onChange={onChange}
          value={(productData.Sku || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Sku}</p>}
      </div>

      <div className={styles.item7}>
        <FormItem
          placeholder="e.g. 10"
          type="numeric"
          id="Quantity"
          label="Quantity"
          onChange={onChange}
          value={(productData.Quantity || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Quantity}</p>}
      </div>

      <div className={styles.item9}>
        <FormItemDropdown
          id="Demographic"
          label="Demographic"
          onChange={onChange}
          value={productData.Demographic}
          options={demographic}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Demographic}</p>}
      </div>

      <div className={styles.item17}>
        <FormItem
          placeholder="e.g. po-ABCDEFG"
          type="text"
          id="GlobalProductCode"
          label="Global Product Code"
          onChange={onChange}
          value={(productData.GlobalProductCode || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.GlobalProductCode}</p>}
      </div>

      <div className={styles.item8}>
        <FormItemDropdown
          id="Active"
          label="Active"
          onChange={onChange}
          value={productData.Active}
          options={activeStatus}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Active}</p>}
      </div>

      <div className={styles.item10}>
        <FormItemDropdown
          id="PrimaryColorCode"
          label="Primary Color"
          onChange={onChange}
          value={productData.PrimaryColorCode}
          options={colors}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.PrimaryColorCode}</p>}
      </div>

      <div className={styles.item14}>
        <FormItem
          type="date"
          id="ReleaseDate"
          label="Release Date"
          onChange={onChange}
          value={(productData.ReleaseDate || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Releasedate}</p>}
      </div>

      <div className={styles.item3}>
        <FormItem
          placeholder="e.g. Nike"
          type="text"
          id="Brand"
          label="Brand"
          onChange={onChange}
          value={(productData.Brand || '')}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.Brand}</p>}
      </div>

      <div className={styles.item11}>
        <FormItemDropdown
          id="SecondaryColorCode"
          label="Secondary Color"
          onChange={onChange}
          value={productData.SecondaryColorCode}
          options={colors}
          errors={errors}
        />
        {errors && <p className={styles.errorMessage}>{errors.SecondaryColorCode}</p>}
      </div>
    </div>
  );
};
export default ProductDetail;
