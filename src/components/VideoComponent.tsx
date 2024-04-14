import React, { useRef, useState } from "react";
import "./VideoComponent.css";
import ButtonsMenu from "./ButtonsMenu";
import { Modal } from "./Modal";
import PictureElement from "./PictureElement";

interface IVideoComponentProps {
  src: string;
  poster?: string;
}

const VideoComponent: React.FC<IVideoComponentProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModalWithContent = (content: string) => {
    setModalContent(content);
    setIsModalOpen(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
  };

  return (
    <div className="video-wrapper">
      {isModalOpen && <Modal content={modalContent} onClose={closeModal} />}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="video-container"
      >
        <video ref={videoRef} poster={poster}>
          <source src={src} type="video/mp4" />
        </video>
        <div className="volume">
          {isPlaying ? (
            <span className="material-icons">volume_up</span>
          ) : (
            <span className="material-icons">volume_off</span>
          )}
        </div>
        <div className="buttons-menu-video">
          <ButtonsMenu />
        </div>
      </div>
      <div className="side-pictures">
        <div className="side-pictures">
        {["1", "2", "3", "4"].map(num => (
              <PictureElement
                key={num}
                src={`./assets/video/${num}.png`}
                alt={`Imagine ${num}`}
                content={`Content for Product ${num}`}
                openModal={openModalWithContent}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
