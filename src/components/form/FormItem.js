import React from 'react';
import styles from './FormItem.module.css';

/**
 * @name FormItem
 * @description Input field
 * @return component
 */
const FormItem = ({
  onChange, value, id, label, placeholder, type, errors
}) => (

  <div>
    <label className={styles.label} htmlFor={id}>
      {label}
      <div>
        <input
          className={styles.input}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {errors && <p className={styles.errorMsg}>{errors}</p>}
      </div>
    </label>
  </div>
);

export default FormItem;
