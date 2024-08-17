import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


const FooterContainer = styled.footer`
  background-color: #111;
  color: #d4af37;
  padding: 60px 20px 40px;
  position: relative;
  overflow: hidden;
  font-family: 'Fira Sans', sans-serif;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #d4af37, #f2d472, #d4af37);
  }
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path_to_your_tattoo_pattern.png');
    opacity: 0.05;
    z-index: 0;
  }
  `;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
    max-width: 1200px;
  margin: 0 auto;
    @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
      }
`;

const Section = styled.div`
 flex: 1;
  margin-bottom: 40px;
  min-width: 250px;
   @media (min-width: 768px) {
    flex: 0 0 50%;
    padding-right: 40px;
    }
  @media (min-width: 1024px) {
    flex: 1;
      }
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 25px;
  font-family: 'Cinzel Decorative', cursive;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #f2d472;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  padding-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #d4af37;
  }
  `;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  font-size: 16px;
    transition: color 0.3s ease;
  &:hover {
    color: #f2d472;}
    `;
    const ContactIcon = styled.span`
  margin-right: 10px;
  color: #f2d472;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  `;

const SocialIcon = styled.a`
  color: #d4af37;
  font-size: 24px;
  transition: all 0.3s ease;
    &:hover {
    color: #f2d472;
    transform: scale(1.2);
     }
`;

const WorkTimeItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 0;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  `;

const Day = styled.span`
  color: #d4af37;
`;
const Time = styled.span`
  color: ${props => props.closed ? '#e74c3c' : '#f2d472'};
  font-weight: ${props => props.closed ? 'bold' : 'normal'};
  `;
const SubscribeForm = styled.form`
 display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #d4af37;

  color: #fff;
  margin-bottom: 10px;
  font-size: 16px;
    &::placeholder {
    color: rgba(212, 175, 55, 0.7);
     }
`;

const SubscribeButton = styled.button`
  padding: 12px 20px;
  background-color: #d4af37;
  color: #111;
  border: none;
   cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f2d472;
    box-shadow: 0 0 10px rgba(242, 212, 114, 0.5);
    }
    `;
    
const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(212, 175, 55, 0.3);
  color: #888;
  font-size: 14px;
  `;
const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <Section>
          <Title>Contact Us</Title>
          <ContactInfo>
            <ContactIcon><FaMapMarkerAlt /></ContactIcon>
            Peepal Bot, Chabahil,Kathmandu
          </ContactInfo>
          <ContactInfo>
            <ContactIcon><FaPhone /></ContactIcon>
            9823024510
          </ContactInfo>
          <ContactInfo>
            <ContactIcon><FaEnvelope /></ContactIcon>
            <a href="mailto:teyungstattoink@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>teyungstattoink@gmail.com</a>
          </ContactInfo>
          <SocialIcons>
            <SocialIcon href="https://www.instagram.com/teyung_tattoo_removal?igsh=MWYzdmNkZDlzNDR2ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>
            <SocialIcon href="https://www.facebook.com/profile.php?id=100045144070566&locale=np" target="_blank" rel="noopener noreferrer"><FaFacebookF /></SocialIcon>
          </SocialIcons>
        </Section>
        <Section>
          <Title>Studio Hours</Title>
          <WorkTimeItem><Day>Sunday - Saturday</Day><Time>10:00 Am - 05:00 Pm</Time></WorkTimeItem>
          {/* <WorkTimeItem><Day>Saturday</Day><Time>1:00 Am - 05:00 Pm</Time></WorkTimeItem> */}
        </Section>
        <Section>
          <Title>Quick Links</Title>
          <ContactInfo><a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></ContactInfo>
          <ContactInfo><a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></ContactInfo>
          <ContactInfo><a href="/gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</a></ContactInfo>
          <ContactInfo><a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></ContactInfo>
        </Section>
        <Section>
          <Title>Stay Connected</Title>
          <p style={{ marginBottom: '15px' }}>Subscribe for exclusive designs, artist features, and special offers.</p>
          <SubscribeForm>
            <EmailInput type="email" placeholder="Enter your email" />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </SubscribeForm>
        </Section>
      </ContentWrapper>
      <Copyright>
        © 2020 Teyungs Tattoo Studio. All rights reserved.
            
      </Copyright>
    </FooterContainer>
  );
}
  export default Footer;