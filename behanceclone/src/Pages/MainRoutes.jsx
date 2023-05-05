
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Products from '../Admin/Pages/Products'
import Deshbord from '../Admin/Pages/Deshbord'
import User from '../Admin/Pages/User'
import Sofa from '../Admin/Pages/Oders'

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path="/products/:pid" element={<SingleProduct />} />
        <Route path='/' element={<Deshbord />} />
        <Route path='/user' element={<User />} />
        <Route path='/order' element={<Sofa/>}/>

      </Routes>
    </div>
  );
};


export default MainRoutes;

