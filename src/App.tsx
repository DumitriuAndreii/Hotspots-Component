import React, { useEffect, useState } from 'react';
import HotspotContainer from './components/HotspotContainer';
import { IHotspotImageProps } from './types/hotspotTypes';
import './App.css';

function App() {
  const [hotspotsData, setHotspotsData] = useState<IHotspotImageProps[]>([]);

  useEffect(() => {
    // Assuming 'hotspotsData' is the ID of the <script> tag in your index.html
    const hotspotsDataElement = document.getElementById('hotspotsData');
    if (hotspotsDataElement) {
      const data = JSON.parse(hotspotsDataElement.textContent || '');
      setHotspotsData(data);
    }
  }, []);

  // Find the data for the specific components
  const dormitorData = hotspotsData.find((data) => data.id === 'dormitor');
  const livingData = hotspotsData.find((data) => data.id === 'living');
  

  return (
    <div className="App">
      <h1>Mobexpert</h1>
      {dormitorData && <HotspotContainer {...dormitorData} />}
      {livingData && <HotspotContainer {...livingData} />}
    </div>
  );
}

export default App;
