import React from 'react'
import styled from 'styled-components'
import {TbTruckDelivery} from 'react-icons/tb'
import {GiMoneyStack} from 'react-icons/gi'
import {MdOutlineWifiCalling3} from 'react-icons/md'
import {RiPriceTag2Fill} from 'react-icons/ri'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    // footer for desktop 
    <DIV>
      <div className='blackFooter' >
        <div className='footerCart' >
            <TbTruckDelivery className='truck' />
            <div>
            <h5>FREE SHIPING & DELEVERY</h5>
            <p>Free Shiping on all over India</p>
            </div>
            </div>

            <div className='footerCart' >
            <GiMoneyStack className='truck' />
            <div>
            <h5>FREE SHIPING & DELEVERY</h5>
            <p>Please connect with customer service</p>
            </div>
        </div>

        <div className='footerCart' >
            <MdOutlineWifiCalling3 className='truck' />
            <div>
            <h5>FREE SHIPING & DELEVERY</h5>
            <p>We support online 24/7 on day</p>
            </div>
        </div>

        <div className='footerCart' >
            <RiPriceTag2Fill className='truck' />
            <div>
            <h5>FREE SHIPING & DELEVERY</h5>
            <p>You may compare with any other website and share the snapshot with us. We will offer you the same price.</p>
            </div>
        </div>
      
      </div>
      <div className='whiteFooter' >
        <ul>
          <p className="downp" >ABOUT US</p>
          <li>Studio Visit - B-1 & GF 1826, Next to Scottish Mall, P Block, Sector 48, Gurugram, Haryana 122001</li>
          <li>Phone:(+91) 70424-40969</li>
          <li>Email:info@nicemaple.com</li>
          <li><FaFacebookF/> <AiOutlineTwitter/> <AiOutlineInstagram/> <FaLinkedinIn/> </li>
        </ul>
        <ul>
          <p className="downp" >LIVING ROOM</p>
          <li>Sofas & Couches</li>
          <li>Sectional Sofas</li>
          <li>Sofa Cum Beds</li>
          <li>Loveseat</li>
        </ul>
        <ul>
          <p className="downp" >AVAILABLE FABRICS</p>
          <li>Suede Fabric</li>
          <li>Leatherette Fabric</li>
          <li>Suede Fabric (Non Shaded)</li>
        </ul>
        <ul>
          <p className="downp" >CUSTOMER SERVICES</p>
          <li>Contact Us</li>
          <li>Refund Policy</li>
          <li>Shipping Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Track Your Order</li>
        </ul>
<ul>
  <p className="downp" >NEWSLETTER</p>
  <li>Enter your email to receive 
    daily news and get 10% off coupon
     for all items.</li>
  <li><input type="text" placeholder='Email address' /></li>
  <li><button>SUBSCRIBE</button></li>
</ul>

      </div>

      <div className='downFooter' >
    <p>© 2022 Nice Maple. All Rights Reserved By Nice Maple India Private Limited.</p>
    <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/paypal_cards224x59_2x_4375ba53-5ab6-4c1e-8b8b-7b1d895a7b57-min.png?v=1647292664" alt="" />
      </div>


{/* footer for phone */}

<div className='footerforPhone '>
  <ul>
    <p className="downp">ABOUT US</p>
    <li>Studio Visit - B-1 & GF 1826, Next to Scottish Mall, P Block, Sector 48, Gurugram, Haryana 122001</li>
    <li>Phone:(+91) 70424-40969</li>
    <li>Email:info@nicemaple.com</li>
    <li><FaFacebookF/> <AiOutlineTwitter/> <AiOutlineInstagram/> <FaLinkedinIn/></li>
  </ul>

  <ul className='downUl'>
    <p className="downp">LIVING ROOM</p>
  </ul>
   <ul className='downUl'>
    <p className="downp">LIVING ROOM</p>
  </ul>
   <ul className='downUl'>
    <p className="downp">LIVING ROOM</p>
    <li>Enter your email to receive daily news and get 10% off coupon for all items.</li>
    <li><input type="text" placeholder='Email address' /></li>
    <li><button>SUBSCRIBE</button></li>
  </ul>
<div className='lastIMG'>
  <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/paypal_cards224x59_2x_4375ba53-5ab6-4c1e-8b8b-7b1d895a7b57-min.png?v=1647292664" alt="" />
</div>
<p className='lastP'>© 2022 Nice Maple. All Rights Reserved By Nice Maple India Private Limited.</p>

</div>


    </DIV>
  )
}

export default Footer

const DIV=styled.div`
width: 100%;
    .blackFooter{
        border: 1px solid white;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        background-color: #444;;
        color: white;
        height: 150px;
        padding: 25px;
        gap: 10px;
        
    
    }
    .truck{
        font-size: 40px;
        
        
    }
    .footerCart{
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
 
  
    }
    h5,p{
        text-align: center;
    }
    p{
        font-size: smaller;
        text-align: left;
      /* font-weight: bold; */
    }

    .whiteFooter{
display: grid;
grid-template-columns: repeat(5,1fr);
padding-top: 25px;
padding-left: 10px;
padding-right: 45px;
background-color: #ebebeb;
    }
    li{
      text-decoration: none;
      list-style: none;
      font-size: smaller;
      margin-top: 11px;
    }
    ul{
      
    }
   input{
 height: 35px;
 outline: none;
 border: none;
 background-color: white;
   }
   button{
    border: none;
    background-color: black;
    color: white;
    height: 35px;
    font-size: smaller;
    width: 80px;
   }
   .downFooter{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    background-color: #ebebeb;
    padding-left: 40px;
    padding-right: 30px;
   }
   .downp{
    font-weight: bold;
   }
   .footerforPhone{
    display: none;
   }
   @media screen and (max-width:855px) {
    
    .downFooter,.whiteFooter, .whiteFooter,.blackFooter{
      display: none;
    }

    .downUl{
      border-top: 1px solid;
      width: 80%;
      margin: auto;
      
    }
    .footerforPhone{
      display: block;
      background-color: #ebebeb;
      padding-top: 15px;
      padding-bottom: 10px;
      
    }
    .lastP{
      text-align: center;
      width: 70%;
      display: block;
  margin: auto;

    }
    .lastIMG{
      width: 60%;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 15px;
    }
.lastIMG img{
  width: 100%;
 
}
   }

`