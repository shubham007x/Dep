import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import Navbar from "./Compponents/Navbar";
import { Routes } from "react-router-dom";
import AllRoute from "./AllRoute/AllRoute";

function App() {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <Box>
      <Navbar />
      <AllRoute />
    </Box>
  );
}

export default App;
