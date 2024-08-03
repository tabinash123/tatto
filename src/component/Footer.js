import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPinterest } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #111;
  color: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Section = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    padding-right: 20px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    padding-right: 0;
  }
`;

const WorkTimeSection = styled(Section)`
  max-width: 300px; // Adjust this value as needed
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

const ContactInfo = styled.p`
  color: #888;
  margin: 5px 0;
`;

const PhoneNumber = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

const Email = styled.p`
  color: #888;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const WorkTimeItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const Day = styled.span`
  color: #888;
  flex: 1;
`;

const Time = styled.span`
  color: ${props => props.closed ? '#0f0' : '#888'};
  text-align: right;
  flex: 1;
`;

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 10px;
  background-color: #222;
  border: 1px solid #444;
  color: #fff;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  background-color: #8B4513;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <Title>CONTACT</Title>
        <ContactInfo>0665 Broadway NY, New York 10001</ContactInfo>
        <ContactInfo>United States of America</ContactInfo>
        <PhoneNumber>855 100 4444</PhoneNumber>
        <Email>info@tattoo.com</Email>
        <SocialIcons>
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaFacebookF />
          <FaPinterest />
        </SocialIcons>
      </Section>
      
      <WorkTimeSection>
        <Title>WORK TIME</Title>
        <WorkTimeItem><Day>Monday</Day><Time>10:00 - 20:00</Time></WorkTimeItem>
        <WorkTimeItem><Day>Tuesday</Day><Time>10:00 - 20:00</Time></WorkTimeItem>
        <WorkTimeItem><Day>Thursday</Day><Time>10:00 - 20:00</Time></WorkTimeItem>
        <WorkTimeItem><Day>Friday</Day><Time>10:00 - 20:00</Time></WorkTimeItem>
        <WorkTimeItem><Day>Saturday</Day><Time>10:00 - 20:00</Time></WorkTimeItem>
        <WorkTimeItem><Day>Weekend</Day><Time closed>Closed</Time></WorkTimeItem>
      </WorkTimeSection>
      
    </FooterContainer>
  );
};

export default Footer;