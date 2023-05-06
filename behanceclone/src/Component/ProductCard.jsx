import React from "react";

import styled from "styled-components";
// import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
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
      <Box className="outer">
        <img src={images[0]} alt={name} />
        <Box className="inner">
          <img src={images[1]} alt={name} />
        </Box>
      </Box>
      <Flex className="fun_btns">
        <Button className="functional_BTN">
          <HiOutlineShoppingCart />
        </Button>
        <Button className="functional_BTN">
          <AiOutlineHeart />
        </Button>
        <Button className="functional_BTN">
          <AiOutlineZoomIn />
        </Button>
      </Flex>
      <Heading size="sm">{name}</Heading>
      <Text>
        Price: {price} -- MRP: <strike>{mrp}</strike> ID: {id}
      </Text>
      <Text>Category:{category}</Text>
      <Text>{instack ? "in stack" : "out of stack"}</Text>
      {/* <Text>{rating}</Text> */}
      <Flex w="100%" flexDir="flex-end">
        {Array(Math.floor(rating))
          .fill()
          .map((_, i) => (
            // <Text>🌟</Text>
            // <Text key={i}>&#9733;</Text>
            <Text>
              <AiFillStar />
            </Text>
          ))}
      </Flex>
    </DIV>
  );
}

export default ProductCard;

const DIV = styled.div`
  padding: 20px;
  .outer {
    width: 100%;
    position: relative;
    z-index: 10;
  }
  .outer img,
  inner img {
    width: 100%;
  }
  .inner {
    position: absolute;
    top: 0px;
    left: 0px;
    display: none;
  }
  .outer:hover .inner {
    display: block;
  }
  .fun_btns {
    justify-content: center;
    position: relative;
  }
  .functional_BTN {
    background-color: black;
    border-radius: 50%;
    color: white;
  }
  .functional_BTN:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
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
