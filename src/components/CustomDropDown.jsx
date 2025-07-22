import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DropDownComponent = ({ ...props }) => {
  const data = [
    {
      title: "Profile",
    },
    {
      title: "Settings",
    },
    {
      title: "Logout",
    },
  ];

  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    props.data?.length > 0 && setCurrentData(props?.data);
  }, [props.data]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white/20 backdrop-blur-3xl py-1 px-2 w-40 rounded-md flex flex-col absolute z-10 right-0 mt-15 mr-5 border-2 border-white/20"
    >
      {currentData?.map((item, index) => (
        <button
          onClick={item?.onClick}
          className={`justify-center bg-transparent active:scale-95 transition-all duration-300 hover:bg-white/10 flex items-center px-3 py-2 text-white border-b border-b-white/20 ${
            index === currentData.length - 1 ? "border-b-0" : ""
          }`}
        >
          <p>{item?.title}</p>
        </button>
      ))}
    </motion.div>
  );
};

export default DropDownComponent;