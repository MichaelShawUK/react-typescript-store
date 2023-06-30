import GlobalStyle from "./css/GlobalStyle";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ProductSearchContext from "./context/ProductSearchContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <ProductSearchContext.Provider value={[searchQuery, setSearchQuery]}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ProductSearchContext.Provider>
    </div>
  );
}

export default App;
