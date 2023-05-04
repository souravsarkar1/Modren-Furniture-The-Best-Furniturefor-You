import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineSearch,AiOutlineHeart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';


const Home = () => {
    return (
        <DIV>
            {/* navbar for desktop view */}
            <nav className='upernav'>
                <p  className='uperNavText'>CUSTOMER CARE : 86963 89045</p>
                <p className='uperNavText'>UPTO 70% DISCOUNT ON UPHOLSTERED BEDS</p>
                <p className='uperNavText'>COLOR & SIZE CUSTOMIZATION AVAILABLE</p>

            </nav>
            <nav className="nav_desktop" >
                <div className="logo">
                    <img src="https://drive.google.com/uc?export=view&id=1MpB51tW-iAud2R23s5vmcVKtlMDBN2An" alt="logo" className="imageOflogo" />
                </div>

                <div className="navSection" >

                    <div className='links0'>  
                    <Link to={"/"} className="navbarlink" >LIVING ROOM</Link>

                    <div className='drpoDown1'>
                        <ul className='ul'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Sectional Sofas</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>
                    </div>
                    
                    </div>

                    <div className='links1'>
                    <Link to={"/"} className="navbarlink">CLEARANCE SALE</Link>
                    <div className='drpoDown2'>
                         <ul className='ul1'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Sectional Sofas</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>
                        </div>
                    </div>

                    <div className='links2'>
                    <Link to={"/"}className="navbarlink" >BEDROOM</Link>
                    <div className='drpoDown3'>
                    <ul className='ul'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Sectional Sofas</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>
                    </div>
                    </div>

                    <div className='links3'>
                    <Link to={"/"} className="navbarlink">DINING ROOM</Link>
                    <div className='drpoDown4'> <ul className='ul'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Sectional Sofas</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>
                        </div>
                    </div>
                    
                    <div className='links4'>
                    <Link to={"/"} className="navbarlink">STUDY ROOM</Link>
                    <div className='drpoDown5'>
                    <ul className='ul'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Sectional Sofas</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>

                    </div>
                    </div>
                    <div className='links5'>
                    <Link to={"/"} className="navbarlink">CLEARANCE SALE</Link>
                    <div className='drpoDown6'>
                         <ul className='ul'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Sectional Sofas</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>
                        </div>
                    </div>
                  
                </div>

                <div className='navIcons'>
               <AiOutlineSearch/>
               <FaRegUser/>
               <AiOutlineHeart/>
               <GiShoppingCart className='giIcon' />
               
                </div>

            </nav>



            <div className="mainbody">


            </div>
        </DIV>
    )
}

export default Home



const DIV = styled.div`
width: 100%;

.upernav{
    height: 35px;
    background-color:rgba(63,5,146,255);
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    gap:18%;

    font-size: 12px;
    font-weight: bold;
  
}
    .nav_desktop{
        background-color: white;
     height: 70px;
     
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
position: sticky;
top: 0;
z-index: 10000;
    }

    .navbarlink{
        text-decoration: none;
        font-size: small;
    display: flex;
    align-items: center;
    height: 70px;
    }

    .imageOflogo{
        width: 200px;
        margin-left: 15px;
    }

.navSection{
    display: flex;
    gap: 35px;
}
/* .links0,.links1,.links2,.links3,.links4,.links5{
    
    
} */
.navIcons{
    display: flex;
    font-size: 20px;
    gap: 18px;
}
.giIcon{
    margin-right: 60px;
}
.mainbody{
    width: 100%;
    height: 9000px;
    border: 1px solid red;
}

.drpoDown1,.drpoDown2,.drpoDown3,.drpoDown4,.drpoDown5,.drpoDown6{
    height:0px;
    position: absolute;
   left: 18%;
   right: 18%;
   top: 60px;
    background-color: #ffffff;
    opacity: 100;
    transition-property: height,opacity,display;
    transition-duration: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
}


.links0:hover .drpoDown1 {
opacity: 100;
height: 180px;

}
.links1:hover .drpoDown2 {
opacity: 100;
height: 180px;

}

.links2:hover .drpoDown3 {
opacity: 100;
height: 180px;
}

.links3:hover .drpoDown4 {
opacity: 100;
height: 180px;

}
.links4:hover .drpoDown5 {
opacity: 100;
height: 180px;

}
.links5:hover .drpoDown6 {
opacity: 100;
height: 180px;

}

.ul{
    display: none;
   
}
.ul1{
    display: none;
   
}
.links0:hover .ul {
display: block;

}
.links1:hover .ul1 {
display: block;

}

.dropdownListHeading{
    font-weight: bold;
    font-size: smaller;
}


.li{
    text-decoration: none;
    list-style-type: none;
    line-height: 30px;
}

`