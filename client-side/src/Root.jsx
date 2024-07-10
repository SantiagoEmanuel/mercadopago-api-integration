import { useState } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { CartWidget } from "src/components/CartWidget";
import { CartProvider } from "src/providers/CartProvider";
import { useEffect } from "react";
import { ItemCount } from "src/components/ItemCount";

initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY);

export function Root() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <CartProvider>
      <h1 className="text-center text-3xl font-bold my-20 opacity-55">
        MercadoPago API - TEST 🤙
      </h1>
      <div className="flex flex-row-reverse justify-between">
        <CartWidget />
        <div className="flex flex-wrap gap-4 max-w-[700px]">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p>Precio: ${product.price}</p>
                <p>Stock: {product.stock}</p>
                <ItemCount limit={product.stock} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </CartProvider>
  );
}
