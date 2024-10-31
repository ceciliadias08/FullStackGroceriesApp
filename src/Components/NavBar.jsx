import React from "react";
import emptyCartIcon from "../assets/cart-empty.png";
import fullCartIcon from "../assets/cart-full.png";

function NavBar({ cartCount }) {
  return (
    <div className="NavBar">
      <div className="NavUser">
        <p>Welcome to Groceries App!</p>
      </div>
      <div className="NavTitle">
        <h1>Groceries Store</h1>
      </div>
      <div className="NavCart">
        <img
          src={cartCount > 0 ? fullCartIcon : emptyCartIcon} //cart image
          alt="Cart Icon"
          className="cart-icon"
        />
        <span>{cartCount}</span>
      </div>
    </div>
  );
}

export default NavBar;
