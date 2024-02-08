import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button } from "./Button";
import { useContext, useState } from "react";
import { CartContext } from "../App";
import "../styles/product-details.css";
import { ProductQuantity } from "./ProductQuantity";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, loading, error] = useFetch({
    path: `/products/${id}`,
    dependencies: [],
  });
  const [productQuantity, setProductQuantity] = useState(1);
  const { cartItems, setCartItems} = useContext(CartContext);

  if (error) {
    return <h1>Something Went Wrong</h1>;
  }

  const addToCart = () => {
    const newCart = cartItems.filter((item) => {
      return item.id !== product.id;
    });

    const item = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity:productQuantity
    };

    newCart.push(item);
    setCartItems(newCart);
  };


  return (
    product && (
      <div className="product-detail-wrapper">
        <div className="product-detail">
          <img src={product.image} className="product-image" />
          <div className="title-price-addToCart">
            <p className="product-title">{product.title}</p>
            <p className="product-price">$ {product.price}</p>
            <ProductQuantity productQuantity={productQuantity} setProductQuantity={setProductQuantity}/>
            <Button value="Add To Cart" onClick={addToCart} />
          </div>
        </div>
        <div className="product-description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    )
  );
};
