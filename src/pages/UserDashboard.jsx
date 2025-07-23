import React, { useEffect, useState } from "react";
import BackgroundVideo from "../components/backgroundVideo";
import CustomHeader from "../components/CustomHeader";
import { useAuth } from "../context/authContext";
import CustomLoader from "../components/loader";
import { toast } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import DropDownComponent from "../components/CustomDropDown";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomPageAnimation from "../components/CustomPageAnimation";


const UserDashboard = () => {
  const { authenticated, Logout, loading, setLoading } = useAuth();
  const [dropDown, setdropDown] = useState(false);
  const navigate = useNavigate();

  const DropDownOptions = [
    {
      title: "Profile",
      onClick() {
        navigate("/profile");
      },
    },
    {
      title: "Settings",
       onClick() {
        navigate("/settings");
      },
    },
    {
      title: "Security",
      onClick() {
        toast.success(this.title);
      },
    },
    {
      title: "Logout",
      onClick() {
        handleLogout();
      },
    },
  ];

  const handleLogout = () => {
    setLoading(true);
    Logout();
    setLoading(false);
    toast.success("Logged Out Successfully.");
  };

  return (
    <CustomPageAnimation>
      {/* <BackgroundVideo /> */}
      {loading && <CustomLoader />}
      <CustomHeader
        authenticated={authenticated}
        logout={handleLogout}
        dropDownState={dropDown}
        onArrowPress={() => setdropDown(!dropDown)}
      />

      <AnimatePresence>
        {dropDown && (
          <DropDownComponent key="dropdown" data={DropDownOptions} />
        )}
      </AnimatePresence>
    </CustomPageAnimation>
  );
};

export default UserDashboard;
