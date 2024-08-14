import React from 'react';
import styled, { keyframes } from 'styled-components';
import artist from '../../assets/shop.jpg';

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

const AboutSection = styled.section`
  // max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
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

  @media (min-width: 768px) {
    padding: 60px 40px;
  }

  @media (min-width: 1024px) {
    padding: 80px 60px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 60px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Subtitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #f2d472;
  margin-bottom: 15px;
  font-weight: 300;
  font-style: italic;

  animation: ${slideIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-family: 'Cormorant Garamond', serif;
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 1rem;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #d4af37;
  }

  animation: ${slideIn} 1s ease-out 0.6s both;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 30px;

  animation: ${fadeIn} 1s ease-out 1s both;

  @media (min-width: 768px) {
    gap: 20px;
    margin-top: 40px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 15px;
  background-color: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
  }

  @media (min-width: 1024px) {
    padding: 20px;
  }
`;

const StatNumber = styled.div`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 1.5rem;
  color: #d4af37;
  font-weight: bold;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-family: 'Cormorant Garamond', serif;
  color: #f2d472;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 0.85rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 250px;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #d4af37;
    z-index: 1;
  }

  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    height: 100%;
    min-height: 350px;
  }

  @media (min-width: 1024px) {
    min-height: 450px;
    &::before {
      top: 20px;
      left: 20px;
      right: -20px;
      bottom: -20px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  filter: grayscale(30%) contrast(110%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%) contrast(100%);
  }
`;

const AboutUs = () => (
  <AboutSection>
    <Grid>
      <ContentArea>
        <Title>The Art of Ink</Title>
        <Subtitle>Crafting Timeless Art Since 2018</Subtitle>
        <Description>
          Founded by passionate artist Name of the Kamal Sing Limbu, Teyungs Tattoo Studio has become one of Kathmandu's premier tattoo studios, offering expertise in diverse tattoo styles and piercings.
        </Description>
        <Description>
          Our team of skilled artists excels in both modern and traditional designs, constantly evolving our techniques to create true masterpieces on skin.
        </Description>
        <StatsGrid>
          <StatItem>
            <StatNumber>7+</StatNumber>
            <StatLabel>Years of Artistry</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>100+</StatNumber>
            <StatLabel>Unique Designs</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>#1</StatNumber>
            <StatLabel>in Kathmandu</StatLabel>
          </StatItem>
        </StatsGrid>
      </ContentArea>
      <ImageWrapper>
        <Image src={artist} alt="Teyungs Tattoo Studio" />
      </ImageWrapper>
    </Grid>
  </AboutSection>
);

export default AboutUs;