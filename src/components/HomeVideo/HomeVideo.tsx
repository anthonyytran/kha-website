import React from "react";
import "./HomeVideo.css";

const HomepageVideo: React.FC = () => {
  return (
    <div className="homepage-video-container">
      <video
        className="homepage-video"
        autoPlay
        loop
        muted
        playsInline
        src="/video/kha-vid.mp4"
      />
    </div>
  );
};

export default HomepageVideo;
