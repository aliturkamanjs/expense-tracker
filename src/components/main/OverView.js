import React from "react";
import Card from "../../common/Card";
import visaCard from "../images/card2.png";

import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import TransActionForm from "./TransActionForm";
import ChartJs from "./chart";
import { Image } from "@chakra-ui/image";

const OverView = ({ onClose, isOpen, addTransAction, expense, income }) => {
  return (
    <Card mt="9" display="flex">
      <Heading size="sm" color="gray.700">
        Reports
      </Heading>
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Box
          flex={1}
          mt="10"
          ml="-90px"
          mr="4"
          width="300px"
          height="300px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ChartJs expense={expense} income={income} />
        </Box>
        <Flex
          flex={1}
          w="full"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          ml="-24"
          mr="2"
        >
          <Heading size="md" mb="4" color="gray.700">
            Your Balance $ {expense - income}
          </Heading>
          <Flex
            justifyContent="space-evenly"
            alignItems="center"
            bg="gray.50"
            w={["full", "full", "full","80%","80%"]}
            h="100px"
            border="1px solid"
            borderColor="gray.100"
          >
            <IoMdArrowRoundUp color="#48BB78" fontSize="30px" />
            <Flex flexDirection="column">
              <Heading color="gray.700">$ {income}</Heading>
              <Text color="gray.500">Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent="space-evenly"
            alignItems="center"
            bg="gray.50"
            w={["full", "full", "full","80%","80%"]}
            h="100px"
            mt="3"
            border="1px solid"
            borderColor="gray.100"
          >
            <IoMdArrowRoundDown color="#F56565" fontSize="30px" />
            <Flex flexDirection="column">
              <Heading color="gray.700">$ {expense}</Heading>
              <Text color="gray.500">Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flex={0.7}
          display={["none", "none", "none", "none", "block"]}
          width="280px"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            mt="10"
            src={visaCard}
            fallbackSrc="https://via.placeholder.com/150"
            objectFit="cover"
          />
        </Flex>
      </Flex>
      <TransActionForm
        onClose={onClose}
        isOpen={isOpen}
        addTransAction={addTransAction}
      />
    </Card>
  );
};

export default OverView;
