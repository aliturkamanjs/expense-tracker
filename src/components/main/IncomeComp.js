import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const IncomeComp = ({ transAction }) => {
  return (
    <Box
      flex={1}
      w={["full", "full", "full", "auto", "auto"]}
      mt="10"
      bg="white"
      p="5"
      pb="4"
      border="1px solid "
      borderColor="gray.50"
      borderRadius="8"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading color="gray.700" size="md">
          Income
        </Heading>
        <Text cursor="pointer" fontSize="11px" color="gray.400">
          View All
        </Text>
      </Flex>
      {transAction.map((t) => {
        return (
          <>
            {t.type === "income" && (
              <Flex
                key={t.id}
                bg="green.50"
                mt="4"
                justifyContent="space-between"
                alignItems="center"
                p="4"
                border=".1px solid"
                borderColor="green.100"
                shadow="md"
                borderRadius="6"
              >
                <Flex alignItems="center" justifyContent="center">
                  <Avatar
                    bg="green.400"
                    color="white"
                    boxSize="8"
                    name={t.desc}
                    borderRadius="10"
                  />
                  <Text ml="3" fontWeight="bold" color="gray.700">{t.desc}</Text>
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

export default IncomeComp;
