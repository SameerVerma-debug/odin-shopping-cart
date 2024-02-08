import { Link } from "react-router-dom";

export const CartItem = ({ item, changeQuantity, deleteItem }) => {
  return (
    <div className="cart-item">
      <Link to={`/products/${item.id}`}>
        <div className="cart-image-title">
          <img className="cart-image" src={item.image} />
          <p className="cart-item-title">{item.title}</p>
        </div>
      </Link>

      <div className="cart-item-quantity">
        <button
          onClick={() => changeQuantity("-", item.id)}
          className="set-cart-quantity-button"
          value="-"
        >
          -
        </button>
        <p className="cart-item-quantity">{item.quantity}</p>
        <button
          onClick={() => changeQuantity("+", item.id)}
          className="set-cart-quantity-button"
          value="+"
        >
          +
        </button>
      </div>
      <p className="cart-item-price">
        $ {(item.quantity * item.price).toFixed(2)}
      </p>
      <button className="delete button" onClick={() => deleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
};
