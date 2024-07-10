import { useContext } from "react";
import { CartContext } from "src/contexts/CartContext";

export function useCartContext() {
  return useContext(CartContext);
}
