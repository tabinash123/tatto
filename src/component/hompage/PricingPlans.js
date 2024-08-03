import React, { useState } from 'react';
import styled from 'styled-components';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const PricingSection = styled.section`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 95%;
    padding: 15px;
  }
`;

const Title = styled.h2`
  color: #e57373;
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: normal;
  &::before {
    content: '03 ';
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
  max-width: 70%;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    max-width: 100%;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  width: 40%;
`;

const RightColumn = styled.div`
  width: 55%;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 15px;
  }
`;

const ServiceItem = styled.div`
  background-color: ${props => props.active ? '#e57373' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : 'black'};
  padding: 15px;
  margin-bottom: 10px;
  position: relative;
  font-weight: bold;
  
  &::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid ${props => props.active ? '#e57373' : '#f5f5f5'};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    padding: 12px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    padding: 10px;
  }
`;

const TattooItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px dotted #ccc;
  padding-bottom: 10px;
`;

const TattooInfo = styled.div``;

const TattooName = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: normal;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

const TattooDescription = styled.p`
  font-size: 12px;
  color: #666;
  margin: 5px 0 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 11px;
  }
`;

const Price = styled.div`
  background-color: #333;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (max-width: ${breakpoints.mobile}) {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
`;

const PricingPlans = () => {
  const [activeOption, setActiveOption] = useState('TATTOO DESIGN');

  const pricingOptions = [
    'PIERCINGS & MODS',
    'TATTOO DESIGN',
    'JEWELRY & MERCH',
    'TATTOO MODIFICATIONS',
    'PERMANENT MAKE-UP'
  ];

  const tattooDesigns = [
    { name: 'ARM TATTOO', price: 20 },
    { name: 'FOOT TATTOO', price: 20 },
    { name: 'BACK TATTOO', price: 20 },
    { name: 'REALISM TATTOO', price: 20 },
    { name: 'LEG TATTOOS', price: 20 }
  ];

  return (
    <PricingSection>
      <Title>OUR PRICING PLANS</Title>
      <Subtitle>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.</Subtitle>
      <FlexContainer>
        <LeftColumn>
          {pricingOptions.map(option => (
            <ServiceItem 
              key={option} 
              active={option === activeOption}
              onClick={() => setActiveOption(option)}
            >
              {option}
            </ServiceItem>
          ))}
        </LeftColumn>
        <RightColumn>
          <h3>{activeOption}</h3>
          {tattooDesigns.map(tattoo => (
            <TattooItem key={tattoo.name}>
              <TattooInfo>
                <TattooName>{tattoo.name}</TattooName>
                {/* <TattooDescription>Proin gravida nibh vel velit auctor aliquet.</TattooDescription> */}
              </TattooInfo>
              <Price>${tattoo.price}</Price>
            </TattooItem>
          ))}
        </RightColumn>
      </FlexContainer>
    </PricingSection>
  );
};


export default PricingPlans;