import React from "react";
import bgVideo from "../assets/bgvideo2.mp4";

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      playsInline
      muted
      className="absolute inset-0 w-full h-full object-cover -z-20"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
