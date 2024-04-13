import React from 'react';
import './ButtonsMenu.css'

const ButtonsMenu: React.FC = () => {
  return (
    <div className="buttons-menu">
      <button className="button-m vezi">Vezi</button>
      <button className="button-m cart">
        <span className="material-icons-round">shopping_cart</span>
      </button>
      <button className="button-m">
        <span className="material-icons">ios_share</span>
      </button>
    </div>
  );
};

export default ButtonsMenu;
