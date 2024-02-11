import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../App";
import { useContext, useEffect, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export const Sidebar = ({ sidebar, setSidebar }) => {
  const { cartItems } = useContext(CartContext);
  const sidebarRef = useRef(null);

  //Close sidebar when clicked outside
  useOutsideClick(sidebarRef, setSidebar);

  return (
    <nav
      className="sidebar"
      style={{ display: sidebar === false ? "none" : "flex" }}
      ref={sidebarRef}
    >
      <button className="close-sidebar" onClick={() => setSidebar(false)}>
        <AiOutlineClose size={20} />
      </button>

      <NavLink to="/" onClick={() => setSidebar(false)}>
        <AiFillHome size={20} />
        <p>Home</p>
      </NavLink>
      <NavLink to="/shop/all" onClick={() => setSidebar(false)}>
        <FaShoppingBag size={20} />
        <p>Shop</p>
      </NavLink>
      <NavLink to="/cart" onClick={() => setSidebar(false)}>
        <FaShoppingCart size={20} />
        <p>Cart</p>
        <p className="cart-size">{cartItems.length}</p>
      </NavLink>
    </nav>
  );
};
