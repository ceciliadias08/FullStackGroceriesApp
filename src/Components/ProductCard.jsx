import React, { useState } from "react";
import QuantityCounter from "../Components/QuantityCounter";

function ProductCard({ product, addToCart }) {
  //Quantity of product start in 1
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity); //add with the specific quantity
      setQuantity(1); //Reset quantity to 1
    } else {
      alert("Please add a quantity before adding to cart."); //Invalid quantity
    }
  };

  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.brand}</p>
      <p>${product.price}</p>
      <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
