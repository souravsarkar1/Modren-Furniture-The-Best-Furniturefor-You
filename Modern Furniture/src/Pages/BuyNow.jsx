import React, { useState, useEffect } from "react";
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
import axios from "axios";

export default function BuyNow() {
  const isAuth = useSelector((st) => st.authReducer.isAuth);
  //const buyNowData = JSON.parse(localStorage.getItem('buy-now-Items')) || [];
  //const data = buyNowData[buyNowData.length-1]
  const [cartData, setCardData] = useState([]);
  const [cartTotal, SetCartTotal] = useState(0);
  const [cartDicount, setCartDiscount] = useState(0);
  const [saveYour, setSaveyour] = useState(0);

  useEffect(() => {
    const DAta = axios
      .get(`http://localhost:8080/cart`)
      .then((res) => setCardData(res.data));
  }, []);
  console.log("data", cartData);
  useEffect(() => {
    let cartprice = 0;
    let cartmrp = 0;

    cartData.map((ele) => {
      cartprice += ele.price * ele.quantity;
      cartmrp += ele.mrp * ele.quantity;
    });
    let carttotaldicount = Math.floor(((cartmrp - cartprice) / cartmrp) * 100);
    SetCartTotal(cartprice);
    setSaveyour(cartmrp - cartprice);
    setCartDiscount(carttotaldicount);
  }, [cartData]);
  const data = [
    {
      img: "https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_3579a2a7-d150-4b70-8386-90ba042f70da_1800x1800.webp?v=1665507800",
      title: "abcd",
      color: "red",
      seeling_price: 3434,
      quantity: 3,
    },
  ];

  const navigate = useNavigate();
  //const {addressFlag,setAddressFlag} = useContext(isAuth);
  const [payment, setPayment] = useState({
    cardNumber: "",
    name: "",
    expire: "",
    pin: "",
  });
  //const {addressFlag , setAddressFlag} = useContext(Authcontext);
  //console.log(addressFlag);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    //const val = type === "number" ? Number(value) : value;
    console.log(e.target.value);
    const val = type === "number" ? Number(value) : value;
    setPayment({ ...payment, [name]: val });
  };
  const setAddressFlag = () => {
    return !isAuth;
  };
  const { cardNumber, name, expire, pin } = payment;
  console.log(isAuth);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAuth) {
      alert("fixed address");
      navigate("/address"); // useNavigate to navigate programmatically
    } else {
      setAddressFlag(false);
      console.log("Ratna");
      setPayment({
        cardNumber: "",
        name: "",
        expire: "",
        pin: "",
      });
      alert("Your Order is Successfull");
    }
  };
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
                    <Link to="/address">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        <Button
                          w="100%"
                          bgColor="black"
                          color="white"
                          border={"1px solid black"}
                          borderRadius={"none"}
                          _hover={{
                            bgColor: "white",
                            color: "black",
                            border: "1px solid black",
                          }}
                        >
                          Set Your Address First
                        </Button>
                      </MDBTypography>
                    </Link>
                    {cartData.length > 0 &&
                      cartData.map((ele) => {
                        return (
                          <div
                            className="d-flex align-items-center mb-5"
                            style={{
                              border: "1px solid #D8D1D1",
                              padding: "15px",
                            }}
                          >
                            <div className="flex-shrink-0">
                              <MDBCardImage
                                src={ele.images[0]}
                                fluid
                                style={{ width: "150px" }}
                                alt="Generic placeholder image"
                              />
                            </div>

                            <div className="flex-grow-1 ms-3">
                              <a href="#!" className="float-end text-black">
                                <MDBIcon fas icon="times" />
                              </a>
                              <MDBTypography
                                tag="h6"
                                className="text-justify fw-bold text-uppercase"
                              >
                                {ele.name}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                style={{ color: "#9e9e9e" }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    color: "black",
                                    gap: "10px",
                                    alignItems: "center",
                                  }}
                                >
                                  <MDBTypography
                                    tag="h6"
                                    className="text-justify fw-bold text-uppercase"
                                  >
                                    Colors :
                                  </MDBTypography>
                                  <div
                                    style={{
                                      width: "60px",
                                      border: "1px solid black",
                                      padding: "3px",
                                    }}
                                  >
                                    <img
                                      width="100%"
                                      src={ele.images[0]}
                                      alt="product_pic"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      width: "60px",
                                      border: "1px solid black",
                                      padding: "3px",
                                    }}
                                  >
                                    <img
                                      width="100%"
                                      src={ele.images[1]}
                                      alt="product_pic"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      width: "60px",

                                      border: "1px solid black",
                                      padding: "3px",
                                    }}
                                  >
                                    <img
                                      width="100%"
                                      src={ele.images[2]}
                                      alt="product_pic"
                                    />
                                  </div>
                                </div>
                              </MDBTypography>

                              <div className="d-flex align-items-center">
                                <p className="fw-bold mb-0 me-5 pe-3">
                                  ₹ {ele.price}
                                </p>
                                <p className="fw-bold mb-0 me-5 pe-3">
                                  {`QTY: ${ele.quantity}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

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
                        {`Total Payble Amount: ₹${cartTotal}`}
                      </MDBTypography>
                    </div>
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
                        name="cardNumber"
                        onChange={handleChange}
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                        value={name}
                        name="name"
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
                            name="expire"
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
                        <Link to="/">Back To Shopping</Link>
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
