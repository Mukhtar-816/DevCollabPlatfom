import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import SignUp from "../pages/public/SignUp";
import userDashboard from "../pages/private/userDashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/userdashboard" Component={userDashboard} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
