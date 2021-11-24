import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";

const ExpenseComp = ({ transAction }) => {
  return (
    <Box
      flex={1}
      w={["full", "full", "full", "auto", "auto"]}
      bg="white"
      mr="4"
      mt="10"
      p="5"
      pb="4"
      border="1px solid "
      borderColor="gray.50"
      borderRadius="8"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading color="gray.700" size="md">
          Expense
        </Heading>
        <Text cursor="pointer" fontSize="11px" color="gray.400">
          View All
        </Text>
      </Flex>
      {transAction.map((t) => {
        return (
          <>
            {t.type === "expense" && (
              <Flex
                key={t.id}
                bg="red.50"
                mt="4"
                justifyContent="space-between"
                alignItems="center"
                border=".1px solid"
                borderColor="red.100"
                p="4"
                shadow="md"
                borderRadius="6"
              >
                <Flex alignItems="center" justifyContent="center">
                  <Avatar
                    bg="red.400"
                    color="white"
                    boxSize="8"
                    name={t.desc}
                    borderRadius="10"
                  />
                  <Text ml="3" fontWeight="bold" color="gray.700">
                    {t.desc}
                  </Text>
                </Flex>
                <Text>$ {t.amount}</Text>
              </Flex>
            )}
          </>
        );
      })}
    </Box>
  );
};

export default ExpenseComp;
