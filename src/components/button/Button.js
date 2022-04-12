import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { label, className, handleClick } = props;
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  handleClick: PropTypes.func
};

export default Button;
