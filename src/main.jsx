import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Estilos globales
import "./sass/style.scss";

// Contexto global del carrito
import { CartContextProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);
