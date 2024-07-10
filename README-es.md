# MERCADOPAGO API

## 🚀 Iniciar el proyecto

### Clona el proyecto

```bash
git clone https://github.com/SantiagoEmanuel/mercadopago-api-integration
```

### Frontend

```bash
cd client-side
```

```bash
pnpm install
```

```bash
pnpm run dev
```

### Backend

```bash
cd server-side
```

<!-- Instalar dependencias e iniciar el servidor en modo watch -->

```bash
pnpm initialize-dev
```

> [!NOTE]
> Copiar el archivo `.env.example` a `.env` y agregar las credenciales de tu cuenta de Mercado Pago.
>
> Si no tienes una cuenta de Mercado Pago, puedes crear una [aquí](https://www.mercadopago.com.ar/hub/registration/fiscal-splitter?contextual=normal&redirect_url=https%3A%2F%2Fwww.mercadopago.com.ar%2Fdevelopers%2Fpanel%2Fapp).

## Contribución

Si deseas contribuir a este proyecto, puedes hacerlo a través de los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tus cambios.
3. Envía un pull request al repositorio original.

## 📝 Descripción

Este proyecto es un ejemplo de como integrar Mercado Pago en un sitio web.

Se utiliza React y Node.

El componente de carrito de compras se puede visualizar en la ruta `/`.

En la ruta `/` podrás agregar productos a tu carrito de compras y hacer clic en el botón "Confirmar pedido" para enviar la preferencia de pago a Mercado Pago.

Al hacer clic en el botón "Confirmar pedido", se enviará la preferencia de pago a Mercado Pago.

Una vez que el backend procese la preferencia de pago, se redirige a la página de Mercado Pago para que realice el pago.

Al hacer clic en el botón "Cancelar pedido", se cancelará la preferencia de pago en Mercado Pago.

## 📄 Licencia

Este proyecto está licenciado bajo licencia **MIT**, si deseas saber más, visite el fichero [LICENSE](./LICENSE).

---

Hecho con ❤️ por [Santiago Emanuel Mustafa Font](https://github.com/SantiagoEmanuel)

## 📝 GitHub y LinkedIn.

Github: [Santiago Emanuel Mustafa Font](https://github.com/SantiagoEmanuel)
LinkedIn: [Santiago Emanuel Mustafa Font](https://www.linkedin.com/in/santiago-emanuel-mustaf%C3%A1-font-b25902277/)
