import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const CustomHeader = ({ logout, ...props }) => {
  const tempProfile = props?.profileImg ||
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="w-full h-10 relative flex">
      <div className={`${!props?.dropDownState && "opacity-0"} hover:opacity-100 transition-opacity duration-200 ease-linear flex flex-row items-center justify-between py-8 md:px-5 px-4 bg-white/20 backdrop-blur-3xl border border-white/20 w-full h-full`}>
        <div>
          <h1 className="text-white/90 font-bold md:text-2xl text-lg ">
            DevCollab
          </h1>
        </div>
        <div className="flex flex-row gap-2">
          {props?.authenticated && <button
            className="flex flex-row items-center gap-2"
            onClick={props?.onArrowPress}
          >
            <img
              src={tempProfile}
              className="object-cover h-8 w-8 rounded-full"
            />
            <IoMdArrowDropup
              color="white"
              size={20}
              className={`${
                props?.dropDownState && "rotate-180"
              }  transition-all duration-300`}
            />
          </button>}
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
