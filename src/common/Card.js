import { Box } from "@chakra-ui/layout";
import React from "react";

const Card = ({ children, ...res }) => {
  return (
    <Box
      p="6"
      border=".1px solid"
      borderColor="gray.50"
      overflow="hidden"
      borderRadius="10"
      background="white"
      {...res}
    >
      {children}
    </Box>
  );
};

export default Card;
