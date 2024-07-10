import { Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import { useCartContext } from "src/hooks/useCartContext";

export function CartView() {
  const { cart, clearCart } = useCartContext();
  const [preferenceID, setPreferenceID] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/mercadopago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPreferenceID(data.id);
      })
      .catch((err) => console.error(err));

    return null;
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-8 p-4 max-w-[400px] mx-auto border rounded-sm"
      >
        {cart.length == 0 && <h2>No hay productos en el carrito</h2>}
        {cart.length > 0 && (
          <>
            <div className="flex flex-col min-w-[150px] gap-8 max-h-[338px] overflow-y-scroll">
              {cart.map((item) => {
                return (
                  <article key={item.id}>
                    <h2>{item.title}</h2>
                    <p>Precio: ${item.unit_price}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </article>
                );
              })}
            </div>
            <p>
              Total: $
              {cart
                .reduce((acc, item) => acc + item.unit_price * item.quantity, 0)
                .toFixed(2)}
            </p>
            <button className="bg-[#3bbaf5] text-white rounded-sm py-2 px-4 hover:bg-[#2fcbfa] transition-colors">
              Confirmar pedido
            </button>
          </>
        )}
      </form>
      <div id="wallet_container">
        {preferenceID && cart.length > 0 && (
          <>
            <Wallet
              initialization={{
                preferenceId: preferenceID,
                redirectMode: "modal",
              }}
            />
            <button
              className="text-red-600 font-bold text-sm text-center w-full hover:bg-red-600 hover:text-white rounded-sm py-2 px-4 mt-4 transition-colors"
              onClick={() => {
                setPreferenceID(null);
                clearCart();
              }}
            >
              Cancelar pedido
            </button>
          </>
        )}
      </div>
    </div>
  );
}
