import React, { useState, useRef, useEffect } from "react";
import CustomPageAnimation from "../components/CustomPageAnimation";
import CustomTextInput from "../components/CustomTextInput";
import { useSelector } from "react-redux";

const Profile = ({ profileImg }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [contentHeight, setContentHeight] = useState("auto");
  const contentRef = useRef(null);

  const userData = useSelector((state) => state.user.userInfo);

  const handleUploadProfile = () => {};
  const handleUpdateProfile = () => {};

  const Tabs = [
    { title: "Posts" },
    { title: "Personal Info" },
    { title: "Security" },
  ];

  const tempProfile =
    profileImg ||
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D";

  const Socials = [
    { title: "Posts", value: 25 },
    { title: "Followers", value: 50 },
    { title: "Following", value: 36 },
  ];

  const InputFeilds = [
    { title: "Name", value: userData?.user?.name },
    { title: "Email", disabled: true, value: userData?.user?.email },
    { title: "Age", value: userData?.age },
    { title: "Profession", value: userData?.profession },
    { title: "Bio", value: userData?.bio },
  ];
  useEffect(() => {
    if (contentRef.current) {
      // Reset to scrollHeight to animate
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [currentTab, userData]);

  return (
    <CustomPageAnimation>
      <div className="flex relative lg:flex-row flex-col gap-5 overflow-hidden h-full w-full justify-center px-10 py-10 flex-1">
        {/* Profile Sidebar */}
        <div className="bg-white/20 transition-all duration-300 ease-in-out md:flex-row justify-between md:px-10 lg:px-0 flex-col rounded-xl border-2 border-white/20 shadow-2xl backdrop-blur-3xl lg:min-w-[350px] h-full items-center flex py-5 lg:flex-col">
          <div className="md:flex-row justify-evenly lg:gap-2 md:gap-10 flex-col lg:min-w-[350px] h-full items-center flex lg:flex-col">
            <div className="active:scale-95 transition-all duration-300 relative">
              <button
                onClick={handleUploadProfile}
                className="absolute flex justify-center items-center opacity-0 hover:opacity-100 h-40 w-40 lg:h-60 lg:w-60 rounded-full border-2 transition-opacity duration-200 bg-black/90 border-white/70"
              >
                <p className="text-white text-xl font-semibold">Upload</p>
              </button>
              <img
                src={tempProfile}
                alt="User Profile"
                className="object-cover h-40 w-40 md:h-60 md:w-60 rounded-full border-2 border-white/70"
              />
            </div>

            <div className="flex flex-col md:text-start lg:text-center text-center px-2 lg:py-4">
              <div className="md:pl-4 lg:pl-0">
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                  {userData?.user?.name}
                </h1>
                <h2 className="text-white/70 text-sm md:text-base">
                  @{userData?.user?.username || "developer"}
                </h2>
                <p className="text-white/60 md:hidden lg:flex mt-2 text-sm md:text-base leading-relaxed">
                  {userData?.bio ||
                    "Passionate developer and open source enthusiast"}
                </p>
              </div>

              <div className="flex justify-around w-full gap-5 md:gap-10 px-4 mt-4">
                {Socials.map((item, index) => (
                  <div key={index} className="text-center">
                    <p className="text-white text-xl md:text-2xl font-bold">
                      {item.value}
                    </p>
                    <p className="text-white/70 text-sm md:text-base">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div> {/* Reserved for future buttons or content */}
        </div>

        {/* Info Section */}
        <div className="flex-col w-full min-h-[40vh] lg:min-h-[90vh] md:min-h-[50vh] flex bg-white/20 backdrop-blur-3xl rounded-xl border-2 border-white/20 shadow-2xl">
          <div className="flex flex-row w-full bg-white/10 justify-evenly items-center h-12">
            {Tabs.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(index)}
                className={`h-full w-1/5 active:bg-white/20 active:scale-95 transition-all duration-200 items-center justify-center flex ${
                  currentTab === index ? "border-b-2 border-white" : ""
                }`}
              >
                <h1 className="text-white">{item.title}</h1>
              </button>
            ))}
          </div>

          <div
            style={{
              height: contentHeight,
              transition: "height 0.4s ease-in-out",
              overflow: "hidden",
            }}
          >
            <div
              ref={contentRef}
              className="p-6 flex flex-col"
              onTransitionEnd={() => {
                setContentHeight("auto"); // Reset to auto after transition
              }}
            >
              {currentTab === 1 && (
                <div className="flex flex-wrap gap-4">
                  {InputFeilds.map((item, index) => (
                    <CustomTextInput
                      key={index}
                      bgcolor="bg-black/20"
                      style={{ color: "white" }}
                      type={item}
                      value={item.value}
                      disabled={item.disabled}
                    />
                  ))}
                </div>
              )}
              {/* Render other tabs here later */}
            </div>
          </div>
        </div>
      </div>
    </CustomPageAnimation>
  );
};

export default Profile;
