import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./components/Routes/MainRoutes";
import ProductsContextProvider from "./components/contexts/ProductsContextProvider";
import CartContextProvider from "./components/contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <ProductsContextProvider>
        <App />
        <MainRoutes />
      </ProductsContextProvider>
    </CartContextProvider>
  </BrowserRouter>
);
