import React, { useEffect, useState } from "react";
import BackgroundVideo from "../components/backgroundVideo";
import CustomHeader from "../components/CustomHeader";
import { useAuth } from "../context/authContext";
import CustomLoader from "../components/loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { authenticated, Logout, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    !authenticated && navigate("/login");
  });



  return (
    <div className="flex relative overflow-hidden h-screen w-full">
      <BackgroundVideo />
      {loading && <CustomLoader/>}

      {/* <CustomHeader authenticated={authenticated} logout={() => {Logout(), toast.success("Logged Out Successfully.")}}/> */}
    </div>
  );
};

export default Home;
