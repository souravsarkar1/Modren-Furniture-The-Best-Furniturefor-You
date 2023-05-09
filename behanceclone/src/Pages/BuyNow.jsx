import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
//import { Authcontext } from "../Authcontext/Authcontextprovider";


export default function BuyNow() {
    const isAuth = useSelector(st => st.authReducer.isAuth);
    const buyNowData = JSON.parse(localStorage.getItem('buy-now-Items')) || [];
   const data = buyNowData[buyNowData.length-1]
   const [quantity , setQunatity] = useState(1);
   const navigate = useNavigate();
   //const {addressFlag,setAddressFlag} = useContext(isAuth);
   const [payment, setPayment] = useState({
    cardNumber: '',
    name: '',
    expire: '',
    pin: ''
})
//const {addressFlag , setAddressFlag} = useContext(Authcontext);
//console.log(addressFlag);
const handleChange = (e) => {
    const { name, value, type } = e.target;
    //const val = type === "number" ? Number(value) : value;
    console.log(e.target.value);
    const val = type === "number" ? Number(value) : value;
    setPayment({ ...payment, [name]: val })
}
const setAddressFlag = ()=>{
    return !isAuth;
}
const { cardNumber, name, expire, pin } = payment;
console.log(isAuth);
const handleSubmit = (e) => {
  e.preventDefault();
    if(!isAuth) {
      alert('fixed address');
      navigate('/address'); // useNavigate to navigate programmatically
    } else {
      setAddressFlag(false);
      console.log('Ratna');
      setPayment({
        cardNumber: '',
        name: '',
        expire: '',
        pin: ''
      });
      alert('Your Order is Successfull');
    }
}
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src={data.img}
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="mb-5 pt-2 text-center fw-bold text-uppercase">
                         {data.title}
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Color: {data.color}
                        </MDBTypography>

                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">₹ {data.seeling_price}</p>

                          <div className="def-number-input number-input safari_only">
                            <button style={{padding : '10px' , margin :'3px' , border : '1px solid blue'}} onClick={()=>setQunatity(quantity+1)}>+</button>
                            <button disabled style={{padding : '10px' , margin :'3px' , border : '1px solid blue'}}>{quantity}</button>
                            <button disabled={quantity===1} style={{padding : '10px' , margin :'3px' , border : '1px solid blue'}} onClick={()=>setQunatity(quantity-1)}>-</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                      ₹  {Number(data.seeling_price)*quantity}
                      </MDBTypography>
                    </div>
                      <Link to='/address'><MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                     Set Your Address First
                    </MDBTypography></Link>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Card number"
                        type="number"
                        size="lg"
                        placeholder="1234 5678 9012 3457"
                        value={cardNumber}
                        name ='cardNumber'
                        onChange={handleChange}
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                        value={name}
                        name ='name'
                        onChange={handleChange}
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            placeholder="MM/YYYY"
                            value={expire}
                            name ='expire'
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Cvv"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            value={pin}
                            onChange={handleChange}
                            name="pin"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        <a href="#!"> obcaecati sapiente</a>.
                      </p>

                      <Button onClick={handleSubmit}>
                       Complete Your Payment And Order Now
                      </Button>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <Link to='/'>Back To Shopping</Link>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}