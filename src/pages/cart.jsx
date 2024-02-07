import { useContext } from "react";
import { CartContext } from "../App";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import "../styles/cart.css";

export const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const deleteItem = (id) => {
    const newCart = cartItems.filter((item) => {
      return item.id !== id;
    });

    setCartItems(newCart);
  };
  return cartItems.length > 0 ? (
    <div className="cart">
      {cartItems.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <img src={item.image} />
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <p>
              $
              {`${item.price} * ${Number(item.quantity)} = $${
                item.price * Number(item.quantity)
              }`}
            </p>
            <button className="delete" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </div>
        );
      })}
      <Button value="Checkout" />
    </div>
  ) : (
    <div className="empty-cart">
      <h1 style={{marginBottom:"1rem"}}>No Items in the cart</h1>
      <Link to="/shop/all"><Button value="Browse Products"/></Link>
    </div>
  );
};
