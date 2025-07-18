import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const CustomTextInput = ({ type = {}, ...props }) => {
  const [hidden, setHidden] = useState(true);
  const isPassword = type?.title?.toLowerCase() === "password";

  return (
    <div className="flex flex-col gap-2 sm:min-w-80">
      <label className="text-white font-semibold">
        {type?.title || "Input"}
      </label>

      <div className="relative w-full ">
        <input
          value={props?.value}
          onChange={props?.onChange}
          type={isPassword && hidden ? "password" : "text"}
          className="bg-white rounded-lg px-4 py-3 w-full focus:outline-none"
          placeholder={"Enter " + type?.title}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setHidden(!hidden)}
            className="absolute right-3 top-1/2 -translate-y-3/8 transition-transform duration-300 ease-linear hover:scale-110"
          >
            <span
              key={hidden ? "eye-slash" : "eye"}
              className="inline-block transition-all duration-300 ease-in-out opacity-80 scale-100"
            >
              {hidden ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomTextInput;
