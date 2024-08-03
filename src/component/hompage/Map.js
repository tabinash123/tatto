import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  // margin: 0 auto;
  position: relative;
`;

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 40%; // Adjust this value to change the aspect ratio
  // height: 0;
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
  // Replace with your desired location
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.7235154427245!2d-73.98697832357698!3d40.63147047146849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1628137205123!5m2!1sen!2s";

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
        <ZoomButton>+</ZoomButton>
        <ZoomButton>−</ZoomButton>
      </ZoomControls>
    </MapContainer>
  );
};

export default MapComponent;