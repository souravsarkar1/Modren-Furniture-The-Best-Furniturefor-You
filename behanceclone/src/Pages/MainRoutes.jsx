
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Products from "./Products";
import SingleProduct from "./SingleProduct";
//import Product from '../Admin/Pages/Products'
//import Deshbord from '../Admin/Pages/Deshbord'
//import User from '../Admin/Pages/User'
//import Sofa from '../Admin/Pages/Oders'
import ProductList from '../Component/ProductList';
import ProductCard from '../Component/ProductCard';
import Product from '../Admin/Pages/Products_Admin';
import Deshbord from '../Admin/Pages/DeshbordAdmin';
import UserAdmin from '../Admin/Pages/User_Admin';
import FuncOrder from '../Admin/Pages/Oders_Admin';
import BuyNow from './BuyNow';
import Setyouraddress from './Address';

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path="/products/:pid" element={<SingleProduct />} />
        <Route path='/admindashbord' element={<Deshbord />} />
        <Route path='/user' element={<UserAdmin />} />
        <Route path='/order' element={<FuncOrder/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/productcard' element={<ProductCard/>}/>
        <Route path='/buynow' element={<BuyNow/>}/>
        <Route path='/address' element={<Setyouraddress/>}/>
      </Routes>
    </div>
  );
};


export default MainRoutes;

