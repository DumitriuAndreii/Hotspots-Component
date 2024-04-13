import React, { useEffect, useState } from 'react';
import HotspotContainer from './components/HotspotContainer';
import { IHotspotImageProps } from './types/hotspotTypes';
import './App.css';
import VideoComponent from './components/VideoComponent';


function App() {
  const [hotspotsData, setHotspotsData] = useState<IHotspotImageProps[]>([]);

  useEffect(() => {
    const hotspotsDataElement = document.getElementById('hotspotsData');
    if (hotspotsDataElement) {
      const data = JSON.parse(hotspotsDataElement.textContent || '');
      setHotspotsData(data);
    }
  }, []);

  const dormitorData = hotspotsData.find((data) => data.id === 'dormitor');
  const livingData = hotspotsData.find((data) => data.id === 'living');
  

  return (
    <div className="App">
      <h1>Mobexpert</h1>
      {dormitorData && <HotspotContainer {...dormitorData} />}
      {livingData && <HotspotContainer {...livingData} />}

      <h1 style={{marginTop:"300px"}}>Hover to Load Video</h1>
      <VideoComponent
        src="./assets/video/video.mp4"
        poster="/assets/video/poster2.png"
      />
    </div>
  );
}

export default App;
