import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { CartContext } from "../App";
import { useContext } from "react";

export const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar hideOnMobile">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop/all">Shop</NavLink>
        <div className="navbar-cart">
          <NavLink to="/cart">
            <FaShoppingCart size={25} />
          </NavLink>
          <span className="cart-size">{cartItems.length}</span>
        </div>
      </nav>
  )
}