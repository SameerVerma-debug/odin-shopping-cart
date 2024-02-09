import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div className="search">
      <input type="text" className="search-bar" placeholder="Search" />
      <button className="search-button">
        <CiSearch size={20} />
      </button>
    </div>
  );
};
