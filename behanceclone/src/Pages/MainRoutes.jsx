import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import { useDispatch } from 'react-redux'
import { stickNavbar } from '../Redux/scrollReducer/action'

const MainRoutes = () => {

  const dispatch=useDispatch();
useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            
            dispatch(stickNavbar(true))
        }else {
            
            dispatch(stickNavbar(false))
        }

    })
},[])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
