import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../App";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/header.css";

export const Header = () => {
  const { cartItems } = useContext(CartContext);
  const cartSize = cartItems.length;
  return (
    <div className="header">
      <Link to="/">
        <img src="/assets/images/logo.svg" className="logo" />
      </Link>
      <div className="search">
        <input type="text" className="search-bar" placeholder="Search" />
        <button className="search-button">
          <CiSearch size={20} />
        </button>
      </div>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop/all">Shop</NavLink>
        <div className="navbar-cart">
          <span className="cart-size">{cartSize == 0 ? "" : cartSize}</span>
          <NavLink to="/cart">
            <FaShoppingCart size={25}/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
