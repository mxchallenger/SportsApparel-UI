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
        {typeof errors?.id === 'undefined'
          ? (
            <input
              className={styles.input}
              id={id}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              value={value}
            />
          ) : (
            <input
              className={styles.errorBorder}
              id={id}
              onChange={onChange}
              placeholder={placeholder}
              type={type}
              value={value}
            />
          )}
      </div>
    </label>
  </div>
);

export default FormItem;
