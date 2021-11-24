import React from "react";
import profile from "../images/img.jpg";

import { Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Avatar } from "@chakra-ui/avatar";
import { BsFillFolderFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import { IoCalendarSharp, IoSettings } from "react-icons/io5";
import { HiHome } from "react-icons/hi";

const SidBar = () => {
  return (
    <Flex
    pr={["0px", "0px", "0px","0px","40px"]}
      position="fixed"
      height="full"
      bg="white"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex pl="4" pt="4" justifyContent="flex-start" flexDirection="column">
        <Heading
          fontSize="2xl"
          color="gray.700"
          mb="10"
          display={{
            base: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
          }}
        >
          Navigations
        </Heading>

        <Flex
          cursor="pointer"
          alignItems="center"
          width="90%"
          bg="gray.100"
          height="33px"
          borderRadius="lg"
        >
          <Button
            leftIcon={<HiHome />}
            _hover={{}}
            _focus={{}}
            _active={{}}
            bg="transparent"
            fontSize="md"
            color="gray.700"
          >
            <Text
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
            >
              Home
            </Text>
          </Button>
        </Flex>

        <Flex
          cursor="pointer"
          alignItems="center"
          width="90%"
          height="33px"
          mt="3"
          borderRadius="lg"
        >
          <Button
            leftIcon={<BsFillFolderFill />}
            _hover={{}}
            _focus={{}}
            _active={{}}
            bg="transparent"
            fontSize="md"
            color="gray.700"
          >
            <Text
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
            >
              Folder
            </Text>
          </Button>
        </Flex>

        <Flex
          mt="3"
          cursor="pointer"
          alignItems="center"
          width="90%"
          height="33px"
          borderRadius="lg"
        >
          <Button
            leftIcon={<IoMdAnalytics />}
            _hover={{}}
            _focus={{}}
            _active={{}}
            bg="transparent"
            fontSize="md"
            color="gray.700"
          >
            <Text
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
            >
              Analytics
            </Text>
          </Button>
        </Flex>

        <Flex
          mt="3"
          cursor="pointer"
          alignItems="center"
          width="90%"
          height="33px"
          borderRadius="lg"
        >
          <Button
            leftIcon={<IoCalendarSharp />}
            _hover={{}}
            _focus={{}}
            _active={{}}
            bg="transparent"
            fontSize="md"
            color="gray.700"
          >
            <Text
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
            >
              Calendar
            </Text>
          </Button>
        </Flex>

        <Flex
          mt="3"
          cursor="pointer"
          alignItems="center"
          width="90%"
          height="33px"
          borderRadius="lg"
        >
          <Button
            leftIcon={<IoSettings />}
            _hover={{}}
            _focus={{}}
            _active={{}}
            bg="transparent"
            fontSize="md"
            color="gray.700"
          >
            <Text
              display={{
                base: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              }}
            >
              Setting
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex ml="3" pt="3" pb="3" mb="3" justifyContent="center" alignItems="center">
        <Link _focus={{}} href="https://github.com/aliturkamanjs" isExternal>
          <Avatar src={profile} name="Ali Turkaman" />
        </Link>

        <Link _focus={{}} href="https://github.com/aliturkamanjs" isExternal>
          <Flex
            ml="2"
            flexDirection="column"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
            }}
          >
            <Heading size="sm" color="gray.700">
              Ali Turkaman
            </Heading>
            <Text fontSize="13px" color="gray.700">
              Frontend developer
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default SidBar;
