import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../Redux/actions";
const initialFormData = {
  salary: "",
  refund: "",
  gifts: "",
  others: "",

  amount: "",
  date: "",
};
const Income = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { salary, refund, gifts, others, amount, date } = formData;
  const { user } = useSelector((state) => state.reducer);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    dispatch(postData(formData, user));
  };
  return (
    <Box m={"1rem"} p={"1rem"}>
      <FormControl id="expenseCategory" isRequired gap={"2 rem"}>
        <FormLabel>Expense Category</FormLabel>
        <Input
          onChange={handleInputChange}
          type="text"
          name="salary"
          value={salary}
          placeholder="Salary"
        ></Input>
        <Input
          onChange={handleInputChange}
          name="gifts"
          value={gifts}
          type="text"
          placeholder="Gifts"
        ></Input>
        <Input
          onChange={handleInputChange}
          name="refund"
          value={refund}
          type="text"
          placeholder="Refund"
        ></Input>
        <Input
          onChange={handleInputChange}
          type="text"
          name="others"
          value={others}
          placeholder="Other"
        ></Input>
        <Input
          onChange={handleInputChange}
          name="amount"
          value={amount}
          type="number"
          placeholder="Amount"
        ></Input>
        <Input
          onChange={handleInputChange}
          name="date"
          value={date}
          type="date"
          placeholder="Date"
        ></Input>
        <Button onClick={handleSubmit} color={"white"} background={"black"}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Income;
