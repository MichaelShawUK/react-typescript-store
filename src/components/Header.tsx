import SearchSVG from "../assets/svg/SearchSVG";
import BagSVG from "../assets/svg/BagSVG";
import MenuSVG from "../assets/svg/MenuSVG";
import SearchBar from "./SearchBar";

import StyledHeader from "../css/StyledHeader";
import ProductSearchContext from "../context/ProductSearchContext";
import { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function showMenu(): void {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      window.addEventListener("click", handleClick);
    }
  }

  function handleClick(e: MouseEvent): void {
    const tagName = (e.target as HTMLElement).tagName;
    if (tagName === "A" || tagName === "DIALOG") {
      dialogRef.current?.close();
      window.removeEventListener("click", handleClick);
    }
  }

  const setSearchQuery = useContext(ProductSearchContext)[1];

  return (
    <>
      <StyledHeader>
        <div className="logo">
          <Link to="/">Urban.</Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="men">Men</Link>
            </li>
            <li>
              <Link to="women">Women</Link>
            </li>
            <li>
              <Link to="junior">Junior</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <SearchSVG
            onClick={() => {
              setShowSearchBar(!showSearchBar);
            }}
          />
          <BagSVG />
          <MenuSVG onClick={showMenu} />
        </div>
        <dialog ref={dialogRef}>
          <div className="modal">
            <Link to="/">Home</Link>
            <Link to="men">Men</Link>
            <Link to="women">Women</Link>
            <Link to="junior">Junior</Link>
          </div>
        </dialog>
      </StyledHeader>
      {showSearchBar ? (
        <SearchBar className="show-searchbar" />
      ) : (
        <SearchBar className="" />
      )}
    </>
  );
};

export default Header;
