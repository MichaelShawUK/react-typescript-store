import StyledSearchBar from "../css/StyledSearchBar";
import SearchSVG from "../assets/svg/SearchSVG";

import { SearchBarProps } from "../types";

const SearchBar = (props: SearchBarProps) => {
  return (
    <StyledSearchBar className={props.className}>
      <SearchSVG size={24} color="white" />
      <input
        type="text"
        placeholder="Nike, Adidas, Converse, blue, white..."
      ></input>
    </StyledSearchBar>
  );
};

export default SearchBar;
