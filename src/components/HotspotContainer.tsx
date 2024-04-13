import React, { useState } from "react";
import { IHotspotImageProps, IHotspot } from "../types/hotspotTypes";
import "./HotspotContainer.css";
import Hotspot from "./Hotspot";

const HotspotContainer: React.FC<IHotspotImageProps> = ({
  id,
  src,
  hotspots,
}) => {

  return (
    <div className="hotspot-container-big">
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
      <div className="menu-container">
        <div className="elements-menu">
        {hotspots.slice(0, 3).map((hotspot, index) => (
            <img 
              key={index}
              src={hotspot.product.img}
              alt={hotspot.product.name}
              className="menu-item"
            />
          ))}
        </div>
        <div className="buttons-menu">
          <button className="button-m vezi">Vezi</button>
          <button className="button-m cart">
            <span className="material-icons-round">shopping_cart</span>
          </button>
          <button className="button-m">
            <span className="material-icons">ios_share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotspotContainer;
