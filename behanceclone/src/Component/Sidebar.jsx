import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RxCross2 } from 'react-icons/rx'
import { sidebartogel } from '../Redux/scrollReducer/action'

const Sidebar = () => {
    const sideBar=useSelector((store)=>store.ScrollReducer.sidebarTogel)
    const dispatch=useDispatch();
    console.log(sideBar)
const handleCross=()=>{
    dispatch(sidebartogel(false));
}

  return (
    <DIV sideBar={sideBar} >
        <div className='navofSidebar'>
        <div className='forLogo'>
            <img src="https://drive.google.com/uc?export=view&id=1MpB51tW-iAud2R23s5vmcVKtlMDBN2An" alt="photo" />
        </div>
         <span className='spanOfcross' onClick={handleCross} ><RxCross2 className='cross'/></span>
        </div>
      <ul>
        <li>LIVING ROOM</li>
        <hr />
        <li>BEDROOM</li>
        <hr />
        <li>DINNING ROOM</li>
        <hr />
        <li>STUDY ROOM</li>
        <hr />
        <li>CLERANCE SALE</li>
        <hr />
        <li>LOGIN</li>
        <hr />
        <li>REGISTER NOW</li>
        <hr />
        <li>WISH LIST</li>
      </ul>
    </DIV>
  )
}

export default Sidebar

const DIV=styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50000;
    transform: ${(props)=>props.sideBar? "translateX(0%)":"translateX(-100%)"};
    transition: transform 800ms ease-in-out;

.navofSidebar{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid black;
    height: 65px;
    justify-content: space-between;

}

    img{
        width: 100%;
    }
    .forLogo{
        width: 10rem;
        padding-left: 15px;
    }
    .spanOfcross{
        width: 40px;
       
     
     }
    .cross{
 font-size: 2rem;
 
 transform: ${(props)=>props.sideBar? "rotate(360deg)":"rotate(0deg)"};
 transition: transform 800ms;
    }
    ul{
     text-decoration: none;
     list-style: none;
     width: 98%;
     
     padding-left: 0px;
     margin-top: 0;
    }
    ul li{
        
        font-size: smaller;
        height: 40px;
        display: flex;
        align-items: center;
        margin-left: 20px;
    }


`