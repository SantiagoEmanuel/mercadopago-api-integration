import { createContext } from "react";

export const CartContext = createContext({ cart: [], total: 0, quantity: 0 });
