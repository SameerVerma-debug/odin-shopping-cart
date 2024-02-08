import { Link } from "react-router-dom";

export const CartItem = ({ item, changeQuantity, deleteItem }) => {
  return (
    
    <div className="cart-item card">
      <Link to={`/products/${item.id}`}>
      <img className="cart-image" src={item.image} />
      </Link>
      <p>{item.title}</p>
      
      <div className="cart-item-quantity">
        <button
          onClick={() => changeQuantity("-", item.id)}
          className="set-quantity-button"
          value="-"
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => changeQuantity("+", item.id)}
          className="set-quantity-button"
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
