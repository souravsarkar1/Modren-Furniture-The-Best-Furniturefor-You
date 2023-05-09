import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductList.module.css";
import {
  Grid,
  Box,
  Flex,
  Text,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
function ProductList() {
  const [searchParams] = useSearchParams();
  const [TotalProducts, setTotlaProducts] = useState(0);
  const products = useSelector((store) => store.productReducer.products);
  const location = useLocation();

  const dispatch = useDispatch();

  let obj = {
    params: {
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj)).then((res) => setTotlaProducts(res.length));
  }, [location.search]);

  const breackpointsForGrid = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)",
    xxl: "repeat(3, 1fr)",
  });

  return (
    <Box w="100%" backgroundColor="blackAlpha.50" textAlign="justify">
      <Flex className={styles.ProductListWrapper}>
        <Heading size="md">All Products</Heading>
        <Text> Showing: {TotalProducts}</Text>
      </Flex>
      <Grid gap="20px" p="20px" templateColumns={breackpointsForGrid}>
        {products.length > 0 &&
          products.map((ele, i) => <ProductCard key={i} {...ele} />)}
      </Grid>
    </Box>
  );
}

export default ProductList;
