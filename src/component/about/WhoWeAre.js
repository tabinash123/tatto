import React from 'react';
import styled from 'styled-components';
import image from '../../assets/artist.png';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const WhoWeAreSection = styled.section`
  display: flex;
  background-color: #1a1a1a;
  color: #ffffff;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 400px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 40px 60px 40px 50px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
  position: relative;
  padding-left: 15px;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: #ff0000;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-top: 30px;


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
  font-size: 13px;
  color: #ff0000;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  text-transform: uppercase;
  font-weight: 600;
  
  &::before {
    content: '🕒';
    margin-right: 8px;
    font-size: 16px;
  }
`;

const InfoText = styled.p`
  margin: 4px 0;
  font-size: 13px;
  color: #cccccc;
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
          Cras ut vestibulum tortor. In in nisi sit amet metus varius pulvinar in vitae ipsum nec mi sollicitudin Fusce turpis massa,
        </Description>
        <Description>
          In ante sapien, dapibus luctus aliquet a, accumsan sit amet dolor. Mauris id facilisis dolor. Donec malesuada, est eu dignissim eleifend, est nulla dignissim nisl. Fusce turpis massa, mattis sit.
        </Description>
        <InfoContainer>
          <InfoColumn>
            <InfoTitle>Opening Hours</InfoTitle>
            <InfoText>Monday-Friday: 8:00am-8:00pm</InfoText>
            <InfoText>Saturday: 8:00am-6:00pm</InfoText>
            <InfoText>Sunday: Closed</InfoText>
          </InfoColumn>
          <InfoColumn>
            <InfoTitle>Our Location</InfoTitle>
            <InfoText>Address: Washington, USA 6036</InfoText>
            <InfoText>Richmond hwy, VA, 2230</InfoText>
            <InfoText>Offices: 284-290</InfoText>
          </InfoColumn>
        </InfoContainer>
      </ContentContainer>
    </WhoWeAreSection>
  );
};

export default WhoWeAre;