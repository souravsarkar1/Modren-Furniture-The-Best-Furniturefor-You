import React from "react";
import {
  Container,
  Flex,
  Box,
  Spacer,
  Image,
  Text,
  Avatar,
} from "@chakra-ui/react";
import "../Admin/Admin.css";
// import { BsFillCaretDownFill } from "react-icons/bs";
export default function CartCard({
  id,
  name,
  price,
  images,
  handleIncrea,
  handleDecre,
  handleDelete,
}) {
  return (
    <>
      <Container
        maxW="100%"
        mb="3"
        borderRightRadius="10"
        borderLeftRadius="10"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="white"
      >
        <Flex>
          <Box w="700px" h="110">
            <Flex key={id}>
              <Image
                borderRadius="10"
                ml="15"
                mr="38"
                w="100"
                h="110"
                src={images}
                alt={name}
              />
              <div>
                <Text fontWeight={"extrabold"} mt="8">
                  {name}
                </Text>
                <Text fontWeight={"extrabold"}>{price}</Text>
              </div>
            </Flex>
          </Box>
          <Spacer />
          <Box w="70px" h="100">
            <Text>{1}</Text>
            <button onClick={() => handleIncrea(id)}>
              <Avatar
                mt="2"
                size="sm"
                src="https://img.icons8.com/?size=512&id=aVM0CHwkTZGB&format=png"
                alt=""
              />
            </button>
            <button onClick={() => handleDecre(id)}>
              <Avatar
                mt="2"
                size="sm"
                src="https://img.icons8.com/?size=1x&id=93591&format=png"
                alt="down"
              />
            </button>
          </Box>
          <Spacer />
          <Box w="70px" h="100">
            <button onClick={() => handleDelete(id)}>
              <Image
                mt="5"
                src="https://img.icons8.com/?size=1x&id=107448&format=png"
                alt=""
              />
            </button>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
