/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  return (
    <div className="cart-container">
      <p>Items in cart: {quantity}</p>
      <p>total price: ${totalPrice}</p>
      <button onClick={() => console.log(cart)}>Checkout in console</button>
    </div>
  );
};
