import React from 'react';
import styled from 'styled-components';

import tattooing from '../../assets/services/1.jpg';
import piercing from '../../assets/services/2.jpg';
import consultation from '../../assets/services/3.jpg';
import tribal from '../../assets/services/4.jpg';
import Modification from '../../assets/services/5.jpg';
import design from '../../assets/services/6.jpg';

const GallerySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const MasonryGrid = styled.div`
  column-count: 3;
  column-gap: 3px;  // Reduced from 15px to 3px
  
  @media (max-width: 800px) {
    column-count: 2;
  }
  
  @media (max-width: 500px) {
    column-count: 1;
  }
`;

const GalleryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 3px;  // Reduced from 15px to 3px
`;

const GalleryImage = styled.img`
  width: 100%;
  display: block;
`;

const LatestWorks = () => {
  const images = [
    { src: tattooing, alt: "Tattooing" },
    { src: piercing, alt: "Piercing" },
    { src: consultation, alt: "Consultation" },
    { src: tribal, alt: "Tribal tattoo" },
    { src: Modification, alt: "Body modification" },
    { src: design, alt: "Tattoo design" },
    { src: design, alt: "Tattoo design" },
    { src: design, alt: "Tattoo design" },
    { src: design, alt: "Tattoo design" },
  ];

  return (
    <GallerySection>
      <Title>Latest Works</Title>
      <MasonryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index}>
            <GalleryImage src={image.src} alt={image.alt} />
          </GalleryItem>
        ))}
      </MasonryGrid>
    </GallerySection>
  );
};

export default LatestWorks;