import React from "react";

function QuantityCounter({ quantity, setQuantity, min = 0 }) {
  // Increments the quantity
  const increment = () => setQuantity(quantity + 1);

  // Decrement the quantity
  const decrement = () => setQuantity(Math.max(min, quantity - 1));

  return (
    <div className="QuantityCounter">
      <button onClick={decrement} className="QuantityBtn">
        -
      </button>
      <span>{quantity}</span>
      <button onClick={increment} className="QuantityBtn">
        +
      </button>
    </div>
  );
}

export default QuantityCounter;
