import React, { useState, useEffect } from "react";
import styles from "../styles/ProductCard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
function ProductCard({
  id,
  name,
  price,
  description,
  mrp,
  images,
  rating,
  instack,
}) {
  

  const save = mrp - price;
  const discount = Math.ceil((save / mrp) * 100);

  const navigate = useNavigate();
  let color;
  let avalability = ``;
  if (instack > 2) {
    avalability = `only ${instack} left`;
    color = "green";
  } else if (instack <= 2 && instack > 0) {
    avalability = `only ${instack} left hurry`;
    color = "red";
  } else {
    avalability = `out of stack`;
    color = "red";
  }

  const hnadleClickDiv = () => {
    navigate(`/products/${id}`);
  };

  const Add_to_Cart = () => {
    const newProduct = {
      id,
      name,
      price,
      mrp,
      images,
      rating,
      description,
      instack,
      quantity: 1,
    };

    axios
      .post(`http://localhost:8080/cart`, newProduct)
      .then(() => toast.success("Product Added To Cart"))
      .catch(() => toast.warning("Product Already In Cart"));
  };

  const Add_Product_To_WishList = () => {
    const newProduct = {
      id,
      name,
      price,
      mrp,
      images,
      rating,
      description,
      instack,
    };
    axios
      .post(`http://localhost:8080/wishlist`, newProduct)
      .then(() => toast.success("Product Added To Wishlist"))
      .catch(() => toast.warning("Product Already In Wishlistart"));
  };
  return (
    <Box className={styles.CardCont}>
      <Box className={styles.grid_wiev_image}>
        <Box className={styles.outer}>
          <img src={images[0]} alt={name} />
          <Box className={styles.inner}>
            <img src={images[1]} alt={name} />
          </Box>
        </Box>
        <Box className={styles.fun_btns}>
          <Box>
            <Flex
              onClick={Add_to_Cart}
              align="center"
              justify="center"
              className={styles.addcart}
            >
              <Box className={styles.iconNamecart}>Add To Cart</Box>
              <Button className={`${styles.functional_BTN}`}>
                <HiOutlineShoppingCart />
              </Button>
            </Flex>
            <Flex
              onClick={Add_Product_To_WishList}
              align="center"
              justify="center"
              className={styles.addwish}
            >
              <Box className={styles.iconNamewish}>Add To Wish</Box>
              <Button className={`${styles.functional_BTN}`}>
                <AiOutlineHeart />
              </Button>
            </Flex>
            <Flex align="center" justify="center" className={styles.zoomout}>
              <Box className={styles.iconNamezoom}>To See More</Box>
              <Button className={`${styles.functional_BTN}`}>
                <AiOutlineZoomIn />
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box onClick={hnadleClickDiv} className={styles.details}>
        <Text className={styles.ProductName}>{name}</Text>
        <Flex gap="5%">
          <Text fontWeight={"500"} color="green.700">{`Rs ${price}₹`}</Text>
          <Text fontWeight={"500"} color="red">
            MRP <strike>{`${mrp}₹`}</strike>
          </Text>
        </Flex>
        <Flex gap={"3%"}>
          <Text
            color="blue.600"
            fontWeight={"500"}
          >{`Save ${save} (${discount}% off)`}</Text>
          <Text color={color} fontWeight={"500"}>
            {avalability}
          </Text>
        </Flex>

        <Flex w="100%" flexDir="flex-end">
          {Array(Math.floor(rating))
            .fill()
            .map((_, i) => (
              <Text key={i}>
                <AiFillStar />
              </Text>
            ))}
        </Flex>
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ borderRadius: 0, boxShadow: "none" }}
      />
    </Box>
  );
}

export default ProductCard;
