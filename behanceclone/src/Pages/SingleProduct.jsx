import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../Redux/ProductReducer/action";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  useBreakpointValue,
  AlertIcon,
  useDisclosure,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Alert,
} from "@chakra-ui/react";
import { AiFillStar, AiOutlineHeart, AiOutlineMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { TbBrandTelegram, TbTruckDelivery } from "react-icons/tb";
import moment from "moment";
import ReactImageMagnify from "react-image-magnify";
import { BsFire } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SingleProduct() {
  const navigate = useNavigate();
  const { pid } = useParams();
  const dispatch = useDispatch();
  const [product, setProducts] = useState({});
  const [cartArr, setCartArr] = useState([]);
  const [change, setchange] = useState(true);
  const [bigImage, setBigImage] = useState("");
  let cartItes = useSelector((store) => store.cartReducer.cart);
  console.log(cartItes);

  const breackpointsGridView = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "column",
    lg: "row",
    xl: "row",
    xxl: "row",
  });
  const breackpointsGridEle = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "100%",
    lg: "50%",
    xl: "50%",
    xxl: "50%",
  });
  const breackToHideoverFlow = useBreakpointValue({
    base: "hidden",
    sm: "hidden",
    md: "hidden",
    lg: "",
    xl: "",
    xxl: "",
  });
  useEffect(() => {
    dispatch(getSingleProducts(pid)).then((res) => setProducts(res));
  }, [pid]);
  const {
    id,
    name,
    price,
    rating,
    mrp,
    category,
    images,
    description,
    instack,
  } = product;

  useEffect(() => {
    let image = images ? images[0] : "";
    setBigImage(image);
  }, [images]);

  useEffect(() => {
    setCartArr(cartArr);
  }, [change]);

  //ADD_PRODUCT_TOCART // ADD_PRODUCT_TOWish
  const ADD_PRODUCT_TOCART = () => {
    const newProduct = {
      id,
      name,
      price,
      mrp,
      images,
      rating,
      description,
      instack,
      quantity: 1,
    };

    axios
      .post(`http://localhost:8080/cart`, newProduct)
      .then(() => toast.success("Product Added To Cart"))
      .catch(() => toast.warning("Product Already In Cart"));
  };

  const ADD_PRODUCT_TOWish = () => {
    const newProduct = {
      id,
      name,
      price,
      mrp,
      images,
      rating,
      description,
      instack,
    };
    axios
      .post(`http://localhost:8080/wishlist`, newProduct)
      .then(() => toast.success("Product Added To Wishlist"))
      .catch(() => toast.warning("Product Already In Wishlistart"));
  };

  let color;
  let avalability;
  let sold;
  if (instack > 2) {
    avalability = `only ${instack} left`;
    color = "green";
    sold = instack;
  } else if (instack <= 2 && instack > 0) {
    avalability = `only ${instack} left hurry`;
    color = "red";
    sold = instack;
  } else {
    avalability = `out of stack`;
    color = "red";
    sold = 1;
  }

  const save = mrp - price;
  const discount = Math.ceil((save / mrp) * 100);

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToProductPage = () => {
    navigate("/products");
  };

  return (
    <>
      <DIV>
        <Box bgColor="blackAlpha.100" fontWeight="500" p="5px">
          <Flex align="center">
            <Text
              onClick={redirectToHome}
              display="inline-block"
              cursor="pointer"
            >
              Home|
            </Text>
            <Text
              onClick={redirectToProductPage}
              display="inline-block"
              cursor="pointer"
            >
              Products|
            </Text>
            <Text
              display={useBreakpointValue({
                base: "none",
                sm: "none",
                md: "none",
                lg: "inline-block",
                xl: "inline-block",
                xxl: "inline-block",
              })}
            >
              {name}
            </Text>
          </Flex>
        </Box>
        <Flex flexDir={breackpointsGridView} gap="20px" letterSpacing="-0.6px">
          <Flex w={breackpointsGridEle} className="magnifyImageCont">
            <Flex flexDir="column" gap="10px">
              <Box className="sideImage" onClick={() => setBigImage(images[0])}>
                <img
                  width="60px"
                  src={images ? images[0] : ""}
                  alt="product_pic"
                />
              </Box>
              <Box className="sideImage" onClick={() => setBigImage(images[1])}>
                <img
                  width="60px"
                  src={images ? images[1] : ""}
                  alt="product_pic"
                />
              </Box>
              <Box className="sideImage" onClick={() => setBigImage(images[2])}>
                <img
                  width="60px"
                  src={images ? images[2] : ""}
                  alt="product_pic"
                />
              </Box>
            </Flex>
            <Box overflow={breackToHideoverFlow}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: bigImage,
                  },
                  largeImage: {
                    src: bigImage,
                    width: 700,
                    height: 2000,
                  },
                }}
              />
            </Box>
          </Flex>
          <Box w={breackpointsGridEle} textAlign="justify" p="20px">
            <Text fontSize="25px" fontWeight="600" pb="10px">
              {name}
            </Text>
            <Flex width="50%" gap="20px">
              <Flex>
                {Array(Math.floor(rating ? Math.floor(rating) : ""))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>
                      <AiFillStar />
                    </Text>
                  ))}
              </Flex>
              <Box backgroundColor={color}>
                <Text color="white" p="0px 10px" m="0px" fontWeight="500">
                  {avalability}
                </Text>
              </Box>
            </Flex>
            <Flex p="2px 5px" fontWeight="500">
              <Text>
                <BsFire />
              </Text>
              <Text> {sold} sold in last 12 hours</Text>
            </Flex>
            <Box>
              <Flex p={"0px"} gap="10px" align="baseline" m="0px">
                <Text m={0} p={0} fontSize="25px" fontWeight="500">
                  {`Rs.${price}.00`}
                </Text>
                <Text color="pink.400" fontSize="20px" fontWeight="500">
                  <strike>{`Rs.${mrp}.00`}</strike>
                </Text>
                <Text>{`| save Rs.${save}.00`}</Text>
                <Text color="red.500">{`(${discount}%)`}</Text>
              </Flex>
            </Box>
            <Box>{description}</Box>
            <Box fontWeight="500" m="15px 0px">
              <Flex>
                <Text>SIZE:1 SEATER</Text>
                <Text _hover={{ color: "blue.600" }}>
                  AVAILABLE COLORS & FABRICS
                </Text>
              </Flex>
              <Flex gap="10px">
                <Button border="1px solid black" borderRadius="none" size="xs">
                  1 SEATER
                </Button>
                <Button borderRadius="none" size="xs">
                  3 SEATER
                </Button>
                <Button borderRadius="none" size="xs">
                  3+1 SEATER
                </Button>
                <Button borderRadius="none" size="xs">
                  3+1+1 SEATER
                </Button>
              </Flex>
            </Box>
            <Box m="15px 0px">
              <Text>Available Colors</Text>
              <Flex>
                <Box w="60px" border="1px solid gray" p="2px">
                  <img
                    onClick={() => setBigImage(images[0])}
                    width="100%"
                    src={images ? images[0] : ""}
                    alt=""
                  />
                </Box>
                <Box w="60px" border="1px solid gray" p="2px">
                  <img
                    onClick={() => setBigImage(images[1])}
                    width="100%"
                    src={images ? images[1] : ""}
                    alt=""
                  />
                </Box>
                <Box w="60px" border="1px solid gray" p="2px">
                  <img
                    onClick={() => setBigImage(images[2])}
                    width="100%"
                    src={images ? images[2] : ""}
                    alt=""
                  />
                </Box>
              </Flex>
            </Box>
            <Flex gap="10px" align="center">
              <Flex cursor="pointer" onClick={ADD_PRODUCT_TOWish}>
                <AiOutlineHeart size="1.3rem" />
                <Text>Add To WishList</Text>
              </Flex>
              <Flex>
                <TbBrandTelegram size="1.3rem" />
                <Text>Delovery & Returns</Text>
              </Flex>
              <Flex>
                <AiOutlineMail size="1.3rem" />
                <Text>Enquiry</Text>
              </Flex>
            </Flex>
            <Box w="100%" m="auto" onClick={ADD_PRODUCT_TOCART}>
              <Button className="AddToCartBTN">ADD TO CART</Button>
            </Box>

            <Box w="100%" m="auto">
              <Button className="BUYNOWBTN">BUY IT NOW</Button>
            </Box>

            <Flex>
              <BiTimeFive size="1.3rem" />
              <Text>
                {`Estimated delivery between ${moment().format(
                  "dddd  DD MMMM"
                )} and  ${moment().add(7, "days").format("dddd  DD MMMM")}.`}
              </Text>
            </Flex>
            <Flex align="center">
              <TbTruckDelivery size="1.3rem" />
              <Text>Tax included. Shipping calculated at checkout.</Text>
            </Flex>
          </Box>
        </Flex>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ borderRadius: 0, boxShadow: "none" }}
        />
      </DIV>
    </>
  );
}

export default SingleProduct;

const DIV = styled.div`
  .magnifyImageCont {
    float: right;
    height=50%;
    padding:20px;
    z-index:10;
  }
  .sideImage {
    width: 70px;
    padding: 5px;
    border: 1px solid gray;
    margin-right: 5px;
  }
  .AddToCartBTN{
    width:100%;
    background-color:black;
    color:white;
    margin:10px;
    border-radius:0px;
  }
 .AddToCartBTN:hover{
  background-color: white;
    color: black;
    border: 1px solid black;
  }
  .BUYNOWBTN{
    width:100%;
    background-color:purple;
    color:white;
    margin:10px;
    border-radius:0px;
  }
 .BUYNOWBTN:hover{
  background-color: white;
    color: purple;
    border: 1px solid purple;
  }
`;
