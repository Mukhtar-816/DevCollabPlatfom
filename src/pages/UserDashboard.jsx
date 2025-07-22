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
    <motion.div
    initial={{opacity:0}}
    animate={{opacity : 100}}
    transition={{duration : 1}}
     className="flex relative overflow-hidden h-screen w-full bg-black/80">
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
    </motion.div>
  );
};

export default UserDashboard;
