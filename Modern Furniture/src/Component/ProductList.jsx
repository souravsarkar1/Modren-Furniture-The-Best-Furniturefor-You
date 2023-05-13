import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductList.module.css";
import Loader from "./Loader";
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
  const rate = searchParams.get("rate");
  const stack = searchParams.get("stack");
  let initialStack;
  if (stack) {
    initialStack = stack == "in-satck" ? true : false;
  } else {
    initialStack = "";
  }
  const [avalablity, setAvailablity] = useState(initialStack);

  let products = useSelector((store) => store.productReducer.products);

  const isloading = useSelector((store) => store.productReducer.isLoading);

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
    let ans;
    if (stack && stack == "in-stack") {
      ans = true;
    } else if (stack && stack == "out-of-stack") {
      ans = false;
    }
    setAvailablity(() => ans);
    dispatch(getProducts(obj, avalablity)).then((res) =>
      setTotlaProducts(res.length)
    );
    // console.log("Product After Return ", prod);
  }, [location.search]);
  // setTotlaProducts(products.length);
  // console.log(product);

  if (rate && !stack) {
    let a = Number(rate[0]);
    let b = a + 1;
    products = products.filter((ele) => {
      return ele.rating >= a && ele.rating < b;
    });
    // setTotlaProducts(products.length);
  }
  //  else if( stack && !rate) {
  //   let a ;
  //        stack === "in-stack" ? a=true : a=false ;
  //         products = products.filter((ele) => {
  //           return ele.instack == a ;
  //   });
  const breackpointsForGrid = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(2, 1fr)",
    xl: "repeat(3, 1fr)",
    xxl: "repeat(3, 1fr)",
  });
  if (isloading) {
    return <Loader margin={200} />;
  }
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
