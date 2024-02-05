import { NavLink } from "react-router-dom"

export const Header = () => {
  return <div className="header">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/shop">Shop</NavLink>
    <NavLink to="/cart">Cart</NavLink>
  </div>
}