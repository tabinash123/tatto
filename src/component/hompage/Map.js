import React, { useState } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  background-color: #000000;
  width: 100%;
  height: 300px;
  position: relative;
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const ZoomControls = styled.div`
  position: absolute;
  right: 10px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
`;

const ZoomButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: 1px solid #ccc;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-bottom: none;
  }
`;

const MapComponent = () => {
  const [zoomLevel, setZoomLevel] = useState(15); // Default zoom level

  // Update the map URL with the zoom level and the coordinates for Cahabahil, Kathmandu
const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0466859857897!2d85.34426097617189!3d27.715877082784078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzU3LjIiTiA4NcKwMjAnNDcuMiJF!5e0!3m2!1sen!2s!4v1628137205123!5m2!1sen!2s&zoom=${zoomLevel}`;  const handleZoomIn = () => {
    setZoomLevel(prevZoom => prevZoom + 1);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoom => Math.max(prevZoom - 1, 0)); // Ensure zoom level doesn't go below 0
  };

  return (
    <MapContainer>
      <MapWrapper>
        <StyledIframe 
          src={mapUrl} 
          allowFullScreen="" 
          loading="lazy"
          title="Google Map"
        />
      </MapWrapper>
      <ZoomControls>
        <ZoomButton onClick={handleZoomIn}>+</ZoomButton>
        <ZoomButton onClick={handleZoomOut}>−</ZoomButton>
      </ZoomControls>
    </MapContainer>
  );
};

export default MapComponent;
