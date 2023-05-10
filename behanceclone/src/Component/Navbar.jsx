import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaRegUser } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { sidebartogel } from '../Redux/scrollReducer/action';


const Navbar = () => {
    const downnav = useSelector((store) => store.ScrollReducer.static)
    const sideBar = useSelector((store) => store.ScrollReducer.sidebarTogel)
    const dispatch = useDispatch();



    const handleTogle = () => {
        if (sideBar === true) {
            dispatch(sidebartogel(false))
        } else if (sideBar === false) {
            dispatch(sidebartogel(true))
        }

    }

    return (
        <DIV downnav={downnav} >
            {/* navbar for desktop view */}
            <nav className='upernav'>
                <p className='uperNavText'>CUSTOMER CARE : 86963 89045</p>
                <p className='uperNavText'>UPTO 70% DISCOUNT ON UPHOLSTERED BEDS</p>
                <p className='uperNavText'>COLOR & SIZE CUSTOMIZATION AVAILABLE</p>

            </nav>
            <div className='nav_desktop'  >
                <Link to={'/'}>
                    <div className="logo">
                        <img src="https://drive.google.com/uc?export=view&id=1MpB51tW-iAud2R23s5vmcVKtlMDBN2An" alt="logo" className="imageOflogo" />
                    </div>
                </Link>

                <div className="navSection" >

                    <div className='links0'>
                        <Link to={"/products"} className="navbarlink" >LIVING ROOM</Link>

                        <div className='drpoDown1'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_3579a2a7-d150-4b70-8386-90ba042f70da_1800x1800.webp?v=1665507800" alt="offer img" />
                        </div>

                    </div>

                    <div className='links1'>
                        <Link to={"/"} className="navbarlink">CLEARANCE SALE</Link>
                        <div className='drpoDown2'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_2337370a-d037-4582-b723-dfe190abdecb_650x.webp?v=1665508424" alt="offer img" />
                        </div>
                    </div>

                    <div className='links2'>
                        <Link to={"/"} className="navbarlink" >BEDROOM</Link>
                        <div className='drpoDown3'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/ebc88d608f-min.jpg?v=1663481275" alt="offer img" />
                        </div>
                    </div>

                    <div className='links3'>
                        <Link to={"/"} className="navbarlink">DINING ROOM</Link>
                        <div className='drpoDown4'>  <ul className='ul'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Loungers</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Mattress_Sale_Promotion_Instagram_Post_1_400x.png?v=1683009294" alt="offer img" />
                        </div>
                    </div>

                    <div className='links4'>
                        <Link to={"/"} className="navbarlink">STUDY ROOM</Link>
                        <div className='drpoDown5'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Modern_Furniture_promotion_Instagram_Post_1_400x.png?v=1683009438" alt="offer img" />

                        </div>
                    </div>
                    <div className='links5'>
                        <Link to={"/"} className="navbarlink">CLEARANCE SALE</Link>
                        <div className='drpoDown6'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/banner-min.jpg?v=1663576818" alt="offer img" />
                        </div>
                    </div>

                </div>

                <div className='navIcons'>
                    <AiOutlineSearch />
                    <Link to={'/login'}><FaRegUser /></Link>
                    <AiOutlineHeart />
                    <Link to={'/cart'}><GiShoppingCart className='giIcon' /></Link>

                </div>

            </div>


            <div className='nav_desktop nav_downdesktop' style={{ transform: downnav ? "translateY(0%)" : "translateY(-100%)", opacity: downnav ? 100 : 0 }} >
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
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_3579a2a7-d150-4b70-8386-90ba042f70da_1800x1800.webp?v=1665507800" alt="offer img" />
                        </div>

                    </div>

                    <div className='links1'>
                        <Link to={"/"} className="navbarlink">CLEARANCE SALE</Link>
                        <div className='drpoDown2'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_2337370a-d037-4582-b723-dfe190abdecb_650x.webp?v=1665508424" alt="offer img" />
                        </div>
                    </div>

                    <div className='links2'>
                        <Link to={"/"} className="navbarlink" >BEDROOM</Link>
                        <div className='drpoDown3'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/ebc88d608f-min.jpg?v=1663481275" alt="offer img" />
                        </div>
                    </div>

                    <div className='links3'>
                        <Link to={"/"} className="navbarlink">DINING ROOM</Link>
                        <div className='drpoDown4'>  <ul className='ul'>
                            <p className='dropdownListHeading'>SOFA SETS</p>
                            <li className='li'>Sofa Cum Beds</li>
                            <li className='li'>Loungers</li>
                            <li className='li'>Sofas & Couches</li>
                            <li className='li'>Loveseats</li>
                        </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Mattress_Sale_Promotion_Instagram_Post_1_400x.png?v=1683009294" alt="offer img" />
                        </div>
                    </div>

                    <div className='links4'>
                        <Link to={"/"} className="navbarlink">STUDY ROOM</Link>
                        <div className='drpoDown5'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Modern_Furniture_promotion_Instagram_Post_1_400x.png?v=1683009438" alt="offer img" />

                        </div>
                    </div>
                    <div className='links5'>
                        <Link to={"/"} className="navbarlink">CLEARANCE SALE</Link>
                        <div className='drpoDown6'>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>SOFA SETS</p>
                                <li className='li'>Sofa Cum Beds</li>
                                <li className='li'>Loungers</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Loveseats</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>CHAIRS & LOUNGERS</p>

                                <li className='li'>High Back Chairs</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Sofas & Couches</li>
                                <li className='li'>Accent Chairs</li>
                            </ul>
                            <ul className='ul'>
                                <p className='dropdownListHeading'>TABLES & STORAGE</p>
                                <li className='li'>Study Tables</li>
                                <li className='li'>Centre Tables</li>
                                <li className='li'>Console Tables</li>
                                <li className='li'>Shoe Racks</li>
                            </ul>
                            <img className='offerDropdownimage' src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/banner-min.jpg?v=1663576818" alt="offer img" />
                        </div>
                    </div>

                </div>

                <div className='navIcons'>
                    <AiOutlineSearch />
                    <Link to={'/login'}><FaRegUser /></Link>
                    <AiOutlineHeart />
                    <Link to={'/cart'}><GiShoppingCart className='giIcon' /></Link>
                </div>

            </div>

            {/* navbar for phone and tablate */}

            <nav className='Mupernav'>
                <p className='uperNavText'>CUSTOMER CARE : 86963 89045</p>
                <p className='uperNavText'>UPTO 70% DISCOUNT ON UPHOLSTERED BEDS</p>
            </nav>

            <nav className='downDiv1'>
                <div className='leftsideofNavbar'>
                    <RxHamburgerMenu onClick={handleTogle} />
                    <AiOutlineSearch />
                </div>
                <div className='logoOfphoneNavbar'>
                    <img className='imgOfphoneLogoNav' src="https://drive.google.com/uc?export=view&id=1MpB51tW-iAud2R23s5vmcVKtlMDBN2An" alt="" />
                </div>
                <div className='rightsideOfNavbar'>
                <Link to={'/login'}><FaRegUser /></Link>
                <Link to={'/cart'}><GiShoppingCart className='giIcon' /></Link>
                </div>
            </nav>
            <nav className='downDiv1 downDiv2' style={{ transform: downnav ? "translateY(0%)" : "translateY(-100%)", opacity: downnav ? 100 : 0 }}>
                <div className='leftsideofNavbar'>
                    <RxHamburgerMenu onClick={handleTogle} />
                    <AiOutlineSearch />
                </div>
                <div className='logoOfphoneNavbar'>
                    <img className='imgOfphoneLogoNav' src="https://drive.google.com/uc?export=view&id=1MpB51tW-iAud2R23s5vmcVKtlMDBN2An" alt="" />
                </div>
                <div className='rightsideOfNavbar'>
                <Link to={'/login'}><FaRegUser /></Link>
                <Link to={'/cart'}><GiShoppingCart className='giIcon' /></Link>
                </div>
            </nav>


        </DIV>
    )
}

