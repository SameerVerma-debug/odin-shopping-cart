import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "./Card";

export const CategoryProducts = () => {
  const { name } = useParams();
  const [category, loading, error] = useFetch({
    path: `/products/category/${name}`,
    dependencies: [name],
  });

  if (error) {
    return <h3>Something Went Wrong</h3>;
  }
  return (
    <div className="cards-wrapper">
      <h1>{name}</h1>
      <div className="cards">
        {category &&
          category.map((product) => {
            return <Card key={product.id} card={product} />;
          })}
      </div>
    </div>
  );
};
