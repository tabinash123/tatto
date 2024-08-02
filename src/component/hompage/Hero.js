import styled from 'styled-components';
import artist from '../../assets/artist.png'

const HeroSection = styled.section`
  background-color: #000000;
  color: white;
  display: flex;
  padding: 4rem 6rem;
  position: relative;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0;
  line-height: 1;
  font-weight: bold;
  span {
    color: #ff3b3b;
  }
`;

const Subheading = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0 1rem;
  font-weight: normal;
`;

const Tagline = styled.p`
  color: #a0a0a0;
  max-width: 70%;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background-color: #ff3b3b;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  cursor: pointer;
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
  position: absolute;
  bottom: 2rem;
  left: 6rem;
  display: flex;
  gap: 2rem;
`;

const ImageArea = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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