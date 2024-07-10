import { useState } from "react";
import { useCartContext } from "src/hooks/useCartContext";

export function ItemCount({ initialCount = 0, limit, product }) {
  const [count, setCount] = useState(initialCount);
  const { updateCart } = useCartContext();

  return (
    <div className="flex flex-col gap-2 w-full items-center justify-between">
      <div className="flex w-full justify-between items-center">
        <button
          onClick={() => {
            count > 0 && setCount(count - 1);
          }}
          className="bg-[#f59e3b] w-[32px] h-[32px] rounded-sm hover:bg-[#f59e3b]/80 transition-colors"
        >
          -
        </button>
        <p className="text-center font-bold text-xl">{count}</p>
        <button
          onClick={() => {
            count < limit && setCount(count + 1);
          }}
          className="bg-[#f59e3b] w-[32px] h-[32px] rounded-sm hover:bg-[#f59e3b]/80 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          updateCart({
            id: product.id,
            title: product.title,
            quantity: count,
            unit_price: product.price,
          });
        }}
        className="bg-[#f59e3b] text-white rounded-sm py-2 px-4 hover:bg-[#f1962e]/80 transition-colors"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
