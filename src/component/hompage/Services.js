import React from 'react';
import styled, { keyframes } from 'styled-components';
import tattooing from '../../assets/services/tattooing.jpg';
import piercing from '../../assets/services/piercing.jpg';
import Modification from '../../assets/services/modification.jpg';
import design from '../../assets/services/design.jpg';
import consultation from '../../assets/services/consultation.jpg';
import tattoTraining from '../../assets/services/8.jpg';
import temporary from '../../assets/services/hennaTattooImage.jpg';
import removal from '../../assets/services/removal.jpg';

// Import custom fonts
import '@fontsource/cinzel-decorative';
import '@fontsource/cormorant-garamond';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;
const ServicesSection = styled.section`
  max-width: 1200px;
  margin: 0px auto;
  padding: 60px 40px;
  background-color: #111;
  color: #f5f5f5;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path_to_your_tattoo_pattern.png');
    opacity: 0.05;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin: 0px auto;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2rem;
  color: #d4af37;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #d4af37, transparent);
  }

  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const TitleNumber = styled.span`
  color: #f2d472;
  font-weight: 300;
  margin-right: 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

const Description = styled.p`
  font-family: 'Cormorant Garamond', serif;
  color: #cccccc;
  margin: 0 0 40px 0;
  line-height: 1.8;
  grid-column: 1 / -1;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.5s ease forwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  ${ServiceItem}:hover & {
    transform: scale(1.1);
    filter: brightness(70%) contrast(120%);
  }
`;

const ServiceLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  font-family: 'Cinzel Decorative', cursive;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  color: #d4af37;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;

  ${ServiceItem}:hover & {
    padding-bottom: 30px;
    color: #f2d472;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
  }
`;

const services = [
  { name: 'Tattooing', image: tattooing },
  { name: 'Piercing', image: piercing },
  { name: 'Modifications', image: Modification },
  { name: 'Tattoo Design', image: design },
  { name: 'Consultation', image: consultation },
  { name: 'Tatto Training', image: tattoTraining },
  { name: 'Temporary', image: temporary },
  { name: 'Laser Removal', image: removal },
];

const TattooServices = () => {
  return (
    <ServicesSection>
      <SectionHeader>
        <Title>
          Our Services
        </Title>
      </SectionHeader>
      <Description>
        We don't just create tattoos; we craft living art on your skin. Our passion flows through every line, 
        shading, and color we apply. From concept to completion, we're dedicated to bringing your vision to life 
        with unparalleled skill and creativity.
      </Description>
      <GridContainer>
        {services.map((service, index) => (
          <ServiceItem key={index} style={{animationDelay: `${index * 0.1}s`}}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceLabel>{service.name}</ServiceLabel>
          </ServiceItem>
        ))}
      </GridContainer>
    </ServicesSection>
  );
};

export default TattooServices;