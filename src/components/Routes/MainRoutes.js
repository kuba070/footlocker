import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
