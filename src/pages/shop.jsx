import { useFetch } from "../hooks/useFetch";
import { ProductCategories } from "../components/ProductCategories";
import { Outlet } from "react-router-dom";

export const Shop = () => {
  return (
    <div className="shop">
        <ProductCategories/>
        <Outlet/>
    </div>
  )
};
