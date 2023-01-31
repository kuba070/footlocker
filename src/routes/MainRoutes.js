import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesPage from "../pages/ServicesPage";
import EditProductPage from "../pages/EditProductPage";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/products",
      element: <ProductPage />,
      id: 1,
    },
    {
      link: "/services",
      element: <ServicesPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 4,
    },

    {
      link: "*",
      element: <NotFoundPage />,
      id: 5,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 5,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
