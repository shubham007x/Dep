import { Heading, Select, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Expense from "./Expense";
import Income from "./Income";
import { useSelector } from "react-redux";

const Tracker = () => {
  const [category, setCategory] = useState("");
  const { user } = useSelector((state) => state.reducer);

  const handleTypeChange = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  return (
    <Box>
      <Heading>Tracker</Heading>

      <FormControl>
        <FormLabel>Type</FormLabel>
        <Select placeholder="Select option" onChange={handleTypeChange}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </Select>
        {category == "Expense" ? <Expense /> : <Income />}
      </FormControl>
    </Box>
  );
};

export default Tracker;
