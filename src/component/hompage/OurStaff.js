import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import staff1 from '../../assets/services/1.jpg';
import staff2 from '../../assets/services/2.jpg';
import staff3 from '../../assets/services/5.jpg';

const StaffSection = styled.section`
  background-color: #121212;
  color: white;
  padding: 90px 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  position: relative;
  padding-left: 20px;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 80%;
    background-color: #e53935;
  }
   @media (max-width: 480px) {
  font-size: 22px;
  }
    @media (max-width: 768px) {
  font-size: 32px;
  }

`;


const StaffMember = styled.div`
  text-align: left;
  padding: 0 15px;
`;

const StaffImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const StaffImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const StaffName = styled.h3`
  font-size: 24px;
  margin: 0 0 5px 0;
  color: white;
`;

const StaffTitle = styled.p`
  font-size: 16px;
  color: #888;
  margin: 0 0 15px 0;
`;

const RedLine = styled.div`
  height: 2px;
  background-color: #e53935;
  width: 40px;
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
      color: #e53935;
      opacity: 0.25;
    }
    
    li.slick-active button:before {
      opacity: 1;
    }
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
    autoplaySpeed: 3000,
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
      <SectionHeader>
        <Title>OUR STAFF</Title>
   
      </SectionHeader>
      <StyledSlider {...settings}>
        {staffMembers.map((member, index) => (
          <StaffMember key={index}>
            <StaffImageWrapper>
              <StaffImage src={member.image} alt={member.name} />
            </StaffImageWrapper>
            <StaffName>{member.name}</StaffName>
            <StaffTitle>{member.title}</StaffTitle>
            <RedLine />
          </StaffMember>
        ))}
      </StyledSlider>
    </StaffSection>
  );
};

export default OurStaff;