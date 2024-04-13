import React, { useEffect, useState } from 'react';
import HotspotContainer from './components/HotspotContainer';
import { HotspotImageProps } from './types/hotspotTypes';
import './App.css';

function App() {
  const [hotspotsData, setHotspotsData] = useState<HotspotImageProps[]>([]);

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
      {dormitorData && <HotspotContainer {...dormitorData} />}
      {livingData && <HotspotContainer {...livingData} />}
    </div>
  );
}

export default App;
