import { useState } from 'react';
import { validate } from './Validate';

const useForm = (data) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    setErrors(validate(data));
  };

  return {
    handleSubmit,
    errors
  };
};
export default useForm;
