import React, { useEffect } from "react";
import { IProduct } from "../types/hotspotTypes";
import "./Hotspot.css";

interface HotspotProps {
  product: IProduct;
  top: string;
  left: string;
  index: number;
  isActive: boolean;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
}

const Hotspot: React.FC<HotspotProps> = ({
  product,
  top,
  left,
  index,
  isActive,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const isTop = parseFloat(top) <= 40;
  const isBottom = parseFloat(top) >= 60;
  const isLeft = parseFloat(left) <= 40;
  const isRight = parseFloat(left) >= 60;

  let transformOffsetY = "10%";
  if (isTop) transformOffsetY = "0%";
  if (isBottom) transformOffsetY = "-95%";

  let transformOffsetX = "-50%";
  if (isLeft) transformOffsetX = "-3%";
  if (isRight) transformOffsetX = "-94%";

  let verticalPos = isTop ? "100%" : "auto";
  let bottomPos = isBottom ? "100%" : "auto";

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <div
      className={`hotspot ${isActive ? "active" : ""}`}
      style={{ top, left }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      {isActive && (
        <div
          className="hotspot-details"
          style={{
            top: verticalPos,
            bottom: bottomPos,
            left: isRight ? "auto" : "50%",
            right: isLeft ? "50%" : "auto",
            transform: `translate(${transformOffsetX}, ${transformOffsetY})`,
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
