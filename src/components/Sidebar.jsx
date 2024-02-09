import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../App";
import { useContext } from "react";

export const Sidebar = ({sidebar,setSidebar}) => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav
      className="sidebar"
      style={{ display: sidebar === "none" ? "none" : "flex" }}
    >
      <button className="close-sidebar" onClick={() => setSidebar("none")}>
        <AiOutlineClose size={20} />
      </button>

      <NavLink to="/" onClick={() => setSidebar("none")}>
        <AiFillHome size={20} />
        <p>Home</p>
      </NavLink>
      <NavLink to="/shop/all" onClick={() => setSidebar("none")}>
        <FaShoppingBag size={20} />
        <p>Shop</p>
      </NavLink>
      <NavLink to="/cart" onClick={() => setSidebar("none")}>
        <FaShoppingCart size={20} />
        <p>Cart</p>
        <p className="cart-size">{cartItems.length}</p>
      </NavLink>
    </nav>
  );
};
