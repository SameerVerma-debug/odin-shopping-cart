import { useContext } from "react";
import { CartContext } from "../App";
import { Button } from "../components/Button";

export const Cart = () => {
  const { cartItems,setCartItems} = useContext(CartContext);

  const deleteItem = (id) => {
    const newCart = [...cartItems];
    const index = newCart.findIndex(item => item.id == id);

    newCart.splice(index,1);

    setCartItems(newCart);
  }
  return (
    cartItems.length > 0 ? <div className="cart">
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
            <button className="delete" onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        );
      })}
      <Button value="Checkout"/>
    </div> : <h1>No Items in the cart</h1>
  );
};
