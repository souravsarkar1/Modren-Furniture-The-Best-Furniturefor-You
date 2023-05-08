import React, { useEffect, useState } from 'react'
import useResizeObserver from "use-resize-observer";
import SimpleImageSlider from "react-simple-image-slider";
import styled from 'styled-components'
import image1 from '../images/image1.webp'
import image2 from '../images/image2.webp'
import image3 from '../images/image3.webp'


const Home = () => {
    const { ref, width = 1, height = 1 } = useResizeObserver();
     
    const images = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        
      ];


    return (
        <>
        
       <DIV>
       <div ref={ref} className="card_imgBox" style={{ width: "100%", height: "400px" }} >
       <SimpleImageSlider
        width={width}
        height={height}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true} 
      />
    </div>
       


  <div className='midBody'>

    <div className='firstTwoImage'>
        <div className='item1'>
            <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Green_Minimalist_Furniture_Collection_Trifolds_Brochure_1_800x.png?v=1683009296" alt="" />
            </div>
           
        <div className='item2'>
            <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Mattress_Sale_Promotion_Instagram_Post_1_400x.png?v=1683009294" alt="" /> 
            </div>
            <div className='item3'>
            <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Modern_Furniture_promotion_Instagram_Post_1_400x.png?v=1683009438" alt="" /> 
            </div>
        <div className='item4'>
            <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Aesthetic_Design_Home_Interior_Reels_Video_Ad_ac640579-5b9a-417b-bb18-c94edebc71b0_800x.jpg?v=1683009325" alt="" /> 
        </div>
    </div>

    <h2 className='middleheading'>FEATURED COLLECTION</h2>
    <p className='middleParagraf' >If you are looking for a perfect bed for your room! Explore now</p>


<div className='FourImage'>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aeef02ca-c011-479a-ae27-b396185f868c_1800x1800.webp?v=1665833549" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/1-min_3b65fa82-e147-4280-80c9-56a0f5669032_0_1800x1800.png?v=1653032311" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aee43769-ed34-4e66-add0-dcae9d9139d3_0_1800x1800.webp?v=1665508957" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/61WH4XAOPpL._SL1000_-min_1800x1800.jpg?v=1647594539" alt="" /></div>

</div>
<h2 className='middleheading'>OUR SOFA COLLECTION</h2>
    <p className='middleParagraf' >Sometimes most productive thing you can do is RELAX</p>

    <div className='FourImage'>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aeef02ca-c011-479a-ae27-b396185f868c_1800x1800.webp?v=1665833549" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/1-min_3b65fa82-e147-4280-80c9-56a0f5669032_0_1800x1800.png?v=1653032311" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aee43769-ed34-4e66-add0-dcae9d9139d3_0_1800x1800.webp?v=1665508957" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/61WH4XAOPpL._SL1000_-min_1800x1800.jpg?v=1647594539" alt="" /></div>

</div>

<h2 className='middleheading'>EXPLORE OUR COLLECTION</h2>
    <p className='middleParagraf' >For Beautiful Homes!</p>

    <div className='FourImage'>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aeef02ca-c011-479a-ae27-b396185f868c_1800x1800.webp?v=1665833549" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/1-min_3b65fa82-e147-4280-80c9-56a0f5669032_0_1800x1800.png?v=1653032311" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aee43769-ed34-4e66-add0-dcae9d9139d3_0_1800x1800.webp?v=1665508957" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/61WH4XAOPpL._SL1000_-min_1800x1800.jpg?v=1647594539" alt="" /></div>
</div>

<h2 className='middleheading'>NEW ARRIVALS</h2>
    <p className='middleParagraf' >Shop our new arrivals</p>


    <div className='fourBytwoImg'>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aeef02ca-c011-479a-ae27-b396185f868c_1800x1800.webp?v=1665833549" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/1-min_3b65fa82-e147-4280-80c9-56a0f5669032_0_1800x1800.png?v=1653032311" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_aee43769-ed34-4e66-add0-dcae9d9139d3_0_1800x1800.webp?v=1665508957" alt="" /></div>
    <div><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/products/61WH4XAOPpL._SL1000_-min_1800x1800.jpg?v=1647594539" alt="" /></div>
</div>

<h2 className='middleheading'>NEW ARRIVALS</h2>

<div className='FourImageFlexAchivments to'>
    <div className='imgOffourflexAchivment'><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/brand-min.png" alt="" /></div>
    <div className='imgOffourflexAchivment'><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/Global-Business-Awards-2020-Logo-No-Year-1_f970de99-811d-405c-95cf-65018f57ae22_300x.png" alt="" /></div>
    <div className='imgOffourflexAchivment'><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/startup.png" alt="" /></div>
    <div className='imgOffourflexAchivment'><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/workplace-min_d1560bf3-b47f-48e0-afc2-fdae71cd8af9.png" alt="" /></div>

</div>

<h2 className='middleheading'>PRESS RELEASE</h2>

<div className='FourImageFlexAchivments'>
    <div className='imgOffourflexAchivment'><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/unnamed_200x.png" alt="" /></div>
    <div className='imgOffourflexAchivment'><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/71-7hPBV-lL_200x.png" alt="" /></div>
    <div className='imgOffourflexAchivment'><img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/logo_200x.webp" alt="" /></div>
    <div className='imgOffourflexAchivment'>
        <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/zee5-is-indias-number-one-ott-ap-1200x900_200x.webp" alt="" />
    </div>

    <div className='imgOffourflexAchivment'>
        <img src="https://cdn.shopify.com/s/files/1/0617/5549/0489/files/512x512_200x.webp" alt="" />
    </div>

</div>


  </div>



       
       </DIV>
       </>
    )
}

export default Home

const DIV=styled.div`
img{
    width: 100%;
}

.your-app {
  .rsis-image {
    background-size: 20%;
    position: relative;
  }
}

p{
    font-size: smaller;
}
.slide{
    width: 100%;
}
.midBody{
    width: 90%;
    /* border: 1px solid red; */
    margin: auto;
    
    
}
.firstTwoImage{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
   gap: 10px;
   margin-top: 15px;
}
.item1{
    grid-row: 1/3;
    grid-column: 1/ span 2;
    /* border: 1px solid green; */
}
.item4{
    grid-column: 3/ span 4;
}
.middleheading,.middleParagraf{
text-align: center;
}
.FourImage{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
    margin-top: 15px;
}
.fourBytwoImg{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 15px;
}
.FourImageFlexAchivments{
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
}
.imgOffourflexAchivment{
width: 12rem;
}
@media screen and (max-width:450px) {
    .midBody{
        width: 99%;
    }
    /* .firstTwoImage{
        width: 100%;
    display: grid;
    grid-template-columns: repeat(1,1fr);
   
   margin-top: 15px;
    } */
    .FourImage,.to{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    .FourImageFlexAchivments{
        display: flex;
    }
    .imgOffourflexAchivment{
width: 4rem;
}

}

`


