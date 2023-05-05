import React from "react";
import Sidebar from "../Component/Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import ProductList from "../Component/ProductList";
function Products() {
  return (
    <div>
      <Flex>
        <Box w="20%">
          <Sidebar />
        </Box>
        <Box w="80%">
          <ProductList />
        </Box>
      </Flex>
    </div>
  );
}

export default Products;
