
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Products from "./Products";
import SingleProduct from "./SingleProduct";
<<<<<<< HEAD
import Product from '../Admin/Pages/Products'
import Deshbord from '../Admin/Pages/Deshbord'
import User from '../Admin/Pages/User'
import Sofa from '../Admin/Pages/Oders'
import ProductList from '../Component/ProductList';
import ProductCard from '../Component/ProductCard';
=======
// import Products from '../Admin/Pages/Products'
// import Deshbord from '../Admin/Pages/Deshbord'
// import User from '../Admin/Pages/User'
// import Sofa from '../Admin/Pages/Oders'
>>>>>>> 11a06856b947c81147f76134973e7c90b38d7c7d

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<Products />} />
        <Route path="/products/:pid" element={<SingleProduct />} />
<<<<<<< HEAD
        <Route path='/admindashbord' element={<Deshbord />} />
        <Route path='/user' element={<User />} />
        <Route path='/order' element={<Sofa/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productlist' element={<ProductList/>}/>
        <Route path='/productcard' element={<ProductCard/>}/>
=======
        {/* <Route path='/' element={<Deshbord />} />
        <Route path='/user' element={<User />} />
        <Route path='/order' element={<Sofa/>}/> */}

>>>>>>> 11a06856b947c81147f76134973e7c90b38d7c7d
      </Routes>
    </div>
  );
};


export default MainRoutes;

