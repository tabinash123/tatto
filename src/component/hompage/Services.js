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

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TextContent = styled.div`
  flex: 0 0 48%;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: #e57373;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
`;

const FirstRowImages = styled.div`
  flex: 0 0 48%;
  display: flex;
  justify-content: space-between;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceItem = styled.div`
  position: relative;
  width: ${props => props.firstRow ? '48%' : '23%'};
  height: ${props => props.firstRow ? '200px' : '150px'};
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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-size: 14px;
`;

const services = [
  { name: 'TATTOOING', image: tattooing, firstRow: true },
  { name: 'PIERCING', image: piercing, firstRow: true },
  { name: 'MODIFICATIONS', image: Modification },
  { name: 'TATTOO DESIGN', image: design },
  { name: 'CONSULTATION', image: consultation },
  { name: 'TRIBAL TATTOO', image: tribal },
];

const TattooServices = () => {
  const firstRowServices = services.filter(service => service.firstRow);
  const secondRowServices = services.filter(service => !service.firstRow);

  return (
    <ServicesSection>
      <SectionHeader>
        <RedLine />
        <Title>
          <TitleNumber>01</TitleNumber>
          OUR BEST SERVICES
        </Title>
      </SectionHeader>
      <FirstRow>
        <TextContent>
          <Description>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.
          </Description>
          <Button>MORE SERVICES</Button>
        </TextContent>
        <FirstRowImages>
          {firstRowServices.map((service, index) => (
            <ServiceItem key={index} firstRow={true}>
              <ServiceImage src={service.image} alt={service.name} />
              <ServiceLabel>{service.name}</ServiceLabel>
            </ServiceItem>
          ))}
        </FirstRowImages>
      </FirstRow>
      <SecondRow>
        {secondRowServices.map((service, index) => (
          <ServiceItem key={index} firstRow={false}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceLabel>{service.name}</ServiceLabel>
          </ServiceItem>
        ))}
      </SecondRow>
    </ServicesSection>
  );
};

export default TattooServices;