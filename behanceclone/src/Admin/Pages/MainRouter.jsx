import React from 'react'
import { Route, Routes } from 'react-router'
import Products from './Products'
import Deshbord from './Deshbord'
import User from './User'
import Oders from './Oders'

export default function MainRouter() {
    return (
        <Routes>
            <Route path='/products' element={<Products />} />
            <Route path='/' element={<Deshbord />} />
            <Route path='/user' element={<User />} />
            <Route path='/Order' element={<Oders />} />
        </Routes>
    )
}
