import React from 'react';
import './PictureElement.css';

interface PictureElementProps {
  src: string;
  alt: string;
  content: string;
  openModal: (content: string) => void;
}

const PictureElement: React.FC<PictureElementProps> = ({ src, alt, content, openModal }) => {
  return (
    <div className="element" onClick={() => openModal(content)}>
      <img src={src} alt={alt} className="image-style" />
    </div>
  );
};

export default PictureElement;
