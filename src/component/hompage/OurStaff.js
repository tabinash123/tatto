import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import staff1 from '../../assets/services/1.jpg';
import staff2 from '../../assets/services/2.jpg';
import staff3 from '../../assets/services/5.jpg';


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
  padding: 90px 80px;
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
`;

const SectionHeader = styled.div`
  display: flex;
  // justify-content: center;
  align-items: center;
  margin-bottom: 60px;
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

const StaffMember = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.2);
  }
`;

const StaffImageWrapper = styled.div`
  width: 100%;
  height: 350px;
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

  @media (max-width: 1024px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
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
  }
`;

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

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 15px;
  }
  .slick-list {
    margin: 0 -15px;
  }
  
  .slick-dots {
    bottom: -40px;
    
    li button:before {
      font-size: 12px;
      color: #d4af37;
      opacity: 0.25;
    }
    
    li.slick-active button:before {
      opacity: 1;
    }
  }

  .slick-prev, .slick-next {
    width: 40px;
    height: 40px;
    background-color: rgba(212, 175, 55, 0.2);
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(212, 175, 55, 0.4);
    }

    &:before {
      color: #d4af37;
      font-size: 24px;
    }
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }
`;

const OurStaff = () => {
  const staffMembers = [
    { name: 'Charles Wade', title: 'Tattoo Master, Founder', image: staff1 },
    { name: 'Henry Richard', title: 'Tattoo Master', image: staff2 },
    { name: 'Walter Evans', title: 'Junior Tattoo Master', image: staff3 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <StaffSection>
      <ContentWrapper>
        <SectionHeader>
          <Title>Tatto Artist</Title>
        </SectionHeader>
        <StyledSlider {...settings}>
          {staffMembers.map((member, index) => (
            <StaffMember key={index}>
              <StaffImageWrapper>
                <StaffImage src={member.image} alt={member.name} />
                <StaffInfo>
                  <StaffName>{member.name}</StaffName>
                  <StaffTitle>{member.title}</StaffTitle>
                </StaffInfo>
              </StaffImageWrapper>
            </StaffMember>
          ))}
        </StyledSlider>
      </ContentWrapper>
    </StaffSection>
  );
};

export default OurStaff;