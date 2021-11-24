import React, { useState } from "react";

import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Divider,
} from "@chakra-ui/react";

const TransActionForm = ({ isOpen, onClose, addTransAction }) => {
  const [value, setValue] = useState("expense");
  const [formValues, setFormValues] = useState({
    type: "expense",
    desc: "",
    amount: 0,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransAction(formValues);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Expense Tracker</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter desc</FormLabel>
              <Input
                placeholder="desc"
                name="desc"
                type="text"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt="4">
              <FormLabel>Enter amount</FormLabel>
              <Input
                placeholder="amount"
                type="number"
                name="amount"
                onChange={handleChange}
              />
            </FormControl>
            <RadioGroup mt="6" mb="2" value={value} onChange={setValue}>
              <Radio
                name="type"
                checked={formValues.type === "expense"}
                onChange={handleChange}
                _focus={{}}
                colorScheme="red"
                mr="4"
                value="expense"
              >
                expense
              </Radio>
              <Radio
                onChange={handleChange}
                checked={formValues.type === "income"}
                name="type"
                _focus={{}}
                colorScheme="green"
                value="income"
              >
                income
              </Radio>
            </RadioGroup>
          </ModalBody>

          <Divider />

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              bg="green.300"
              color="gray.100"
              _hover={{ bg: "green.400" }}
              _focus={{}}
              _active={{bg: 'green.500'}}
              type="submit"
              shadow="lg"
              onClick={onClose}
            >
              Add Transaction
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default TransActionForm;
