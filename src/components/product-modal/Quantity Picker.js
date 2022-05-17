import React, { useState } from 'react';

const Quantity = ({ max }) => {
  const [qty, setQty] = useState(0);

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
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= max) {
      setQty(value);
    }
  };
  return (
    <div>
      <button type="button" onClick={decreaseQty}> - </button>
      <input type="text" onChange={onChange} value={qty} />
      <button type="button" onClick={increaseQty}> + </button>
    </div>
  );
};

export default Quantity;
