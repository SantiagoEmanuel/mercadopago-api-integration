import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const updateCart = (item) => {
    let newCart = [];
    let newQuantity = 0;
    let newTotal = 0;

    if (cart.find((cartItem) => cartItem.id === item.id)) {
      if (item.quantity === 0) {
        cart.map((itemCart) => {
          if (itemCart.id === item.id) {
            newCart = cart.filter((cartItem) => cartItem.id !== item.id);
            newQuantity = quantity - itemCart.quantity;
            newTotal = total - itemCart.unit_price * itemCart.quantity;
          }
        });
      } else {
        cart.map((itemCart) => {
          if (itemCart.id === item.id) {
            newQuantity = quantity + (item.quantity - itemCart.quantity);
            newTotal = total + item.unit_price * item.quantity;
          }
          newCart.push(
            itemCart.id === item.id
              ? { ...item, quantity: item.quantity }
              : itemCart
          );
        });
      }
    } else {
      if (cart.length === 0) {
        newCart.push(item);
        newQuantity = item.quantity;
        newTotal = item.unit_price * item.quantity;
      } else {
        newCart.push(...cart, item);
        newQuantity = quantity + item.quantity;
        newTotal = total + item.unit_price * item.quantity;
      }
    }

    setCart([...newCart]);
    setQuantity(newQuantity);
    setTotal(newTotal);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setQuantity(0);
  };

  return {
    cart,
    total,
    quantity,
    updateCart,
    clearCart,
  };
}
