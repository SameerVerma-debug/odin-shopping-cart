import { Link } from "react-router-dom";

export const SearchOption = ({ option, clearSearch }) => {
  return (
    <Link to={`/products/${option.id}`} key={option.id} onClick={clearSearch}>
      <div className="search-option">
        <img className="search-image" src={option.image} />
        <p className="search-title">{option.title}</p>
      </div>
    </Link>
  );
};
