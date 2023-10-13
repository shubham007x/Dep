import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [formData, setFormData] = useState(initialFormData);
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(process.env.REACT_APP_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      setFormData(initialFormData);
      window.location.href = "/login";
    } catch (error) {
      console.log({ error: error });
    }
  };
  const { name, email, password } = formData;
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <Box mt={"5rem"}>
      <Heading textAlign={"center"}>SignUp</Heading>
      <Center>
        <FormControl gap={"1rem"} textAlign={"center"} width={"60%"} m={"1rem"}>
          <FormLabel>Full Name</FormLabel>
          <Input
            onChange={handleFormChange}
            type="Full Name"
            placeholder="Enter Name"
            name="name"
            value={name}
          />
          <FormLabel>Email address</FormLabel>
          <Input
            onChange={handleFormChange}
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
          />
          <FormLabel>Password</FormLabel>
          <Input
            onChange={handleFormChange}
            type="text"
            placeholder="Enter Password"
            name="password"
            value={password}
          />
          <Button
            background={"black"}
            color={"white"}
            m={"1rem"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
      </Center>
    </Box>
  );
};

export default Signup;
