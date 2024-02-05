import { useFetch } from "../hooks/useFetch"
import { NavLink } from "react-router-dom";

export const ProductCategories = () => {
  const [data] = useFetch({path:"/categories",dependencies:[]});

  return (
    <div className="categories">
      {data && data.map((category) => {
        return (
          <NavLink to={`/shop/category/${category}`} className="category" key={category}>{category.toUpperCase()}</NavLink>
        )
      })}
    </div>
  )
}