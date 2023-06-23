import GlobalStyle from "./css/GlobalStyle";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
