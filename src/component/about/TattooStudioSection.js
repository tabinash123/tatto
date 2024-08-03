import React from 'react';
import styled from 'styled-components';
import tattooArtistImage from '../../assets/services/3.jpg';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const SectionContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 15px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  width: 450px;
  height: 400px;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 250px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageBorder = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: 20px;
  bottom: 20px;
  border-left: 20px solid #000;
  border-top: 20px solid #000;
  z-index: -1;

  @media (max-width: ${breakpoints.mobile}) {
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
    border-left-width: 10px;
    border-top-width: 10px;
  }
`;

const PlusStrip = styled.div`
  position: absolute;
  top: 0;
  left: -40px;
  width: 20px;
  height: 100%;
  background-color: #000;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: #fff;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-left: 60px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 0;
  }
`;

const SubTitle = styled.h3`
  color: #8B0000;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #8B0000;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const TattooStudioSection = () => {
  return (
    <SectionContainer>
      <PlusStrip />
      <ImageContainer>
        <Image src={tattooArtistImage} alt="Tattoo artist" />
        <ImageBorder />
      </ImageContainer>
      <ContentContainer>
        <SubTitle>BEST TATTOO STUDIO</SubTitle>
        <Title>Our mission is to provide you with quality</Title>
        <Description>
          We are a multicultural and customer centric trip support company that is always
          striving for excellence in the services we provide. Our testament that we will never
          tire in serving our clients around the clock is our team's creed and is instilled in our
          core values.
        </Description>
        <Description>
          We are one of the few companies that can truly offer worldwide trip support
          services with the highest service standards, is ISO certified and cost efficient, and
          will effectively allow you to save valuable time and resources.
        </Description>
        <Button>READ MORE</Button>
      </ContentContainer>
    </SectionContainer>
  );
};

export default TattooStudioSection;