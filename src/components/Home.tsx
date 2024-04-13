import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container1">
      <img
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        alt="image"
        className="home-image"
      />

      <div className="home-container5">
        <span>Descriere</span>
        <span className="home-text1">Pret</span>
        <button type="button" className="home-button button">
          Button
        </button>
        <button type="button" className="home-button1 button">
          Button
        </button>
      </div>
    </div>
  );
};

export default Home;
