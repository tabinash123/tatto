import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import tattooing from '../../assets/services/1.jpg';
import piercing from '../../assets/services/2.jpg';
import consultation from '../../assets/services/3.jpg';
import tribal from '../../assets/services/4.jpg';
import Modification from '../../assets/services/5.jpg';
import design from '../../assets/services/6.jpg';

const GallerySection = styled.section`
  background-color: #1a1a1a;
  color: #fff;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const GalleryTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: 1.5px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
    letter-spacing: 2px;
  }
`;

const ViewAllLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:after {
    content: '→';
    margin-left: 6px;
    color: #ff0000;
  }
  
  &:hover {
    color: #ff0000;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  gap: 10px;
  position: relative;

  @media (min-width: 768px) {
    grid-auto-rows: 200px;
    gap: 15px;
  }

  @media (min-width: 1024px) {
    grid-auto-rows: 250px;
    gap: 20px;
  }
`;

const GalleryImageWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:nth-child(3n-1) {
    grid-row: span 2;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    padding: 12px;
  }

  @media (min-width: 1024px) {
    padding: 15px;
  }
`;

const ImageTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const NavigationArrow = styled(motion.button)`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateY(-50%);
  z-index: 10;

  @media (min-width: 768px) {
    font-size: 28px;
    left: -40px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
    left: -50px;
  }
`;

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { src: tattooing, alt: "Tattooing", title: "Expert Tattooing" },
    { src: tattooing, alt: "Tattooing", title: "Expert Tattooing" },
    { src: piercing, alt: "Piercing", title: "Professional Piercing" },
    { src: consultation, alt: "Consultation", title: "Design Consultation" },
    { src: tribal, alt: "Tribal", title: "Tribal Designs" },
    { src: Modification, alt: "Modification", title: "Body Modification" },
    { src: design, alt: "Design", title: "Custom Designs" },
    { src: design, alt: "Design", title: "Custom Designs" },
    { src: Modification, alt: "Modification", title: "Body Modification" },
    { src: design, alt: "Design", title: "Custom Designs" },
  ];

  return (
    <GallerySection>
      <GalleryHeader>
        <GalleryTitle>Gallery</GalleryTitle>
        <ViewAllLink 
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Gallery
        </ViewAllLink>
      </GalleryHeader>
      <GalleryGrid>
        
        {images.map((image, index) => (
          <GalleryImageWrapper
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <GalleryImage src={image.src} alt={image.alt} />
            <ImageOverlay
              initial={{ opacity: 0, y: '100%' }}
              animate={{ 
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? 0 : '100%'
              }}
              transition={{ duration: 0.3 }}
            >
              <ImageTitle>{image.title}</ImageTitle>
            </ImageOverlay>
          </GalleryImageWrapper>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

export default Gallery;