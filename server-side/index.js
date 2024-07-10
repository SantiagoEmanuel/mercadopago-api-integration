import express, { json } from "express";
import cors from "cors";
import { Preference, Payment } from "mercadopago";
import { client } from "./mercadopago.js";
import { products } from "./db/products.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

// ⬇️ Recibe la notificación de mercadopago cuando el pago se ha realizado. (IMPORTANTE -> NO REALIZA LA COMPROBACIÓN DEL PAGO)
app.post("/api/payment_success", async (req, res) => {
  const request_id = req.headers["x-request-id"];
  const x_signature = req.headers["x-signature"];
  const [ts_header, v1_header] = x_signature.split(",");
  const data = req.query;

  // ⬇️ Busca si el pago existe.
  const payment = await new Payment(client)
    .get({ id: data["data.id"] })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  console.log("payment:", payment);
  res.send("Payment success!").status(200);
});

app.get("/api/products", async (req, res) => {
  res.send(products).status(200);
});
app.post("/api/mercadopago", async (req, res) => {
  const data = req.body;

  const preference = await new Preference(client)
    .create({
      body: {
        payment_methods: {
          excluded_payment_types: [],
          installments: 6,
        },
        items: data.cart,
      },
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });

  res.send({
    notes:
      "Devolvemos dos opciones, la url de pago para el sandbox (utlToPay) o la id de la preferencia (id) para utilizar el componente Wallet de Mercado Pago",
    urlToPay: preference.sandbox_init_point,
    id: preference.id,
  });
});

app.use((req, res, next) => {
  res.status(404).send({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
