import styled from 'styled-components';
import artist from '../../assets/pmporiqo.png'

const HeroSection = styled.section`
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  background-image: url(${artist});
  background-size: cover;
  background-position: center;
  height: 60vh; // Set to half of the viewport height for mobile

  @media (min-width: 769px) {
    background-image: none;
    flex-direction: row;
    padding: 3rem 4rem;
    height: auto; // Reset height for larger screens
  }

  @media (min-width: 1025px) {
    padding: 0rem 6rem;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;

  @media (min-width: 769px) {
    background-color: transparent;
    padding: 0;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  line-height: 1;
  font-weight: bold;
  
  @media (min-width: 769px) {
    font-size: 3rem;
  }

  @media (min-width: 1025px) {
    font-size: 4rem;
  }

  span {
    color: #ff3b3b;
  }
`;

const Subheading = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0 1rem;
  font-weight: normal;

  @media (min-width: 769px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1025px) {
    font-size: 2rem;
  }
`;

const Tagline = styled.p`
  color: #a0a0a0;
  max-width: 100%;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (min-width: 769px) {
    max-width: 80%;
    font-size: 1rem;
  }

  @media (min-width: 1025px) {
    max-width: 70%;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background-color: #ff3b3b;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;

  @media (min-width: 769px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: 1025px) {
    padding: 0.75rem 2rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;

  @media (min-width: 769px) {
    font-size: 0.9rem;
    flex-direction: row;
    gap: 2rem;
    bottom: 2rem;
    left: 4rem;
    right: auto;
    background-color: transparent;
    padding: 0;
  }

  @media (min-width: 1025px) {
    left: 6rem;
  }
`;

const ImageArea = styled.div`
  display: none;

  @media (min-width: 769px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
      max-width: 100%;
      max-height: 400px;
      object-fit: contain;
    }
  }

  @media (min-width: 1025px) {
    img {
      max-height: 500px;
    }
  }
`;

const Hero = () => (
  <HeroSection>
    <ContentArea>
      <div>
        <Logo><span>DARK</span> INK</Logo>
        <Subheading>TATTOO SALON</Subheading>
        <Tagline>Our tattooists use 100% safe technology to create stunning artworks. They use certified equipment, which guarantees the best possible results.</Tagline>
        <CTAButton>READ MORE</CTAButton>
      </div>
    </ContentArea>
    <ImageArea>
      <img src={artist} alt="Tattoo artist" />
    </ImageArea>
    <ContactInfo>
      <p>Free Call: (073) 123-12-12</p>
      <p>Opening Hours: 10 am-8 pm, Mn-Fr</p>
    </ContactInfo>
  </HeroSection>
);

export default Hero;