import React from "react";
import QuantityCounter from "./QuantityCounter";

function CartCard({ item, removeFromCart, updateCartQuantity }) {
  //Function to update the quantity
  const setQuantity = (newQuantity) => updateCartQuantity(item.id, newQuantity);

  return (
    <div className="CartCard">
      <img src={item.image} alt={item.productName} />
      <div className="CartCardInfo">
        <h3>{item.productName}</h3>
        <p>Price: ${item.price}</p>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
        <QuantityCounter
          quantity={item.quantity}
          setQuantity={setQuantity}
          min={1}
        />
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartCard;
