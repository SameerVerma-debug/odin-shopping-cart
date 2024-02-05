import "../styles/card.css"

export const Card = ({card}) => {
  return (
    <button className="card">
      <img src={card.image}/>
      <p>{card.title}</p>
    </button>
  );
};
