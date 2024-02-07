import { Link } from "react-router-dom";

export const Card = ({ card }) => {
  return (
    <Link to={`/products/${card.id}`}>
      <button className="card">
        <img src={card.image} />
        <p>{card.title}</p>
        <h3>$ {card.price}</h3>
      </button>
    </Link>
  );
};
