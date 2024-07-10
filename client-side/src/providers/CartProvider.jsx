import { CartContext } from "src/contexts/CartContext";
import { useCart } from "src/hooks/useCart";

export function CartProvider({ children }) {
  const { cart, total, quantity, updateCart, clearCart } = useCart();

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        quantity,
        updateCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
