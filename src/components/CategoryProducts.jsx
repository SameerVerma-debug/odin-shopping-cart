import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Sort } from "./Sort";
import { Loading } from "./Loading";

export const CategoryProducts = () => {
  const { name } = useParams();

  //fetch data when name changes
  const [data, loading, error] = useFetch({
    path: `/products/category/${name}`,
    dependencies: [name],
  });

  const [products, setProducts] = useState(data);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const sortByPrice = (value) => {
    if (value === "none") {
      setProducts(data);
      return;
    }

    let newProductsOrder = [...products];

    if (value === "ascending") {
      newProductsOrder.sort((a, b) => a.price - b.price);
    } else if (value === "descending") {
      newProductsOrder.sort((a, b) => b.price - a.price);
    }

    setProducts(newProductsOrder);
  };

  if(loading){
    return <Loading/>
  }

  if (error) {
    return <h3>Something Went Wrong</h3>;
  }
  return (
    <div className="cards-wrapper">
      <div className="category-sortbyprice">
        <p className="category-name">{name}</p>
        <Sort sortByPrice={sortByPrice} />
      </div>
      <div className="cards">
        {products &&
          products.map((product) => {
            return <Card key={product.id} card={product} />;
          })}
      </div>
    </div>
  );
};
