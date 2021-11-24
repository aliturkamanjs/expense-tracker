import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import "./App.css";
import Main from "./components/main/main";
import SidBar from "./components/sidBar/SidBar";
import SideProfile from "./components/sideProfile/sideProfile";

const App = () => {
  return (
    <Container bg="#f8fafd" maxW="Container.3xl" height="100vh" p="0">
      <Flex height="full">
        <Box
          height="full"
          flex={{
            base: 0.5,
            sm: 0.5,
            md: 0.5,
            lg: 0.5,
            xl: 1,
          }}
          display={["none","block","block","block","block"]}
          mr={["30px", "20px", "30px", "60px", "50px"]}
        >
          <SidBar />
        </Box>
        <Box height="full" flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Main />
        </Box>
        <Box
          bg="white"
          height="full"
          flex={2}
          display={["none", "none", "block", "block", "block"]}
        >
          <SideProfile />
        </Box>
      </Flex>
    </Container>
  );
};

export default App;
