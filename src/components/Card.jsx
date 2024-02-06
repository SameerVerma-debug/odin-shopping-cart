import { Link } from "react-router-dom";
import "../styles/card.css";

export const Card = ({ card }) => {
  return (
    <Link to={`/products/${card.id}`}>
      <button className="card">
        <img src={card.image} />
        <p>{card.title}</p>
      </button>
    </Link>
  );
};
