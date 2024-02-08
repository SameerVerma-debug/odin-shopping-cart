import { useContext } from "react";
import { CartContext } from "../App";

export const CartProductQuantity = ({ id }) => {
  const { cartProductsQuantity, setCartProductsQuantity } =
    useContext(CartContext);

  const decreaseQuantity = () => {
    const quantity = cartProductsQuantity.get(id);
    const decreasedQuantity = Math.max(1, quantity - 1);
    cartProductsQuantity.set(id, decreasedQuantity);
    const newProductsQuantities = new Map(cartProductsQuantity);
    setCartProductsQuantity(newProductsQuantities);
  };

  const increaseQuantity = () => {
    const quantity = cartProductsQuantity.get(id);
    const increasedQuantity = quantity + 1;
    cartProductsQuantity.set(id, increasedQuantity);
    const newProductsQuantities = new Map(cartProductsQuantity);
    setCartProductsQuantity(newProductsQuantities);
  };

  return (
    <div className="set-product-quantity">
      <button
        onClick={decreaseQuantity}
        className="set-quantity-button"
        value="-"
      >
        -
      </button>
      <p className="product-quantity">{cartProductsQuantity.get(id)}</p>
      <button
        onClick={increaseQuantity}
        className="set-quantity-button"
        value="+"
      >
        +
      </button>
    </div>
  );
};
