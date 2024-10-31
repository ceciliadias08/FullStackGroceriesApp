import React from "react";
import ProductCard from "./ProductCard";

function ProductsContainer({ inventory, addToCart }) {
  return (
    <div className="ProductsContainer">
      {inventory.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductsContainer;
