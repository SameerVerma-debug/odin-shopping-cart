import { ProductCategories } from "../components/ProductCategories";
import { Outlet } from "react-router-dom";
import "../styles/shop.css";
import "../styles/cards.css";

export const Shop = () => {
  return (
    <div className="shop">
        <ProductCategories/>
        <Outlet/>
    </div>
  )
};
