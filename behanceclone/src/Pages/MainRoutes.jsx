import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
//import Product from '../Admin/Pages/Products'
//import Deshbord from '../Admin/Pages/Deshbord'
//import User from '../Admin/Pages/User'
//import Sofa from '../Admin/Pages/Oders'
import Deshbord from "../Admin/Pages/DeshbordAdmin";
import UserAdmin from "../Admin/Pages/User_Admin";
import FuncOrder from "../Admin/Pages/Oders_Admin";
import BuyNow from "./BuyNow";
import Setyouraddress from "./Address";
import Home from "./Home";
import CartPage from "./CartPage";
import { PrivateRoute } from "../Component/PrivateRoute";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<PrivateRoute><CartPage/></PrivateRoute>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:pid" element={<PrivateRoute><SingleProduct /></PrivateRoute>} />
        <Route path="/admindashbord" element={<Deshbord />} />
        <Route path="/user" element={<UserAdmin />} />
        <Route path="/order" element={<FuncOrder />} />
        <Route path="/buynow" element={<PrivateRoute><BuyNow /></PrivateRoute>} />
        <Route path="/address" element={<PrivateRoute><Setyouraddress /></PrivateRoute>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
