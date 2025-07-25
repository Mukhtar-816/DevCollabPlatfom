import React from "react";

const CustomButton = ({ title = "Click", onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-blue-500 to-purple-900
      hover:from-purple-700 hover:to-red-700 
      text-white font-semibold 
      py-3 px-5 rounded-lg 
      transition-colors hover:transition-all duration-300 ease-in-out 
      active:scale-95 
      focus:outline-none 
      max-w-80 min-w-60 md:min-w-80  
      cursor-pointer shadow-md hover:shadow-lg "
      {...props}
    >
      {title}
    </button>
  );
};

export default CustomButton;
