import { CiSearch } from "react-icons/ci";
import { useFetch } from "../hooks/useFetch";
import { useRef, useState } from "react";
import "../styles/search.css";
import { debounce } from "../utils/debounce";
import { SearchOption } from "./SearchOption";
import useOutsideClick from "../hooks/useOutsideClick";

export const Search = () => {
  const [products] = useFetch({
    path: "/products",
    dependencies: [],
  });
  const [searchOptions, setSearchOptions] = useState([]);
  const [autoCompleteVisibility,setAutocompleteVisibility] = useState(false);
  const searchInputRef = useRef();
  const autocompleteRef = useRef(null);

  useOutsideClick(autocompleteRef,setAutocompleteVisibility);

  const handleSearch = () => {
    const searchValue = searchInputRef.current.value.toLowerCase();
    const newSearchOptions = [];

    for (let it = 0; it < products.length; it++) {
      const productTitle = products[it].title.toLowerCase();

      if (searchValue !== "" && productTitle.includes(searchValue)) {
        newSearchOptions.push({
          id: products[it].id,
          title: products[it].title,
          image: products[it].image,
        });
      }
    }

    setSearchOptions(newSearchOptions);
    newSearchOptions.length > 0 ? setAutocompleteVisibility(true) : setAutocompleteVisibility(false);
  };

  const clearSearch = () => {
    searchInputRef.current.value = "";
    setSearchOptions([]);
    setAutocompleteVisibility(false);
  };

  return (
    <div className="search-autocomplete">
      <div className="search">
        <input
          ref={searchInputRef}
          type="text"
          className="search-bar"
          placeholder="Search"
          onChange={debounce(handleSearch)}
        />
        <button className="search-button">
          <CiSearch size={20} />
        </button>
      </div>
      {searchOptions && (
        <div ref={autocompleteRef} className={autoCompleteVisibility ? "autocomplete-active" : "autocomplete"} >
          {searchOptions.map((option) => {
            return (
              <SearchOption key={option.id} option={option} clearSearch={clearSearch}/>
            );
          })}
        </div>
      )}
    </div>
  );
};
