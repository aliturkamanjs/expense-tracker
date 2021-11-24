import React, { useEffect, useState } from "react";

import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Flex, Heading } from "@chakra-ui/layout";

import { RiSearch2Line } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";

import { Button } from "@chakra-ui/button";
import OverView from "./OverView";
import { useDisclosure } from "@chakra-ui/hooks";
import TransactionComp from "./TransactionComp";

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  const addTransAction = (formValue) => {
    if (!formValue.amount || !formValue.desc ) {
      return;
    }
    setTransAction([...transAction, { ...formValue, id: Date.now() }]);
  };

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transAction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transAction]);

  return (
    <Flex textAlign="center" flexDirection="column" pr="5" pl="5">
      <Flex alignItems="center" justifyContent="space-between" mt="12">
        <Heading color="gray.700" display={["none", "block","block", "block","block"]}>OverView</Heading>
        <Flex alignItems="center">
          <InputGroup width="250px" display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}>
            <Input
              placeholder="Search"
              type="text"
              color="gray.700"
              variant="white"
            />
            <InputRightElement children={<RiSearch2Line color="#A0AEC0" />} />
          </InputGroup>

          <Button
            bg="green.300"
            color="white"
            _focus={{}}
            _hover={{ bg: "green.400" }}
            _active={{ bg: "green.500" }}
            ml="4"
            shadow="lg"
            rightIcon={<IoAdd />}
            onClick={onOpen}
          >
            Add TransAction
          </Button>
        </Flex>
      </Flex>
      <OverView
        isOpen={isOpen}
        onClose={onClose}
        addTransAction={addTransAction}
        expense={expense}
        income={income}
      />
      <TransactionComp transAction={transAction} />
    </Flex>
  );
};

export default Main;
