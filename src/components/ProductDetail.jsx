import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button } from "./Button";
import { useContext, useRef } from "react";
import { CartContext } from "../App";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, loading, error] = useFetch({
    path: `/products/${id}`,
    dependencies: [],
  });
  const productQuantity = useRef(1);
  const { cartItems, setCartItems } = useContext(CartContext);

  if (error) {
    return <h1>Something Went Wrong</h1>;
  }

  const addToCart = () => {
    const newCart = [...cartItems];

    const item = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: productQuantity.current.value,
    };

    const index = newCart.findIndex((item) => {
      return item.id == product.id;
    });

    index >=0 ? newCart[index] = item : newCart.push(item);

    setCartItems(newCart);
    console.log(newCart);
  };

  return (
    product && (
      <div className="product-detail">
        <img src={product.image} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <input ref={productQuantity} type="number" min="1" defaultValue="1" />
        <Button value="Add To Cart" onClick={addToCart} />
      </div>
    )
  );
};
