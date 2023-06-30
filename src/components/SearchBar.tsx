import StyledSearchBar from "../css/StyledSearchBar";
import SearchSVG from "../assets/svg/SearchSVG";

import { SearchBarProps } from "../types";

import { useContext } from "react";
import ProductSearchContext from "../context/ProductSearchContext";

const SearchBar = (props: SearchBarProps) => {
  const setSearchQuery = useContext(ProductSearchContext)[1];
  return (
    <StyledSearchBar className={props.className}>
      <SearchSVG size={24} color="white" />
      <input
        type="text"
        placeholder="Nike, Adidas, Converse, blue, white..."
        onInput={(e) =>
          (setSearchQuery as React.Dispatch<React.SetStateAction<string>>)(
            (e.target as HTMLInputElement).value
          )
        }
      ></input>
    </StyledSearchBar>
  );
};

export default SearchBar;
