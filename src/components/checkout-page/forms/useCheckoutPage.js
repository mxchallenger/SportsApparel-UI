import { useState, useEffect } from 'react';
import validateCheckout from './validateCheckout';

const useCheckoutForm = (values) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrors();
    }
  }, [errors]);

  const handleClick = (e) => {
    e.preventDefault();
    validateCheckout(values);
    setErrors(errors);
  };
  /* const handleChange = (e) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }; */
  return {
    handleClick,
    errors
  };
};

export default useCheckoutForm;
