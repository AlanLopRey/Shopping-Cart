/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

const NavBar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h2>store</h2>
      </Link>
      <ul className="nav-list">
        <li>
          <Link to={"/cart"} style={navStyles}>
            Cart Items: <span className="cart-count">{quantity}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
