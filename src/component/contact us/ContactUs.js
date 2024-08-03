import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  color: white;
  padding: 40px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  // margin-bottom: 20px;
  font-weight: normal;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  // margin-bottom: 40px;
  color: #aaa;
  font-size: 14px;
  max-width: 600px;
`;

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const InfoBlock = styled.div``;

const InfoTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: normal;
`;

const InfoText = styled.p`
  // margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #aaa;
  
  &::before {
    content: '${props => props.icon}';
    margin-right: 10px;
    color: #e74c3c;
  }
`;

const SocialMediaSection = styled.div`
  // margin-top: 40px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialMediaLink = styled.a`
  color: #aaa;
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
  }
`;

const ContactUs = () => {
  return (
    <ContactSection>
      <Title>CONTACT US</Title>
      <Description>
        You can contact us any way that is convenient for you. We are available 24/7 via phone or email.
        You can also visit our salon personally during our opening hours.
      </Description>
      <InfoSection>
        <InfoBlock>
          <InfoTitle>Address</InfoTitle>
          <InfoText icon="📍">
            Washington, USA 6036 Richmond hwy., Alexandria, VA, 2230
          </InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoTitle>Phones</InfoTitle>
          <InfoText icon="📞">
            +1 (409) 987-5874, +1(409) 987-5884
          </InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoTitle>E-mail</InfoTitle>
          <InfoText icon="✉️">
            info@demolink.org
          </InfoText>
        </InfoBlock>
        <InfoBlock>
          <InfoTitle>Opening Hours</InfoTitle>
          <InfoText icon="🕒">
            Mon-Fri: 9 am – 6 pm<br />
            Saturday: 9 am – 4 pm<br />
            Sunday: Closed
          </InfoText>
        </InfoBlock>
      </InfoSection>
      <SocialMediaSection>
        <InfoTitle>Follow Us</InfoTitle>
        <SocialMediaLinks>
          <SocialMediaLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} />
          </SocialMediaLink>
          <SocialMediaLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </SocialMediaLink>
          <SocialMediaLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter size={24} />
          </SocialMediaLink>
          <SocialMediaLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </SocialMediaLink>
        </SocialMediaLinks>
      </SocialMediaSection>
    </ContactSection>
  );
};

export default ContactUs;