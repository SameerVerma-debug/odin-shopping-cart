import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button } from "./Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "../styles/product-details.css";
import { ProductQuantity } from "./ProductQuantity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "./Loading";

export const ProductDetail = () => {
  const { id } = useParams();

  //when id changes new product details are fetched
  //must to reload page when a new product is searched
  const [product, loading, error] = useFetch({
    path: `/products/${id}`,
    dependencies: [id],
  });

  //quantity to set in cart
  const [productQuantity, setProductQuantity] = useState(1);
  //items in cart
  const { cartItems, setCartItems } = useContext(CartContext);

  //scroll to top when rendered
  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  if(loading){
    return <Loading/>
  }

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
      quantity: productQuantity,
    };

    newCart.push(item);
    setCartItems(newCart);
    toast("Item Added To Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    product && (
      <div className="product-detail-wrapper">
        <div className="product-detail">
          <img src={product.image} className="product-image" />
          <div className="title-price-addToCart">
            <p className="product-title">{product.title}</p>
            <p className="product-price">$ {product.price}</p>
            <ProductQuantity
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
            />
            <Button value="Add To Cart" onClick={addToCart} />
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
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
