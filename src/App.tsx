import GlobalStyle from "./css/GlobalStyle";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useTopScroll from "./hooks/useTopScroll";
import ProductSearchContext from "./context/ProductSearchContext";
import CartContext from "./context/CartContext";
import { CartItemType } from "./types";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>(
    "cartItems",
    []
  );

  useTopScroll();

  return (
    <div>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <ProductSearchContext.Provider value={[searchQuery, setSearchQuery]}>
          <GlobalStyle />
          <Header />
          <Outlet />
        </ProductSearchContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
