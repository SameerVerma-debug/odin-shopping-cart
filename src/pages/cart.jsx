import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import "../styles/cart.css";
import { CartItem } from "../components/cartItem";
import { EmptyCart } from "../components/EmptyCart";
import { CheckoutButton } from "../components/CheckoutButton";
import { CartTotal } from "../components/CartTotal";

export const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = calculateTotal();
    setTotal(newTotal);
  }, [cartItems]);

  const deleteItem = (id) => {
    const newCart = cartItems.filter((item) => {
      return item.id !== id;
    });

    setCartItems(newCart);
  };

  const changeQuantity = (button, id) => {
    const index = cartItems.findIndex((item) => {
      return item.id === id;
    });

    cartItems[index].quantity =
      button == "-"
        ? Math.max(cartItems[index].quantity - 1, 1)
        : cartItems[index].quantity + 1;
    const newCart = [...cartItems];
    setCartItems(newCart);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  return cartItems.length > 0 ? (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              changeQuantity={changeQuantity}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
      <CartTotal total={total}/>
      <CheckoutButton/>
    </div>
  ) : (
    <EmptyCart />
  );
};
