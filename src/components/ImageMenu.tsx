
import React from 'react';
import { IHotspot } from '../types/hotspotTypes';
import './ImageMenu.css';

interface ImageMenuProps {
  hotspots: IHotspot[];
  hoveredIndex: number | null;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
}

const ImageMenu: React.FC<ImageMenuProps> = ({
  hotspots,
  hoveredIndex,
  handleMouseEnter,
  handleMouseLeave
}) => {
  return (
    <div className="elements-menu">
      {hotspots.slice(0, 3).map((hotspot, index) => (
        <img
          key={index}
          src={hotspot.product.img}
          alt={hotspot.product.name}
          className={`menu-item ${index === hoveredIndex ? "active" : ""}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default ImageMenu;
