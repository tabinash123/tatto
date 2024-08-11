import React from 'react';
import styled from 'styled-components';
import image from '../../assets/shop.jpg';

import '@fontsource/cinzel-decorative';
import '@fontsource/fira-sans';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const WhoWeAreSection = styled.section`
  display: flex;
  background-color: #111;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-bottom: 3px solid #d4af37;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #d4af37 25%, transparent 25%) -50px 0,
                linear-gradient(-45deg, #d4af37 25%, transparent 25%) -50px 0,
                linear-gradient(45deg, transparent 75%, #d4af37 75%),
                linear-gradient(-45deg, transparent 75%, #d4af37 75%);
    background-size: 100px 100px;
    opacity: 0.05;
    z-index: 1;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(50%) contrast(120%);
  transition: filter 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: grayscale(0%) contrast(100%);
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 60px;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px;
  }
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 30px;
  position: relative;
  padding-left: 20px;
  text-transform: uppercase;
  color: #d4af37;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 80%;
    width: 4px;
    background-color: #d4af37;
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: #cccccc;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #d4af37;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: 40px;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 8px;
  padding: 20px;
  border: 1px solid rgba(212, 175, 55, 0.3);

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const InfoColumn = styled.div`
  flex: 1;
  &:first-child {
    margin-right: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    &:first-child {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

const InfoTitle = styled.h3`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 18px;
  color: #d4af37;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  
  &::before {
    content: '${props => props.icon}';
    margin-right: 10px;
    font-size: 24px;
  }
`;

const InfoText = styled.p`
  font-family: 'Fira Sans', sans-serif;
  margin: 8px 0;
  font-size: 14px;
  color: #cccccc;
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37;
  }
`;

const WhoWeAre = () => {
  return (
    <WhoWeAreSection>
      <ImageContainer>
        <Image src={image} alt="Tattoo artist's work" />
      </ImageContainer>
      <ContentContainer>
        <Title>WHO WE ARE</Title>
        <Description>
          We are master artisans of ink, dedicated to transforming your vision into timeless body art. Our studio is a sanctuary where creativity flourishes and personal expression takes form.
        </Description>
        <Description>
          With years of expertise and an unwavering commitment to excellence, we push the boundaries of tattoo artistry while upholding the highest standards of safety and professionalism.
        </Description>
        <InfoContainer>
          <InfoColumn>
            <InfoTitle icon="🕒">Studio Hours</InfoTitle>
            <InfoText>Monday-Friday: 10:00am-8:00pm</InfoText>
            <InfoText>Saturday: 11:00am-6:00pm</InfoText>
            <InfoText>Sunday: By Appointment Only</InfoText>
          </InfoColumn>
          <InfoColumn>
            <InfoTitle icon="📍">Find Us</InfoTitle>
            <InfoText>123 Ink Street, Artville</InfoText>
            <InfoText>Tattoo County, TC 12345</InfoText>
            <InfoText>Phone: (555) 123-4567</InfoText>
          </InfoColumn>
        </InfoContainer>
      </ContentContainer>
    </WhoWeAreSection>
  );
};

export default WhoWeAre;