import React, { useState, useEffect } from "react";
import { Container, Text, Box, Flex, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartCard from "../Component/CartCard";
export default function CartPage() {
  const [CartData, setCartData] = useState([]);
  const [cartTotal, SetCartTotal] = useState(0);
  const [cartDicount, setCartDiscount] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cart`)
      .then((res) => setCartData(res.data));
  }, []);

  useEffect(() => {
    let cartprice = 0;
    let cartmrp = 0;

    CartData.map((ele) => {
      cartprice += ele.price * ele.quantity;
      cartmrp += ele.mrp * ele.quantity;
    });
    let carttotaldicount = Math.floor(((cartmrp - cartprice) / cartmrp) * 100);
    SetCartTotal(cartprice);
    setCartDiscount(carttotaldicount);
  }, [CartData]);

  return (
    <div>
      <Flex justify="space-between">
        <Container maxW="60%" mt="10">
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
              Total Amount: {`${cartTotal}.00`}
            </Text>
            <Text fontWeight={500} fontSize="20px">
              Continue Shopping
            </Text>
          </Flex>
          <div className="Cart-Dev">
            {CartData.length > 0 &&
              CartData.map((el) => {
                return <CartCard {...el} key={el.id} />;
              })}
          </div>
        </Container>
        <Box w="35%" borderRadius="20px">
          <Box w="100%" m="58px 10px 20px 10px" border="1px solid gray">
           <Link to={'/buynow'}>
           <Button w="90%" m="auto" zIndex={-1}>
           CHECKOUT
         </Button></Link>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
