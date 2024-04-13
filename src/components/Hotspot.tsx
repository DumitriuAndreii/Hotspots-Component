import React, { useState } from "react";
import { IProduct } from "../types/hotspotTypes";
import "./Hotspot.css";

type HotspotProps = {
  product: IProduct;
  top: string;
  left: string;
};

const Hotspot: React.FC<HotspotProps> = ({ product, top, left }) => {
  const [showDetails, setShowDetails] = useState(false);

  const isTop = parseFloat(top) <= 20;
  const isBottom = parseFloat(top) >= 80;
  const isLeft = parseFloat(left) <= 20;
  const isRight = parseFloat(left) >= 80;

  let transformOffsetY = "10%";
  if (isTop) transformOffsetY = "0%";
  if (isBottom) transformOffsetY = "-90%";

  let transformOffsetX = '-50%';
  if(isLeft) transformOffsetX = "-3%";
  if(isRight) transformOffsetX = "-95%";

  console.log(
    isTop,
    isRight,
    isBottom,
    isLeft,
    transformOffsetY,
    transformOffsetX
  );
  let verticalPos = isTop ? "100%" : "auto"; 
  let bottomPos = isBottom ? "100%" : "auto"; 

  return (
    <div
      className="hotspot"
      style={{ top, left }}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {showDetails && (
        <div
          className="hotspot-details"
          style={{
            top: verticalPos,
            bottom: bottomPos,
            left: isRight ? "auto" : "50%", 
            right: isLeft ? "50%" : "auto", 
            transform: `translate(${transformOffsetX}, ${transformOffsetY})`,
            zIndex: 100,
          }}
        >
          <img src={product.img} alt={product.name} className="hotspot-image" />
          <div className="hotspot-info">
            <p className="hotspot-description">{product.description}</p>
            <p className="hotspot-price">{product.price} lei</p>
            <div className="hotspot-actions">
              <a
                href={product.addToCartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hotspot-button add-to-cart"
              >
                Adaugă în coș
              </a>
              <a
                href={product.detailsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hotspot-button view-product"
              >
                Vezi produsul
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotspot;
