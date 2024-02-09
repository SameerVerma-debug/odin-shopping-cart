import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";

export const ProductCategories = () => {
  const [data] = useFetch({ path: "/products/categories", dependencies: [] });

  return (
    
      <div className="categories">
        <NavLink to="/shop/all"><p>All Products</p></NavLink>
        {data &&
          data.map((category) => {
            return (
              <NavLink
                to={`/shop/category/${category}`}
                className="category"
                key={category}
              >
                <p>{category}</p>
              </NavLink>
            );
          })}
      </div>
    
  );
};
