import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "material-icons/iconfont/material-icons.css";
import HotspotContainer from "./components/HotspotContainer";

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const renderComponents = () => {
  const hotspotsDataElement = document.getElementById("hotspotsData");
  if (hotspotsDataElement) {
    const data = JSON.parse(hotspotsDataElement.textContent || "");

    data.forEach((element: any) => {
      const root = ReactDOM.createRoot(
        document.getElementById(`root-${element.id}`) as HTMLElement
      );
      root.render(
        <React.StrictMode>
          <HotspotContainer {...element} />
        </React.StrictMode>
      );
    });
  }
};


renderComponents();


// @ts-ignore
window.initComponent = renderComponents;
