import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import ExpenseComp from "./ExpenseComp";
import IncomeComp from "./IncomeComp";

const TransactionComp = ({ transAction }) => {
  return (
    <Flex w="full" alignItems="flex-start" justifyContent="space-evenly" flexDirection={["column", "column", "column", "row", "row"]}>
      <ExpenseComp transAction={transAction} />
      <IncomeComp transAction={transAction} />
    </Flex>
  );
};

export default TransactionComp;
