import { Link } from "react-router-dom";
import { Button } from "./Button";

export const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h1 style={{ marginBottom: "1rem" }}>No Items in the cart</h1>
      <Link to="/shop/all">
        <Button value="Browse Products" />
      </Link>
    </div>
  );
};
