import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tattooVideo from '../../assets/video-11cb5fe969f36e57c8ab393b9dcce3f7-V.mp4'; 

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};
const HeroSection = styled.section`
position: relative;
  height: 50vh;
  width: 100%;
  overflow: hidden;
  background-color: #111;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
opacity: 0.7;
  `;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.4) 30%,
    rgba(0, 0, 0, 0.1) 100%
  );
  `;

const TitleWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
//   text-align: center;
  z-index: 2;
  padding: 0 20px;
`;

const Title = styled(motion.h1)`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  color: #d4af37;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(212, 175, 55, 0.5);
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 2.5rem;
  }
    @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
    }
      @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    }`;
    
const TattooHeroComponent = () => {
  return (
    <HeroSection>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={tattooVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <TitleWrapper>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Laser Tattoo Removal
        </Title>
      </TitleWrapper>
    </HeroSection>
    );
};

export default TattooHeroComponent;