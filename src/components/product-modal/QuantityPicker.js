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

  return (
    <div>
      <button type="button" onClick={decreaseQty}> - </button>
      <input type="text" value={qty} />
      <button type="button" onClick={increaseQty}> + </button>
    </div>
  );
};

export default Quantity;
