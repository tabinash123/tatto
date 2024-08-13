import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import staff1 from '../../assets/services/1.jpg';
import staff2 from '../../assets/services/2.jpg';
import staff3 from '../../assets/services/5.jpg';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const TestimonialSection = styled.section`
  background-color: #111;
  color: #d4af37;
  padding: 60px 20px;
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

  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 40px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 100px 60px;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 60px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  position: relative;
  padding: 0 20px;
  text-transform: uppercase;
  font-family: 'Cinzel Decorative', cursive;
  text-align: center;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30px;
    height: 2px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
  }

  &::before {
    left: -40px;
  }

  &::after {
    right: -40px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 36px;

    &::before, &::after {
      width: 50px;
    }

    &::before {
      left: -60px;
    }

    &::after {
      right: -60px;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 42px;

    &::before, &::after {
      width: 70px;
    }

    &::before {
      left: -80px;
    }

    &::after {
      right: -80px;
    }
  }
`;

const TestimonialItem = styled.div`
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

  @media (min-width: ${breakpoints.tablet}) {
    padding: 30px;
  }
`;

const TestimonialImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 20px;
  border: 2px solid #d4af37;
  box-shadow: 0 0 0 2px #111, 0 0 0 4px #d4af37;

  @media (min-width: ${breakpoints.tablet}) {
    width: 120px;
    height: 120px;
    border-width: 3px;
    box-shadow: 0 0 0 3px #111, 0 0 0 6px #d4af37;
  }
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TestimonialContent = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 0 0 20px 0;
  line-height: 1.6;
  font-style: italic;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

const TestimonialName = styled.h3`
  font-size: 16px;
  margin: 0 0 5px 0;
  color: #d4af37;
  font-family: 'Cinzel Decorative', cursive;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const TestimonialTitle = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;

const QuoteMark = styled.span`
  font-size: 40px;
  color: rgba(212, 175, 55, 0.2);
  position: absolute;
  top: -10px;
  left: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 60px;
    top: -20px;
    left: 20px;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  
  .slick-dots {
    bottom: -30px;
    
    li button:before {
      font-size: 8px;
      color: #d4af37;
      opacity: 0.25;
    }
    
    li.slick-active button:before {
      opacity: 1;
    }
  }

  .slick-prev, .slick-next {
    width: 30px;
    height: 30px;
    background-color: rgba(212, 175, 55, 0.2);
    border-radius: 50%;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(212, 175, 55, 0.4);
    }

    &:before {
      color: #d4af37;
      font-size: 20px;
    }
  }

  .slick-prev {
    left: -35px;
  }

  .slick-next {
    right: -35px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    .slick-slide > div {
      margin: 0 15px;
    }
    .slick-list {
      margin: 0 -15px;
    }

    .slick-dots {
      bottom: -40px;
      
      li button:before {
        font-size: 10px;
      }
    }

    .slick-prev, .slick-next {
      width: 40px;
      height: 40px;

      &:before {
        font-size: 24px;
      }
    }

    .slick-prev {
      left: -50px;
    }

    .slick-next {
      right: -50px;
    }
  }
`;

const UserTestimonials = () => {
  const testimonials = [
    { 
      name: 'Aarati Sharma', 
      title: 'Satisfied Customer', 
      image: staff1,
      content: 'Teyungs Tattoo Studio truly impressed me. Owner name is artistry perfectly captured the blend of modern design and Nepali culture I was looking for.'
    },
    { 
      name: 'Bikash Thapa', 
      title: 'Repeat Client', 
      image: staff2,
      content: 'I hve been getting inked at Teyungs Tattoo Studio for years. Their consistent quality and innovative designs keep me coming back. Best in Kathmandu!'
    },
    { 
      name: 'Emily Thompson', 
      title: 'International Client', 
      image: staff3,
      content: 'As a traveler, I wanted a unique souvenir from Nepal. Teyungs Tattoo Studio delivered with a beautiful design that tells a story. Highly recommend!'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    <TestimonialSection>
      <ContentWrapper>
        <SectionHeader>
          <Title> Costumer Review</Title>
        </SectionHeader>
        <StyledSlider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index}>
              <TestimonialImageWrapper>
                {/* <TestimonialImage src={testimonial.image} alt={testimonial.name} /> */}
              </TestimonialImageWrapper>
              <QuoteMark>"</QuoteMark>
              <TestimonialContent>{testimonial.content}</TestimonialContent>
              <TestimonialName>{testimonial.name}</TestimonialName>
              <TestimonialTitle>{testimonial.title}</TestimonialTitle>
            </TestimonialItem>
          ))}
        </StyledSlider>
      </ContentWrapper>
    </TestimonialSection>
  );
};

export default UserTestimonials;