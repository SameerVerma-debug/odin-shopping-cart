import { ProductCategories } from "../components/ProductCategories";
import { Outlet } from "react-router-dom";
import "../styles/shop.css";
import "../styles/cards.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="categories-wrapper">
        <p>Categories</p>
        <ProductCategories />
      </div>
      <Outlet />
    </div>
  );
};
