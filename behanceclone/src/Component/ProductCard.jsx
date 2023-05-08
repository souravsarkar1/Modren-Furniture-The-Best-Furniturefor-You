import React from "react";

import styled from "styled-components";
//import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {  Heading, Text, Button, Flex } from "@chakra-ui/react";
function ProductCard({
  id,
  name,
  price,
  mrp,
  images,
  rating,
  category,
  description,
  instack,
}) {
  return (
    <DIV>
      <img width="50" src={images[0]} alt={name} />
      <Flex justify="center">
        <Button>
          <HiOutlineShoppingCart />
        </Button>
        <Button>
          <AiOutlineHeart />
        </Button>
        <Button>
          <AiOutlineZoomIn />
        </Button>
      </Flex>
      <Heading size="sm">{name}</Heading>
      <Text>
        Price: {price} -- MRP: <strike>{mrp}</strike> ID: {id}
      </Text>
      <Text>Category:{category}</Text>
      <Text>{instack ? "in stack" : "out of stack"}</Text>
      <Text>{rating}</Text>
    </DIV>
  );
}

export default ProductCard;

const DIV = styled.div`
  padding: 20px;

  img {
    width: 100%;
  }
  button {
    padding: 5px 10px;
    font-size: large;
    margin: 10px;
    border: none;
    border-radius: 5px;
  }
`;
