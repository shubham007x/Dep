import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import { Login } from "../Pages/Login";
import Signup from "../Pages/Signup";
import { useSelector } from "react-redux";
import Tracker from "../Compponents/Tracker";
import Analytics from "../Compponents/Analytics";
import History from "../Compponents/History";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default AllRoute;
