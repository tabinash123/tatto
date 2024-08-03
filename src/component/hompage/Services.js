import React from 'react';
import styled from 'styled-components';
import tattooing from '../../assets/services/1.jpg';
import piercing from '../../assets/services/2.jpg';
import Modification from '../../assets/services/5.jpg';
import design from '../../assets/services/6.jpg';
import consultation from '../../assets/services/3.jpg';
import tribal from '../../assets/services/4.jpg';

const ServicesSection = styled.section`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RedLine = styled.div`
  width: 40px;
  height: 2px;
  background-color: #e57373;
  margin-right: 15px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin: 0;
  font-weight: 700;
`;

const TitleNumber = styled.span`
  color: #e57373;
  font-weight: 300;
  margin-right: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
  gap: 5px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Description = styled.p`
  color: #666;
  margin: auto auto;
  line-height: 1.6;
  grid-column: span 2;
  @media (max-width: 768px) {
    grid-column: span 2;
  
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  @media (max-width: 768px) {
  // width: 150px;
    height: 150px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceLabel = styled.div`
  position: absolute;
  bottom: -10px;
  left: 10px;
  background-color: white;
  padding: 8px 15px;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
   @media (max-width: 768px) {
    // height: 150px;
    width: 100%;
    left: 0;
  // font-weight: bold;
  font-size: 10px;
  }
`;

const services = [
  { name: 'TATTOOING', image: tattooing },
  { name: 'PIERCING', image: piercing },
  { name: 'MODIFICATIONS', image: Modification },
  { name: 'TATTOO DESIGN', image: design },
  { name: 'CONSULTATION', image: consultation },
  { name: 'CONSULTATION', image: consultation },
  { name: 'TRIBAL TATTOO', image: tribal },
  { name: 'CONSULTATION', image: consultation },
  { name: 'TRIBAL TATTOO', image: tribal },
  { name: 'TRIBAL TATTOO', image: tribal },
];

const TattooServices = () => {
  return (
    <ServicesSection>
      <SectionHeader>
        <RedLine />
        <Title>
          <TitleNumber>01</TitleNumber>
          OUR BEST SERVICES
        </Title>
      </SectionHeader>
      <GridContainer>
        <Description>
          We love what we do and we put our heart and soul into every tattoo we ink.
          We welcome people's personal concepts and ideas: thought is free.
          We are one of the best tattoo studio 
      
        </Description>
        {services.slice(0, 1).map((service, index) => (
          <ServiceItem key={index}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceLabel>{service.name}</ServiceLabel>
          </ServiceItem>
        ))}
        {services.slice(1).map((service, index) => (
          <ServiceItem key={index}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceLabel>{service.name}</ServiceLabel>
          </ServiceItem>
        ))}
      </GridContainer>
    </ServicesSection>
  );
};

export default TattooServices;
