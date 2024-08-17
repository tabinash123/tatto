import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// Replace this with your tattoo-related video
import tattooVideo from '../../assets/gallary/video-006f44010774049daa42fcf626764876-V.mp4';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const HeroSection = styled.section`
  position: relative;
 height: 80vh;
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
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.6) 60%,
    rgba(0, 0, 0, 0.4) 100%
  );
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path_to_your_tattoo_pattern.png');
    opacity: 0.05;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 80px 10%;
  color: #f5f5f5;
  z-index: 2;
  @media (max-width: ${breakpoints.desktop}) {
    padding: 60px 8%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 6%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 5%;
  }
  `;
  const SubHeader = styled(motion.h2)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #cccccc;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
    letter-spacing: 5px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
    letter-spacing: 4px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
    letter-spacing: 3px;
  }
  `;

const Title = styled(motion.h1)`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.1;
   margin-bottom: 20px;
  text-transform: uppercase;
  color: #d4af37;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(212, 175, 55, 0.5);
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 4.5rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
  `;
  const Description = styled(motion.p)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  max-width: 600px;
  margin-bottom: 30px;
   line-height: 1.6;
  color: #cccccc;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
    max-width: 550px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
    max-width: 100%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background-color: #d4af37;
  color: #000;
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 30px;
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:hover {
    background-color: #fff;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(212, 175, 55, 0.3);
  }
   @media (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
    padding: 10px 25px;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
  
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 8px 18px;
    letter-spacing: 1px;
  }
  `;

const ArtisticElement = styled.div`
 position: absolute;
  top: 40px;
  right: 40px;
  width: 120px;
  height: 120px;
  background-image: url('path_to_your_tattoo_icon.png');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7;
  z-index: 2;
   @media (max-width: ${breakpoints.desktop}) {
    width: 100px;
    height: 100px;
    top: 30px;
    right: 30px;
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    width: 80px;
    height: 80px;
    top: 20px;
    right: 20px;
  }
   @media (max-width: ${breakpoints.mobile}) {
    width: 60px;
    height: 60px;
    top: 15px;
    right: 15px;
  }
  `;
  
const TattooHeroComponent = () => {
  return (
    <HeroSection>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={tattooVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <ArtisticElement />
      <ContentWrapper>
        <SubHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Turn your ideas into living art
        </SubHeader>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Teyungs Tattoo Studio
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          From traditional Nepali designs to modern 
          masterpieces, we bring your vision to life. Experience top-notch tattooing 
          in the heart of Kathmandu.
        </Description>
        <CTAButton
          href=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Explore Our Art
        </CTAButton>
      </ContentWrapper>
    </HeroSection>
     );
};

export default TattooHeroComponent;
