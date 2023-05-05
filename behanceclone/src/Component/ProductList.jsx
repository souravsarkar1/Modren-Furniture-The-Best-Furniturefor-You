import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
function ProductList() {
  const [searchParams] = useSearchParams();
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
    dispatch(getProducts(obj));
  }, [location.search]);

  return (
    <DIV>
      {products.length > 0 &&
        products.map((ele, i) => <ProductCard key={i} {...ele} />)}
    </DIV>
  );
}

export default ProductList;

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
