import React, { useRef } from "react";
import "./VideoComponent.css";

interface VideoComponentProps {
  src: string;
  poster?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="video-container" // Cursor pointer to indicate it's interactive
    >
      <video ref={videoRef} width="100%" poster={poster}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
