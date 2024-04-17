import React, { useState } from "react";
import { IHotspotImageProps } from "../types/hotspotTypes";
import "./HotspotContainer.css";
import Hotspot from "./Hotspot";
import ImageMenu from "./ImageMenu";
import ButtonsMenu from "./ButtonsMenu";
import HotspotPortal from "./HotspotPortal";

const HotspotContainer: React.FC<IHotspotImageProps> = ({
  id,
  src,
  hotspots,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="hotspot-container-big">
      <div id={id} className="hotspot-container">
        <img src={src} alt="Hotspot Background" className="responsive-image" />
        {/* {hotspots.map((hotspot, index) => (
          <Hotspot
            key={index}
            product={hotspot.product}
            top={hotspot.top}
            left={hotspot.left}
            isActive={index === hoveredIndex}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            index={index}
          />
        ))} */}
        {hotspots.map((hotspot, index) => (
          <HotspotPortal
            key={index}
            product={hotspot.product}
            top={hotspot.top}
            left={hotspot.left}
            isActive={index === hoveredIndex}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            index={index}
          />
        ))}
      </div>
      <div className="bottom-menu">
        <ImageMenu
          hotspots={hotspots}
          hoveredIndex={hoveredIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <ButtonsMenu />
      </div>
    </div>
  );
};

export default HotspotContainer;
