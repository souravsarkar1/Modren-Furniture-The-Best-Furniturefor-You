import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";
import SingleProduct from "./SingleProduct";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:pid" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
