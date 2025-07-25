import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const CustomTextInput = ({ type = {}, ...props }) => {
  const [hidden, setHidden] = useState(true);
  const isPassword = type?.title?.toLowerCase() === "password";
  const isBio = type?.title?.toLowerCase() === "bio";

  const baseClasses = `${
    type?.disabled ? "bg-black/10" : props?.bgcolor || "bg-white"
  } rounded-lg px-4 w-full focus:outline-none`;

  const inputClass = `${baseClasses} py-3`;
  const bioClass = `${baseClasses} pt-3 pb-2 h-40 resize-none text-white`;

  return (
    <div className="flex flex-col gap-2 min-w-50">
      <label className="text-white font-semibold">
        {type?.title || "Input"}
      </label>

      <div className="relative w-full">
        {isBio ? (
          <textarea
            disabled={type?.disabled}
            value={props?.value}
            onChange={props?.onChange}
            className={bioClass}
            placeholder={"Enter " + type?.title}
            {...props}
          />
        ) : (
          <input
            disabled={type?.disabled}
            value={props?.value}
            onChange={props?.onChange}
            type={isPassword && hidden ? "password" : "text"}
            className={inputClass}
            placeholder={"Enter " + type?.title}
            {...props}
          />
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setHidden(!hidden)}
            className="absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-linear hover:scale-110"
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
