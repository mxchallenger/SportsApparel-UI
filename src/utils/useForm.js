// this file handles global validation functions
import { useState } from 'react';
import { validateField } from '../components/checkout-page/checkoutValidation';
// useForm hook logic lives here to be used throughout for validation
export default function useForm({ validations, initialValues = {} }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function validateInput(name, value) {
    const rules = validations[name];
    if (rules) {
      if (rules.required) {
        if (!value.trim()) {
          return 'Required Field';
        }
      }
      if (rules.pattern) {
        if (!new RegExp(rules.pattern.value).exec(value)) {
          return rules.pattern.message;
        }
      }
      if (rules.validate && typeof rules.validate === 'function') {
        const error = rules.validate(value);
        if (error) {
          return error;
        }
      }
    }
    return '';
  }
  function bindInput(name) {
    if (!name) {
      throw new Error('The field name parameter is required');
    }
    if (name && typeof name !== 'string') {
      throw new Error('The field names should be strings');
    }

    return {
      value: values[name] || '',
      onChange: (e) => {
        const { value } = e.target;
        setValues((state) => ({ ...state, [name]: validateInput(name, value) }));
        setErrors((state) => ({ ...state, [name]: validateInput(name, value) }));
      }
    };
  }
  function isValid() {
    const nameBool = ((name) => Boolean(validateField(name, values[name])));
    const hasErrors = Object.keys(validations).some(nameBool);
    return !hasErrors; // returns false if there are errors
  }

  return {
    values,
    errors,
    validateInput,
    bindInput,
    isValid
  };
}
