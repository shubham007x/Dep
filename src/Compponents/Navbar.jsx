import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      background={"teal"}
      textAlign={"center"}
      justifyContent={"center"}
      border={"1px solid teal"}
      color={"whitesmoke"}
    >
      <Center gap={"1rem"}>
        <Spacer></Spacer>
        <Link to="/">
          <Heading>Dashboard</Heading>
        </Link>
        <Link to="/login">
          <Heading>Login</Heading>
        </Link>
        <Link to="/signup">
          <Heading>Signup</Heading>
        </Link>
      </Center>
    </Flex>
  );
};

export default Navbar;
