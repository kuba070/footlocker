import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesPage from "../pages/ServicesPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/products",
      element: <ProductPage />,
      id: 2,
    },
    {
      link: "/services",
      element: <ServicesPage />,
      id: 3,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 4,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
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
