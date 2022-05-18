import React, { useState } from 'react';

const Quantity = ({ max }) => {
  const [qty, setQty] = useState(1);

  const decreaseQty = () => {
    if (qty <= 0) {
      setQty(0);
    } else {
      setQty(qty - 1);
    }
  };

  const increaseQty = () => {
    if (qty >= max) {
      setQty(max);
    } else {
      setQty(qty + 1);
    }
  };

  const onChange = (e) => {
    const re = /^[0-9\b]+$/;
    const value = parseInt(e.target.value, 10);
    if (value === '' || re.test(value)) {
      setQty(value);
    }
  };
  return (
    <div>
      <button type="button" onClick={decreaseQty}> - </button>
      <input onChange={onChange} value={qty} />
      <button type="button" onClick={increaseQty}> + </button>
    </div>
  );
};

export default Quantity;
