import { Link } from "react-router-dom";
import "../styles/error.css";

export const Error = () => {
  return (
    <div className="error-wrapper">
      <div className="error">
        <h1>This URL does not exist</h1>
        <div className="error-links">
          <Link to="/">Home</Link>
          <Link to="/shop/all">Shop</Link>
        </div>
      </div>
    </div>
  );
};
