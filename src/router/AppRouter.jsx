import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import UserDashboard from "../pages/UserDashboard";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";

const AppRouter = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Private */}
        <Route
          path="/userdashboard"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        }/>
        <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Setting/>
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
