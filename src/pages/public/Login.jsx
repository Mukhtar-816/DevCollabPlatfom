import React, { useState } from "react";
import BackgroundVideo from "../../components/backgroundVideo";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleOnLocalLogin = () => {
    if (!password || !email) {
      toast.error("All fields are required!");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Success.");

    console.log("Signing In with:", { password, email });
  };

  const InputFeilds = [
    {
      title: "Email",
      value: email,
      onChange(e) {
        setEmail(e.target.value);
      },
    },
    {
      title: "Password",
      value: password,
      onChange(e) {
        setPassword(e.target.value);
      },
    },
  ];

  return (
    <div className="relative flex-col flex h-full min-h-[100vh] w-full overflow-hidden px-10 py-10 justify-center items-center">
      {/* Background Video */}
      <BackgroundVideo />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="bg-white/10 flex-col backdrop-blur-3xl lg:w-1/2 rounded-2xl hover:backdrop-hue-rotate-30 transition-colors duration-300 ease-linear hover:scale-z-1000 inset-shadow-white/10 gap-5 justify-center border-white/20 h-3/4 relative p-14 items-center flex"
      >
        <h1 className="text-white text-4xl font-semibold py-5">Login</h1>
        <div className="flex-col gap-3 flex ">
          {InputFeilds?.map((item, index) => (
            <CustomTextInput
              type={item}
              key={index}
              value={item?.value}
              onChange={item?.onChange}
            />
          ))}
        </div>
        <div className="py-5 gap-5 flex-col flex items-center">
          <CustomButton onClick={handleOnLocalLogin} title="Login" />
          <label className="text-white">
            Doesn't Have an Account ?{" "}
            <a href="/signup" className="text-blue-600">
              Sign Up
            </a>
          </label>
        </div>{" "}
      </motion.div>
    </div>
  );
};

export default Login;
