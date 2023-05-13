import React from "react";
import { Atom } from "react-loading-indicators";
import { Box, Flex } from "@chakra-ui/react";
// import { Atom, Riple } from "react-loading-indicators";

// import {
//   Audio,
//   BallTriangle,
//   Circles,
//   Puff,
//   Oval,
//   Rings,
//   ThreeDots,
//   ThreeCircles,
//   TailSpin,
//   Hearts,
// } from "react-loader-spinner";

function Loader({ margin }) {
  return (
    <>
      <Box w="100%" height="100vh" justify="center" align="center">
        <Flex w="100%" mt="30vh" justify="center" align="center">
          {" "}
          <Box>
            <Box>
              <Atom />
            </Box>
            <Box>
              <Atom />
            </Box>
          </Box>
          <Box>
            <Box>
              <Atom />
            </Box>
            <Box>
              <Atom />
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* <Riple /> */}
      {/* <BallTriangle
        height="80"
        width="50"
        radius="5"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <Circles
        height="80"
        width="50"
        radius="5"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <Hearts
        height="80"
        width="50"
        radius="5"
        color="red"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <ThreeCircles
        height="80"
        width="50"
        radius="5"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
      <ThreeDots
        height="80"
        width="50"
        radius="5"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /> */}
    </>
  );
}

export default Loader;
