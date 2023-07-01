import { createContext } from "react";

const ProductSearchContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>([
  "",
  () => {
    ("");
  },
]);

export default ProductSearchContext;
