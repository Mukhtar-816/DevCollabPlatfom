import React, { useEffect, useState } from "react";
import BackgroundVideo from "../components/backgroundVideo";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { motion } from "framer-motion";
import CustomCheckBox from "../components/CustomCheckBox";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/slices/user/userAction";
import { useAuth } from "../context/authContext";
import CustomLoader from "../components/loader";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  //States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkBoxSelected, setCheckBoxSelected] = useState(false);
  const { handleAuthenticated, setLoading, loading, authenticated } = useAuth();

  useEffect(() => {
    authenticated && navigate("/userDashboard");
  }, [authenticated]);

  //handlers
  const handleOnLocalSignUp = async () => {
    if (!username || !password || !email) {
      toast.error("All fields are required!");
      return;
    }
    if (username.trim().length === 0) {
      toast.error("Username cannot be empty or just spaces.");
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

    if (!checkBoxSelected) {
      toast.warn("Agree to the term and conditions.");
      return;
    }

    setLoading(true);

    await dispatch(userRegister({ email, password, name: username }))
      .unwrap()
      .then(() => {
        toast.success("Registration successful.");
        handleAuthenticated(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error || "Signup failed");
      });

    setLoading(false);
  };

  //Data-Defined
  const InputFeilds = [
    {
      title: "Username",
      value: username,
      onChange(e) {
        setUsername(e.target.value);
      },
    },
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
      {loading && <CustomLoader />}

      {/* Background Video */}
      <BackgroundVideo />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="bg-white/10 flex-col backdrop-blur-3xl lg:w-1/2 rounded-2xl hover:backdrop-hue-rotate-30 transition-colors duration-300 ease-linear hover:scale-z-1000 gap-5 justify-center border-white/20 h-3/4 relative p-14 py-8 items-center flex"
      >
        <h1 className="text-white text-4xl font-semibold py-5">Sign Up</h1>
        <div className="flex-col gap-3 flex ">
          {InputFeilds?.map((item, index) => (
            <CustomTextInput
              type={item}
              key={index}
              value={item?.value}
              onChange={item?.onChange}
            />
          ))}
          <CustomCheckBox
            selected={checkBoxSelected}
            setSelected={() => setCheckBoxSelected(!checkBoxSelected)}
            title={"I agree to the terms and conditions."}
          />
        </div>
        <div className="py-5 gap-5 flex-col flex items-center">
          <CustomButton onClick={handleOnLocalSignUp} title="Sign Up" />
          <label className="text-white">
            Already Have an Account ?{" "}
            <a href="/login" className="text-blue-600">
              Log In
            </a>
          </label>
        </div>{" "}
      </motion.div>
    </div>
  );
};

export default SignUp;
