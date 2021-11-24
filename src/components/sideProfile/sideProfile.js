import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import React from "react";
import profile from "../images/img.jpg";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Image } from "@chakra-ui/image";

import rocket from "../images/rocket.png";
import { Button } from "@chakra-ui/button";

const SideProfile = () => {
  return (
    <Flex flexDirection="column" alignItems="center"  >
      <Flex
        width="90%"
        height="auto"
        mt="20"
        bg="#f4fafd"
        display="flex"
        alignItems="center"
        flexDirection="column"
        border=".5px solid"
        shadow="sm"
        borderColor="gray.50"
        borderRadius="lg"
        pb="4"
      >
        <Avatar
          border="6px solid white"
          src={profile}
          boxSize="24"
          name="Ali Turkaman"
          mt="-10"
        />
        <Heading color="gray.600" fontSize="2xl" mt="3">
          Ali Turkaman
        </Heading>
        <Heading color="gray.500" fontSize="sm" mt="1">
          frontend developer
        </Heading>
        <Flex w={["50%", "50%", "60%", "40%", "35%"]} alignItems="center" justifyContent="space-evenly" mt="4">
          <Link href="https://github.com/aliturkamanjs" isExternal _focus={{}}>
            <BsGithub color="#4A5568" fontSize="20px" />
          </Link>
          <Link href="https://twitter.com/ATurkaman" isExternal _focus={{}}>
            <BsTwitter color="#4A5568" fontSize="20px" />
          </Link>
          <Link
            href="https://www.instagram.com/ali_turkaman_n/"
            isExternal
            _focus={{}}
          >
            <RiInstagramFill color="#4A5568" fontSize="20px" />
          </Link>
        </Flex>
      </Flex>
      <Flex
        width="90%"
        height="auto"
        mt="5"
        bg="#f4fafd"
        display="flex"
        alignItems="center"
        flexDirection="column"
        border=".5px solid"
        borderColor="gray.50"
        shadow="sm"
        borderRadius="lg"
        pb="4"
      >
        <Heading display="flex" alignItems="center" justifyContent="center" fontSize="xl" mt="3" color="gray.600">
         Update Account<Text fontSize="md">🏆</Text>
        </Heading>
        <Text
          textAlign="center"
          w="70%"
          lineHeight="17px"
          fontSize="sm"
          mt="2"
          color="gray.500"
        >
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs.
        </Text>
        <Image mt="8" boxSize="180px" src={rocket} />
        <Text
          textAlign="center"
          w="70%"
          lineHeight="18px"
          fontSize="12px"
          mt="3"
          color="gray.500"
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt magna aliqua.”
        </Text>
        <Button
          shadow="xl"
          _focus={{}}
          _hover={{ bg: "green.400" }}
          _active={{ bg: "green.500" }}
          bg="green.300"
          color="white"
          mt="4"
        >
          Update Now
        </Button>
      </Flex>
      <Flex>
        <Link href="https://github.com/aliturkamanjs" isExternal _focus={{}}>
          <Heading
            cursor="pointer"
            transition=".3s ease-in-out"
            p="1"
            color="gray.600"
            fontSize="sm"
            mt="3"
          >
            Created By Ali Turkaman 🔥
          </Heading>
        </Link>
      </Flex>
    </Flex>
  );
};

export default SideProfile;
