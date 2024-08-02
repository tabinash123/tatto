import styled from 'styled-components';
import About from '../../assets/about.jpg';

const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 40px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 36px;
  color: #f0a500;
  font-weight: bold;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 14px;
`;

const ImageWrapper = styled.div`
  flex: none;
  width: 500px; // Fixed width
  height: 350px; // Fixed height
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 8px solid #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AboutUs = () => (
  <AboutSection>
    <Title>About Us</Title>
    <ContentWrapper>
      <TextContent>
        <Subtitle>We are a professional team of tattoists</Subtitle>
        <Description>
          Our tattoo salon is a home for talented tattoo artists ready to turn your body into 
          a canvas with beautiful pictures on it.
        </Description>
        <Description>
          To get your body inked in our tattoo salon, you may contact us via contact form 
          on our website, or by phone. We welcome appointments, as well as walk-ins. We 
          have gathered the best team of tattoo artists who work full time in our salon, and 
          we have fantastic guest artists visiting our shop.
        </Description>
        <Stats>
          <StatItem>
            <StatNumber>8600</StatNumber>
            <StatLabel>Reviews</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>1580</StatNumber>
            <StatLabel>Tattoos</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>975</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
        </Stats>
      </TextContent>
      <ImageWrapper>
        <Image src={About} alt="Tattoo artist at work" />
      </ImageWrapper>
    </ContentWrapper>
  </AboutSection>
);

export default AboutUs;