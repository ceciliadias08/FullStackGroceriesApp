import React from "react";
import CartCard from "../Components/CartCard";

function CartContainer({
  cart,
  removeFromCart,
  emptyCart,
  updateCartQuantity,
  cartTotal,
}) {
  return (
    <div className="CartContainer">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateCartQuantity={updateCartQuantity}
              />
            ))}
          </div>

          <div className="CartListBtns">
            <p>
              Total: $
              {Number.isFinite(cartTotal) ? cartTotal.toFixed(2) : "0.00"}
            </p>
            <button onClick={emptyCart}>Empty Cart</button>
            <button id="BuyButton">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartContainer;
