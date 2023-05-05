import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const scroll = () => {
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
      
    </div>
  )
}

export default scroll
