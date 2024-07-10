import { useState } from "react";
import { CartView } from "./CartView";
import { useCartContext } from "src/hooks/useCartContext";

export function CartWidget() {
  const [open, setOpen] = useState(false);
  const { quantity } = useCartContext();

  return (
    <>
      <button
        title="Mostrar productos en el carrito"
        className="bg-[#3bbaf5] text-white rounded-sm py-2 px-4 hover:bg-[#2fcbfa] transition-colors relative"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {quantity > 0 && (
          <p className="absolute top-0 left-0 bg-red-500 rounded-full w-[32px] h-[32px] grid place-items-center">
            {quantity}
          </p>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-cart"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <circle cx="10" cy="13" r="3" />
          <path d="M3 3l18 18" />
          <path d="M3 9l9-9 9 9" />
          <line x1="3" y1="21" x2="21" y2="21" />
        </svg>
      </button>
      {open && <CartView />}
    </>
  );
}
