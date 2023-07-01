import { createContext } from "react";
import { CartItemType } from "../types";

const CartContext = createContext<
  [CartItemType[], React.Dispatch<React.SetStateAction<CartItemType[]>>]
>([
  [],
  () => {
    ("");
  },
]);

export default CartContext;
