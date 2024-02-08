import { useContext } from "react";
import { CartContext } from "../App";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import { CartProductQuantity } from "../components/CartProductQuantity";

export const Cart = () => {
  const { cartItems, setCartItems,cartProductsQuantity,setCartProductsQuantity } = useContext(CartContext);
  

  const deleteItem = (id) => {
    const newCart = cartItems.filter((item) => {
      return item.id !== id;
    });

    cartProductsQuantity.delete(id);
    const newCartProductsQuantity = new Map(cartProductsQuantity);
    setCartProductsQuantity(newCartProductsQuantity);
    setCartItems(newCart);
  };
  return cartItems.length > 0 ? (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
      {cartItems.map((item) => {
        return (
          <div className="cart-item card" key={item.id}>
            <img className="cart-image" src={item.image} />
            <p>{item.title}</p>
            <CartProductQuantity id={item.id}/>
            <p>
              $ {
                `${item.price*cartProductsQuantity.get(item.id)}`
              }
            </p>
            <button className="delete" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </div>
        );
      })}
      </div>
      <div className="checkout-button">
      <Button value="Checkout" />
      </div>
    </div>
  ) : (
    <div className="empty-cart">
      <h1 style={{marginBottom:"1rem"}}>No Items in the cart</h1>
      <Link to="/shop/all"><Button value="Browse Products"/></Link>
    </div>
  );
};
