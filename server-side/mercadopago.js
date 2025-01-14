import dotenv from "dotenv";
dotenv.config();

// SDK de Mercado Pago
import { MercadoPagoConfig } from "mercadopago";

// Agrega credenciales
export const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});
