import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomPageAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: 1 }}
      className="flex relative overflow-hidden min-h-screen w-full bg-black/80"
    >
      { children }
    </motion.div>
  );
};

export default CustomPageAnimation;
