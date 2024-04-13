import React from "react";
import { HotspotImageProps, IHotspot } from "../types/hotspotTypes";
import "./HotspotContainer.css";
import Hotspot from "./Hotspot";

const HotspotContainer: React.FC<HotspotImageProps> = ({
  id,
  src,
  hotspots,
}) => {
  return (
    <div id={id} className="hotspot-container">
      <img src={src} alt="Hotspot Background" className="responsive-image" />
      {hotspots.map((hotspot: IHotspot, index: number) => (
        <Hotspot
          key={index}
          product={hotspot.product}
          top={hotspot.top}
          left={hotspot.left}
        />
      ))}
    </div>
  );
};

export default HotspotContainer;
