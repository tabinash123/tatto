// GoogleMap.js
import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust the height as needed */
  border: 2px solid #ccc; /* Optional: Add border for styling */
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const GoogleMap = ({ location }) => {
  const src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location)}`;

  return (
    <MapContainer>
      <Iframe
        src={src}
        allowFullScreen
        loading="lazy"
      ></Iframe>
    </MapContainer>
  );
};

export default GoogleMap;