export default Navbar

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
        width: 100%;
  background-color: white;
       height: 70px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
position: relative;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    }
    .nav_downdesktop{
        width: 100%;
  background-color: white;
       height: 70px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
position: fixed;
     top: 0;
     z-index: 6000;
    transition-property: transform,opacity;
    transition-duration: 1000ms;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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

.navIcons{
    display: flex;
    font-size: 20px;
    gap: 18px;
}
.giIcon{
    margin-right: 60px;
}


.drpoDown1,.drpoDown2,.drpoDown3,.drpoDown4,.drpoDown5,.drpoDown6{
    height:0px;
    position: absolute;
    overflow: hidden;
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
   z-index: 500000;
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

.offerDropdownimage{
    width: 200px;
}
.links0:hover .drpoDown1 {
opacity: 100;
height: 250px;

}
.links1:hover .drpoDown2 {
opacity: 100;
height: 250px;

}

.links2:hover .drpoDown3 {
opacity: 100;
height: 250px;
}

.links3:hover .drpoDown4 {
opacity: 100;
height: 250px;

}
.links4:hover .drpoDown5 {
opacity: 100;
height: 250px;

}
.links5:hover .drpoDown6 {
opacity: 100;
height: 250px;

}

.dropdownListHeading{
    font-weight: bold;
    font-size: smaller;
}


.li{
    text-decoration: none;
    list-style-type: none;
    line-height: 30px;
    font-size: smaller;
    
}
.Mupernav{
    display: none;
}
.downDiv1{
    display: none;
}
li:hover{
cursor: pointer;
}

@media screen and (max-width:850px) {
    .nav_desktop,.nav_downdesktop,.upernav{
        display: none;
    }

  .Mupernav{
    height: 60px;
    display: flex;
    flex-direction: column;
    background-color:rgba(63,5,146,255);
   text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    min-height: 35px;
    position: relative;
    z-index: 6;
    font-size: 12px;
    width: 100%;
    align-items: center;
    line-height: 2px;

  }
  .downDiv1{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
  }
.downDiv2{
    width: 100%;
  background-color: white;
       height: 70px;
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
position: fixed;
     top: 0;
     z-index: 6000;
    transition-property: transform,opacity;
    transition-duration: 1000ms;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
  .imgOfphoneLogoNav{
    width: 100%;
  }
.rightsideOfNavbar{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    padding-right: 15px;
    font-size: larger;
}
.leftsideofNavbar{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
    padding-left: 15px;
    font-size: larger;
}
.logoOfphoneNavbar{
    width: 10rem;
}


}

`
