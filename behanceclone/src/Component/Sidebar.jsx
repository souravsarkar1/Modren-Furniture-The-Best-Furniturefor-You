import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Box, Heading } from "@chakra-ui/react";
import styles from "../styles/Sidebar.module.css";
function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const initialOrder = searchParams.get("order");
  const initialStack = searchParams.get("stack");

  const [category, setCategory] = useState(initialCategory || []);
  const [order, setOrder] = useState(initialOrder || "");
  const [stack, setStack] = useState(initialStack || "");

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

  const mannageStack = (e) => {
    const value = e.target.value;
    setStack(value);
  };
  useEffect(() => {
    let params = {
      category,
      stack,
    };

    order && (params.order = order);
    setSearchParams(params);
  }, [stack, category, order]);

  return (
    <DIV>
      <Heading size="sm">Filter by Availablity</Heading>
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

      <Heading size="sm">Filter by Category</Heading>
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

      <Heading size="sm">Sort by Price</Heading>

      <Box onChange={handleOrder}>
        <input
          type="radio"
          name="order"
          defaultChecked={order === "asc"}
          value={"asc"}
        />
        <label>Ascending</label>
      </Box>
      <Box onChange={handleOrder}>
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </Box>
    </DIV>
  );
}

export default SideBar;

const DIV = styled.div`
  width: 100%;
  div {
    width: 50%;
    margin: auto;
    text-align: justify;
  }
`;
