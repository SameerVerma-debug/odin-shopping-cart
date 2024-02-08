export const Sort = ({ sortByPrice }) => {
  return (
    <select
      className="sort"
      onChange={(event) => sortByPrice(event.target.value)}
    >
      <option value="none">Sort By: None</option>
      <option value="ascending">Price: Low to High</option>
      <option value="descending">Price: High to Low</option>
    </select>
  );
};
