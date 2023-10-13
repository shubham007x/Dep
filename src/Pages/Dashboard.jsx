import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Login } from "./Login";
import Tracker from "../Compponents/Tracker";
import Analytics from "../Compponents/Analytics";
import History from "../Compponents/History";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.reducer);
  console.log(user.email);
  return (
    <Box width={"90%"} textAlign={"center"} m={"2rem"}>
      <Heading size={"l"}> Dashboard</Heading>

      <Button>
        <Link to={"/tracker"}>Tracker</Link>
      </Button>
      <Button>
        <Link to={"/analytics"}>Analytics</Link>
      </Button>
      <Button>
        <Link to={"/history"}>History</Link>
      </Button>
      <Tracker />
    </Box>
  );
};

export default Dashboard;
