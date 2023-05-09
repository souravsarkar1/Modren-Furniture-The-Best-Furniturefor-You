import React from "react";
import Sidebar from "../Component/Sidebar";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import ProductList from "../Component/ProductList";

function Products() {
  const breackpointsSideBar = useBreakpointValue({
    base: "50%",
    sm: "40%",
    md: "30%",
    lg: "25%",
    xl: "20%",
    xxl: "15%",
  });
  const breackpointsProductList = useBreakpointValue({
    base: "50%",
    sm: "60%",
    md: "70%",
    lg: "75%",
    xl: "80%",
    xxl: "85%",
  });
  return (
    <div>
      <Flex>
        <Box w={breackpointsSideBar}>
          <Sidebar />
        </Box>
        <Box w={breackpointsProductList}>
          <ProductList />
        </Box>
      </Flex>
    </div>
  );
}

export default Products;
