import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { Card } from "./Card";
import { Sort } from "./Sort";

export const AllProducts = () => {
  const [data, loading, error] = useFetch({ path: "/products", dependencies: [] });
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

  if (error) {
    return <h3>Something Went Wrong</h3>;
  }

  return (
    <div className="cards-wrapper">
      <div className="category-sortbyprice">
        <h1>All Products</h1>
        <Sort sortByPrice={sortByPrice}/>
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
