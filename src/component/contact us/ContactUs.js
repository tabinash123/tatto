import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.div`
  display: flex;
  background-color: #1e1e1e;
  color: white;
  padding: 40px;
  font-family: Arial, sans-serif;
`;

const FormSection = styled.div`
  flex: 3;
`;

const InfoSection = styled.div`
  flex: 2;
  margin-left: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: normal;
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: #aaa;
  font-size: 14px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Input = styled.input`
  background-color: transparent;
  border: 1px solid #333;
  padding: 10px;
  color: white;
`;

const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid #333;
  padding: 10px;
  color: white;
  grid-column: 1 / -1;
  height: 100px;
`;

const Button = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
`;

const InfoTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: normal;
`;

const InfoText = styled.p`
  margin-bottom: 20px;
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

const ContactUs = () => {
  return (
    <ContactSection>
      <FormSection>
        <Title>CONTACT US</Title>
        <Description>
          You can contact us any way that is convenient for you. We are available 24/7 via fax or email.
          You can also use a quick contact form below or visit our salon personally.
        </Description>
        <Form>
          <Input type="text" placeholder="First name" />
          <Input type="text" placeholder="Last name" />
          <Input type="tel" placeholder="Phone" />
          <Input type="email" placeholder="E-Mail" />
          <TextArea placeholder="Message" />
        </Form>
        <Button>SEND MESSAGE</Button>
      </FormSection>
      <InfoSection>
        <InfoTitle>Address</InfoTitle>
        <InfoText icon="📍">
          Washington, USA 6036 Richmond hwy., Alexandria, VA, 2230
        </InfoText>
        <InfoTitle>Phones</InfoTitle>
        <InfoText icon="📞">
          +1 (409) 987-5874, +1(409) 987-5884
        </InfoText>
        <InfoTitle>E-mail</InfoTitle>
        <InfoText icon="✉️">
          info@demolink.org
        </InfoText>
        <InfoTitle>Opening Hours</InfoTitle>
        <InfoText icon="🕒">
          Mon-Fri: 9 am – 6 pm<br />
          Saturday: 9 am – 4 pm<br />
          Sunday: Closed
        </InfoText>
      </InfoSection>
    </ContactSection>
  );
};

export default ContactUs;