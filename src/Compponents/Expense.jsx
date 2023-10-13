import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
const initialFormData = {};
const Expense = () => {
  return (
    <Box m={"1rem"} p={"1rem"}>
      <FormControl id="expenseCategory" isRequired gap={"2 rem"}>
        <FormLabel>Expense Category</FormLabel>
        <Input type="text" placeholder="Foods & Drinks"></Input>
        <Input type="text" placeholder="Shopping"></Input>
        <Input type="text" placeholder="Housing"></Input>
        <Input type="text" placeholder="Bills"></Input>
        <Input type="text" placeholder="Vehicle &Transport"></Input>
        <Input type="text" placeholder="LifeStyle"></Input>
        <Input type="number" placeholder="Amount"></Input>
        <Input type="date" placeholder="Date"></Input>
        <Button color={"white"} background={"black"}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Expense;
