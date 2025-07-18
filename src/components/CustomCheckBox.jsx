import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const CustomCheckBox = ({ ...props }) => {
  return (
    <div className="flex flex-row gap-2 items-center pt-2">
      <button
        onClick={props?.setSelected}
        className={`w-[20px] ${
          props?.selected && "bg-white/20"
        } h-[20px] rounded-md border-2 border-white/50 justify-center items-center flex duration-300  active:scale-120`}
      >
        {props?.selected && <FaCheck size={12} color="white" />}
      </button>
      <label className="text-white/80 text-sm ">
        {props?.title || "check Box"}
      </label>
    </div>
  );
};

export default CustomCheckBox;
