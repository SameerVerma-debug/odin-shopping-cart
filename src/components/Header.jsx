import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../App"

export const Header = () => {
  const {cartItems,setCartItems} = useContext(CartContext)
  const cartSize = cartItems.length
  return <div className="header">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/shop">Shop</NavLink>
    <NavLink to="/cart">Cart</NavLink>
    <span className="cart-size">{cartSize == 0 ? "" : cartSize}</span>
  </div>
}