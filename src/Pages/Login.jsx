import { Box, Button, Center, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/actions";

const initialFormData = {
  email: "",
  password: "",
};
export const Login = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { email, password } = formData;

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}?email=${email}`
      );
      const data = await res.json();
      console.log(data[0].password);
      if (data[0].password == password) {
        dispatch(login({ email }));
        window.location.href = "/";
      } else {
        alert("Wrong Credential");
      }
      console.log(data);
      setFormData(initialFormData);
    } catch (error) {
      alert("Please sign in first");
    }
  };
  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box mt={"5rem"}>
      <Heading textAlign={"center"}>Login</Heading>
      <Center>
        <FormControl gap={"1rem"} textAlign={"center"} width={"60%"} m={"1rem"}>
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
