import React from "react";
import CustomPageAnimation from "../components/CustomPageAnimation";
import { toast } from "react-toastify";
import CustomButton from "../components/CustomButton";
import { Route, useRoutes } from "react-router-dom";

const Public_Profile = ({ ...props }) => {
  const { id } = Route.query;

  //functions
  const handleFollow = () => {};

  // contants
  const tempProfile =
    props?.profileImg ||
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

  const TabOptions = [
    {
      title: "Posts",
      value: 25,
    },
    {
      title: "Followers",
      value: 50,
    },
    {
      title: "Following",
      value: 36,
    },
  ];

  return (
    <CustomPageAnimation>
      <div className="flex relative overflow-hidden h-full w-full justify-center  px-10 py-10">
        <div className="flex flex-col md:flex-row bg-white/20 gap-3 backdrop-blur-3xl h-full rounded-xl w-full min-w-[300px] border border-white/20 px-5">
          <div className="min-w-60 md:min-w-90  md:max-w-100 h-full items-center flex py-5 flex-col min-h-[90vh]">
            {/* Public_Profile */}
            <div>
              <button
                onClick={() => handleUploadProfile()}
                className="absolute justify-center items-center flex opacity-0 hover:opacity-100 h-60 w-60 rounded-full border-2 transition-opacity duration-200 bg-black/90 border-white/70"
              >
                <p className="text-white text-xl font-semibold">Upload</p>
              </button>
              <img
                src={tempProfile}
                className="object-cover h-40 w-40 md:h-60 md:w-60 rounded-full border-2 border-white/70"
              />
            </div>

            {/* Social Following Tab */}
            <div className=" h-full w-full flex flex-row justify-evenly py-5">
              {TabOptions?.map((item, index) => (
                <div className="text-white text-center text-md md:text-lg font-semibold w-30 justify-center items-center">
                  <label>{`${item.value}`}</label>
                  <br></br>
                  <label>{`${item.title}`}</label>
                </div>
              ))}
            </div>
            {<CustomButton title="Follow" onClick={() => handleFollow()} />}
          </div>
          <div className="min-w-60 border-2 md:w-full border-white min-h-full"></div>
        </div>
      </div>
    </CustomPageAnimation>
  );
};

export default Public_Profile;
