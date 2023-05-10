import React from "react";
import { Flex, Box, Image, Text, Button } from "@chakra-ui/react";
import { BsFire } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import moment from "moment";
export default function CartCard({
  id,
  name,
  price,
  mrp,
  rating,
  images,
  instack,
  quantity,
}) {
  const save = mrp - price;
  const discount = Math.ceil((save / mrp) * 100);
  let color;
  let avalability;
  let sold;
  if (instack > 2) {
    avalability = `only ${instack} left`;
    color = "green";
    sold = instack;
  } else if (instack <= 2 && instack > 0) {
    avalability = `only ${instack} left hurry`;
    color = "red";
    sold = instack;
  } else {
    avalability = `out of stack`;
    color = "red";
    sold = 1;
  }
  return (
    <Flex
      // pos="relative"
      p="15px"
      borderRadius="15px"
      border="1px solid gray"
      mb="20px"
    >
      <Box w="30%" mr="10px" h="100%">
        <img src={images[0]} w="100%" h="100%" alt={`${name} ${id}`} />
      </Box>
      <Box w="65%">
        <Text fontWeight={500} m="0px" p="0px" fontSize="18px">
          {name}
        </Text>
        <Flex p="0" m="0px" fontWeight="500">
          <Text>
            <BsFire />
          </Text>
          <Text> {sold} sold in last 12 hours</Text>
          <Text
            w="130px"
            ml="10px"
            borderRadius="3px"
            textAlign="center"
            backgroundColor={color}
            color="white"
            fontWeight="500"
          >
            {avalability}
          </Text>
        </Flex>

        <Box>
          <Flex p="0px" gap="6px" align="center" m="0px">
            <Text fontSize="20px" fontWeight="500">
              {`Rs.${price}.00`}
            </Text>
            <Text color="pink.400" fontSize="15px" fontWeight="500">
              <strike>{`Rs.${mrp}.00`}</strike>
            </Text>
            <Text>{`| save Rs.${save}.00`}</Text>
            <Text color="red.500">{`(${discount}%)`}</Text>
          </Flex>
          <Flex>
            <TbTruckDelivery size="1.3rem" />
            <Text>
              {`Estimated delivery between ${moment().format(
                "dddd  DD MMMM"
              )} and  ${moment()
                .add(Math.random(10), "days")
                .format("dddd  DD MMMM")}.`}
            </Text>
          </Flex>
          <Flex w="100px" justify="space-between">
            <Button bgColor="blackAlpha.200" borderRadius="50%">
              -
            </Button>
            <Button bgColor="white" disabled={true}>
              {quantity}
            </Button>
            <Button bgColor="blackAlpha.200" borderRadius="50%">
              +
            </Button>
          </Flex>
        </Box>

        <Flex align="center">
          <Flex>
            {Array(Math.floor(rating))
              .fill()
              .map((_, i) => (
                <Text key={i}>
                  <AiFillStar />
                </Text>
              ))}
          </Flex>
          <Button ml="10px" bgColor="red.400" mt="10px">
            Remove From Cart
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
