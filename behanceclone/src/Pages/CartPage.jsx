import React, { useState, useEffect } from "react";
import { Container, Text } from "@chakra-ui/react";
import "../Admin/Admin.css";
import axios from "axios";

import CartCard from "../Components/ProductCard";
export default function CartPag() {
  const [CartData, setCartData] = useState([]);

  

  const data = [
    {
      id: 1,
      name: "Flex Luxury Straight Line Sofa Set In Leatherette",
      price: 18999.0,
      mrp: 28999.0,
      images: [
        "https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_3579a2a7-d150-4b70-8386-90ba042f70da_1800x1800.webp?v=1665507800",
        "https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_8d7c4bba-280d-4150-a19d-076c15728ab2_1800x1800.webp?v=1665507815",
        "https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_3ceae210-4870-4bdd-a1a3-8dbf6e29df8d_1800x1800.webp?v=1665507826",
      ],
      rating: 3.5,
      category: "sofa",
      description:
        "The color of this sofa adds a touch of boldness to your decor, creating a neutral palette. The plush velvet material is comfortable and cozy on the skin, and the deep seat cushions provide plenty of room to stretch your legs while bringing a different kind of living experience to your living room and den.",
      instack: true,
    },
    {
      id: 2,
      name: "Flex Luxury Straight Line Sofa Set In Leatherette",
      price: 18999.0,
      mrp: 28999.0,
      images: [
        "https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_3579a2a7-d150-4b70-8386-90ba042f70da_1800x1800.webp?v=1665507800",
        "https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_8d7c4bba-280d-4150-a19d-076c15728ab2_1800x1800.webp?v=1665507815",
        "https://cdn.shopify.com/s/files/1/0617/5549/0489/products/image_3ceae210-4870-4bdd-a1a3-8dbf6e29df8d_1800x1800.webp?v=1665507826",
      ],
      rating: 3.5,
      category: "sofa",
      description:
        "The color of this sofa adds a touch of boldness to your decor, creating a neutral palette. The plush velvet material is comfortable and cozy on the skin, and the deep seat cushions provide plenty of room to stretch your legs while bringing a different kind of living experience to your living room and den.",
      instack: true,
    },
  ];

  const handleIncrea = (id, num) => {
    console.log("handleIncrea", id, num);
  };

  const handleDecre = (id, num) => {
    console.log("handleDecre");
  };
  const handleDelete = (id) => {
    data.slice(0, id);
  };
  return (
    <div>
      <Container maxW="70%" mt="10">
        <div className="Cart-Dev">
          <Text fontSize="large" fontWeight={"extrabold"} mr="70%">
            Shoping Countinue
          </Text>
          <Text fontSize="large" fontWeight={"extrabold"} mr="50%" m="4">
            You have {data.length} itme in you cart
          </Text>
          {data.length > 0 &&
            data.map((el) => {
              return (
                <CartCard
                  {...el}
                  key={el.id}
                  handleIncrea={handleIncrea}
                  handleDecre={handleDecre}
                  handleDelete={handleDelete}
                />
              );
            })}
        </div>
      </Container>
    </div>
  );
}
