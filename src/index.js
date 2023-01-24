import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./components/Routes/MainRoutes";
import ProductsContextProvider from "./components/contexts/ProductsContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <App />
      <MainRoutes />
    </ProductsContextProvider>
  </BrowserRouter>
);
