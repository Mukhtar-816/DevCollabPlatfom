import React from "react";
import { motion } from "framer-motion";

const CustomLoader = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex bg-white/20 backdrop-blur-xs justify-center items-center absolute z-10">
      <div className="bg-gradient-to-r from-white/90 to bg-black rounded-full p-3 animate-spin">
        <div className="bg-transparent p-10 rounded-full">
      </div>
      </div>
    </div>
  );
};

export default CustomLoader;
