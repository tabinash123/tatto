import React from 'react';
import styled, { keyframes } from 'styled-components';
import staff1 from '../../assets/services/tattooing.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const StaffSection = styled.section`
  background-color: #111;
  color: #d4af37;
  // padding: 90px 80px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('path-to-tattoo-pattern.png') repeat;
    opacity: 0.05;
    z-index: 1;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
   display: flex;
  flex-direction: column;
   align-items: center;
   `;
   const Title = styled.h2`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
  }
   animation: ${fadeIn} 1s ease-out;
   `;

const StaffMember = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 400px;
  width: 100%;
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.2);
  }
`;

const StaffImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
  border: 3px solid #d4af37;
  box-shadow: 0 0 0 3px #111, 0 0 0 6px #d4af37;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1;
  }

  `;

const StaffImage = styled.img`
 width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(50%);
  transition: filter 0.3s ease, transform 0.3s ease;
 ${StaffMember}:hover & {
    filter: grayscale(0%);
    transform: scale(1.05);
  }`;


const StaffInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  text-align: center;
  z-index: 2;
  `;
  const StaffName = styled.h3`
  font-size: 24px;
  margin: 0 0 5px 0;
  color: #fff;
  font-family: 'Cinzel Decorative', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  `;

const StaffTitle = styled.p`
  font-size: 16px;
  color: #d4af37;
  margin: 0 0 15px 0;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  `;

const OurStaff = () => {
  return (
    <StaffSection>
      <ContentWrapper>
        <Title>Our Tattoo Artist</Title>
        <StaffMember>
          <StaffImageWrapper>
            <StaffImage src={staff1} alt="Sandip Lama" />
            <StaffInfo>
              <StaffName>Kamal Sing Limbu</StaffName>
              <StaffTitle>Founder & Master Tattoo Artist</StaffTitle>
            </StaffInfo>
          </StaffImageWrapper>
        </StaffMember>
      </ContentWrapper>
    </StaffSection>
     );
};

export default OurStaff;