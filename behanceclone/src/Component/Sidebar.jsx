import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import styles from "../styles/Sidebar.module.css";
function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  //get params from url
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const initialStack = searchParams.get("stack");
  const initialRate = searchParams.get("rate");

  // set initial state to params to check the boxes
  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [stack, setStack] = useState(initialStack || "");
  const [rate, setRate] = useState(initialRate || "");

  // set mein and max values
  const [min, setMin] = useState(500);
  const [max, setMax] = useState(10000);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele, i) => ele !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleOrder = (e) => {
    const value = e.target.value;
    setOrder(value);
  };
  const handleRate = (e) => {
    const value = e.target.value;
    setRate(value);
  };

  const mannageStack = (e) => {
    const value = e.target.value;
    setStack(value);
  };
  useEffect(() => {
    let params = {
      category,
    };

    order && (params.order = order);
    stack && (params.stack = stack);
    rate && (params.rate = rate);
    setSearchParams(params);
  }, [stack, category, order, rate]);

  const handlePriceRange = (e) => {
    setMax(e.target.value);
  };
  return (
    <Box className={styles.sliderCont}>
      {/* Availablity Filters */}
      <Box>
        <Heading size="md">Filter by Availablity</Heading>
        <Box onChange={mannageStack}>
          <input
            type="radio"
            name="stack"
            defaultChecked={stack === "in-stack"}
            value={"in-stack"}
          />
          <label>In Stack</label>
        </Box>
        <Box onChange={mannageStack}>
          <input
            type="radio"
            name="stack"
            value={"out-of-stack"}
            defaultChecked={stack === "out-of-stack"}
          />
          <label>Out of Stack</label>
        </Box>
      </Box>
      {/* inputs */}
      <Box className={styles.SliderCont}>
        <Heading mb="10px" size="md">
          Select Price Range
        </Heading>
        <Box w="100%" onChange={handlePriceRange}>
          <input min="0" value={max} max="200000" step="100" type="range" />
        </Box>
        <Flex m="0px" p="0px" w="100%" fontWeight={500} justify="space-between">
          <Text m="0px" p="0px">{`₹${min}`}</Text>
          <Text m="0px" p="0px">{`₹${max}`}</Text>
        </Flex>
        <Flex m="0px" p="0px" w="100%" fontWeight={500} justify="space-between">
          <Text m="0px" p="0px 5px">
            Min
          </Text>
          <Text m="0px" p="0px 5px">
            Max
          </Text>
        </Flex>
        <Flex
          w="100%"
          mt="10px"
          justify="space-between"
          className={styles.rangeSlider}
        >
          <input type="text" value={min} />
          <input type="text" onChange={handlePriceRange} value={max} />
        </Flex>
      </Box>
      {/* rating sort */}
      <Box>
        <Heading size="md">Sort By Rating</Heading>
        <Flex align="center" gap="5px" onChange={handleRate}>
          <input
            type="radio"
            name="rate"
            defaultChecked={rate === "5-star"}
            value={"5-star"}
          />
          <label>
            <Flex>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </Flex>
          </label>
        </Flex>
        <Flex align="center" gap="5px" onChange={handleRate}>
          <input
            type="radio"
            name="rate"
            defaultChecked={rate === "4-star"}
            value={"4-star"}
          />
          <label>
            <Flex>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </Flex>
          </label>
        </Flex>
        <Flex align="center" gap="5px" onChange={handleRate}>
          <input
            type="radio"
            name="rate"
            defaultChecked={rate === "3-star"}
            value={"3-star"}
          />
          <label>
            <Flex>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </Flex>
          </label>
        </Flex>
        <Flex align="center" gap="5px" onChange={handleRate}>
          <input
            type="radio"
            name="rate"
            defaultChecked={rate === "2-star"}
            value={"2-star"}
          />
          <label>
            <Flex>
              <AiFillStar />
              <AiFillStar />
            </Flex>
          </label>
        </Flex>
        <Flex align="center" gap="5px" onChange={handleRate}>
          <input
            type="radio"
            name="rate"
            defaultChecked={rate === "1-star"}
            value={"1-star"}
          />
          <label>
            <Flex>
              <AiFillStar />
            </Flex>
          </label>
        </Flex>
      </Box>
      {/* Category filters */}
      <Box>
        <Heading size="md">Filter by Category</Heading>
        <Box>
          <input
            type="checkbox"
            checked={category.includes("sofa")}
            value={"sofa"}
            onChange={handleCategory}
          />
          <label>Sofa</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            checked={category.includes("bed-with-storage")}
            value={"bed-with-storage"}
            onChange={handleCategory}
          />
          <label>Bed With Storage</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            checked={category.includes("sofa-cum-beds")}
            value={"sofa-cum-beds"}
            onChange={handleCategory}
          />
          <label>Sofa Cum Bed</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            checked={category.includes("high-back-chairs")}
            value={"high-back-chairs"}
            onChange={handleCategory}
          />
          <label>High Back Chairs</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            checked={category.includes("accent-chairs")}
            value={"accent-chairs"}
            onChange={handleCategory}
          />
          <label>Accent Chairs</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            checked={category.includes("loungers")}
            value={"loungers"}
            onChange={handleCategory}
          />
          <label>Loungers</label>
        </Box>
        <Box>
          <input
            type="checkbox"
            checked={category.includes("kids-bed")}
            value={"kids-bed"}
            onChange={handleCategory}
          />
          <label>Kids Bed</label>
        </Box>
      </Box>
      {/* Price sorting  */}
      <Box>
        <Heading size="md">Sort by Price</Heading>
        <Box onChange={handleOrder}>
          <input
            type="radio"
            name="order"
            defaultChecked={order === "asc"}
            value={"asc"}
          />
          <label>Low To High</label>
        </Box>
        <Box onChange={handleOrder}>
          <input
            type="radio"
            name="order"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
          <label>High To Low</label>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
