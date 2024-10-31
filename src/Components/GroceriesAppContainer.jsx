import React, { useState, useEffect } from "react";
import CartContainer from "./CartContainer";
import ProductsContainer from "./ProductsContainer";
import NavBar from "./NavBar";
import products from "../data/products";
import "../app.css";

function GroceriesAppContainer() {
  // Product available
  const [inventory] = useState(products);
  //Cart starts empty
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please add a quantity before adding to cart."); //valid quantity
      return;
    }
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        //update the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        //add as a new item
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  //Empty the cart
  const emptyCart = () => {
    setCart([]);
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  //Calculate everything
  const cartTotal = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div className="GroceriesAppContainer">
      <NavBar cartCount={cart.length} />
      <div className="container">
        <ProductsContainer inventory={inventory} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
          updateCartQuantity={updateCartQuantity}
          cartTotal={cartTotal}
        />
      </div>
    </div>
  );
}

export default GroceriesAppContainer;
