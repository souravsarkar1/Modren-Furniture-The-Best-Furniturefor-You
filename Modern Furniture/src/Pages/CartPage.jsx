import React, { useState, useEffect } from "react";
import {
  Container,
  Text,
  Box,
  Flex,
  Button,
  Input,
  useBreakpointValue,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useNavigate  , Link} from "react-router-dom";
import axios from "axios";
import CartCard from "../Component/CartCard";
export default function CartPage() {
  const navigate = useNavigate();
  const [CartData, setCartData] = useState([]);
  const [cartTotal, SetCartTotal] = useState(0);
  const [cartDicount, setCartDiscount] = useState(0);
  const [saveYour, setSaveyour] = useState(0);
  const [change, setChange] = useState(true);

  const handleInc = (id, quantity) => {
    setChange(!change);
    axios
      .patch(`http://localhost:8080/cart/${id}`, { quantity: quantity + 1 })
      .then(() => setChange(!change));
  };
  const handleDec = (id, quantity) => {
    axios
      .patch(`http://localhost:8080/cart/${id}`, { quantity: quantity - 1 })
      .then(() => setChange(!change));
  };
  const hndleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/cart/${id}`)
      .then(() => setChange(!change));
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Product Removed From Cart</AlertTitle>
    </Alert>;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cart`)
      .then((res) => setCartData(res.data));
  }, [change]);

  const flexDirection = useBreakpointValue({
    base: "column",
    sm: "column",
    md: "column",
    lg: "column",
    xl: "row",
    xxl: "row",
  });
  const margiOnTop = useBreakpointValue({
    base: "0px auto auto auto",
    sm: "0px auto auto auto",
    md: "0px auto auto auto",
    lg: "58px auto auto auto",
    xl: "58px auto auto auto",
    xxl: "58px auto auto auto",
  });

  const widhtToFlex = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "100%",
    lg: "90%",
    xl: "60%",
    xxl: "60%",
  });

  const widhtToFlex2 = useBreakpointValue({
    base: "1000%",
    sm: "100%",
    md: "100%",
    lg: "90%",
    xl: "35%",
    xxl: "35%",
  });

  useEffect(() => {
    let cartprice = 0;
    let cartmrp = 0;

    CartData.map((ele) => {
      cartprice += ele.price * ele.quantity;
      cartmrp += ele.mrp * ele.quantity;
    });
    let carttotaldicount = Math.floor(((cartmrp - cartprice) / cartmrp) * 100);
    SetCartTotal(cartprice);
    setSaveyour(cartmrp - cartprice);
    setCartDiscount(carttotaldicount);
  }, [CartData]);

  const Coupan = Math.floor(Math.random() * 99999);

  return (
    <div>
      <Flex justify="space-between" flexDir={flexDirection}>
        <Container
          maxW={widhtToFlex}
          mt="10"
          boxShadow={
            "box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
          }
        >
          <Flex
            p="10px"
            align="center"
            justify="space-between"
            w="100%"
            m="20px auto"
            border="1px solid gray"
          >
            <Text fontWeight={500} fontSize="20px">
              You have {CartData.length} Items In your Cart
            </Text>
            <Text fontWeight={500} fontSize="20px" color="blue.700">
              Total Amount: {`₹${cartTotal}.00`}
            </Text>
            <Text fontWeight={500} fontSize="20px">
              Continue Shopping
            </Text>
          </Flex>
          <div className="Cart-Dev">
            {CartData.length > 0 &&
              CartData.map((el) => {
                return (
                  <CartCard
                    {...el}
                    key={el.id}
                    handleDec={handleDec}
                    handleInc={handleInc}
                    hndleDelete={hndleDelete}
                  />
                );
              })}
          </div>
        </Container>

        {/* Chechout Countainer */}
        <Box
          w={widhtToFlex2}
          m={margiOnTop}
          padding="0px 20px 20px 20px"
          borderRadius="20px"
          overflow={"hidden"}
        >
          <Box
            borderRadius="15px"
            m="auto"
            w="100%"
            p="2%"
            border="1px solid gray"
          >
            <Flex>
              {" "}
              <Box w="50%">
                <Text fontWeight="500">Total Amount: {`₹${cartTotal}.00`}</Text>
                <Text fontWeight="500">Save Your: {`₹${saveYour}.00`}</Text>
                <Text fontWeight="500">
                  Total Discount: {`${cartDicount}%`}
                </Text>
              </Box>
              <Box w="50%">
                <Input placeholder="COUPAN" size="sm" />
                <Text fontWeight="500">
                  Use Coupan: {`MASAI_B25-${Coupan}`}
                </Text>
              </Box>
            </Flex>
            <Link to={'/checkout'}>
            <Button
              w="100%"
              m="auto"
              bgColor="purple.800"
              color="white"
              cursor="pointer"
              borderRadius="0px"
              zIndex={-1}
              _hover={{ bgColor: "white", color: "purple.800" }}
             // onClick={() => navigate("/checkout")}
            >
              CHECKOUT
            </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
