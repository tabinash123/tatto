import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import tattooing from '../../assets/services/1.jpg';
import piercing from '../../assets/services/2.jpg';
import consultation from '../../assets/services/3.jpg';
import tribal from '../../assets/services/4.jpg';
import Modification from '../../assets/services/5.jpg';
import design from '../../assets/services/6.jpg';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

const GallerySection = styled.section`
  background-color: #111;
  color: #d4af37;
  padding: 40px 20px;
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
    padding: 60px 30px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 80px 40px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
  }
`;
const GalleryTitle = styled.h2`
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


  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;
const ViewAllLink = styled(motion.a)`
  color: #d4af37;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:after {
    content: '→';
    margin-left: 8px;
    color: #d4af37;
  }
  
  &:hover {
    color: #fff;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
  grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
  grid-template-columns: repeat(4, 1fr);
  }
`;

const GalleryImageWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  aspect-ratio: 1 / 1;
  
  @media (min-width: ${breakpoints.tablet}) {
    &:nth-child(3n-1) {
      grid-row: span 2;
      aspect-ratio: 1 / 2;
    }
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GalleryImageWrapper}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
`;

const ImageTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #d4af37;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled(motion.img)`
  max-width: 90%;
  max-height: calc(100vh - 160px);
  object-fit: contain;
  border: 3px solid #d4af37;
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 40px;
  color: #d4af37;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const ThumbnailGallery = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-x: auto;
  padding: 10px 0;
`;

const Thumbnail = styled.img`
  height: 40px;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? '#d4af37' : 'transparent'};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${breakpoints.tablet}) {
    height: 60px;
  }
`;

const NavigationArrow = styled(motion.button)`
  background-color: rgba(212, 175, 55, 0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #d4af37;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(212, 175, 55, 0.4);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 50px;
    height: 50px;
    font-size: 24px;

    &.left {
      left: 20px;
    }

    &.right {
      right: 20px;
    }
  }
`;

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = [
    { src: tattooing, alt: "Tattooing", title: "Expert Tattooing" },
    { src: piercing, alt: "Piercing", title: "Professional Piercing" },
    { src: consultation, alt: "Consultation", title: "Design Consultation" },
    { src: tribal, alt: "Tribal", title: "Tribal Designs" },
    { src: Modification, alt: "Modification", title: "Body Modification" },
    { src: design, alt: "Design", title: "Custom Designs" },
    { src: tattooing, alt: "Tattooing", title: "Sleeve Artwork" },
    { src: piercing, alt: "Piercing", title: "Delicate Piercings" },
    { src: Modification, alt: "Modification", title: "Artistic Modifications" },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImageIndex(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    if (event.key === 'ArrowRight') setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <GallerySection>
      <ContentWrapper>
        <GalleryHeader>
          <GalleryTitle>Inked Masterpieces</GalleryTitle>
          <ViewAllLink 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Gallery
          </ViewAllLink>
        </GalleryHeader>
        <GalleryGrid>
          {images.map((image, index) => (
            <GalleryImageWrapper
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openModal(index)}
              whileHover={{ y: -5 }}
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
        <AnimatePresence>
          {modalIsOpen && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalImage 
                  src={images[selectedImageIndex].src} 
                  alt={images[selectedImageIndex].alt}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                />
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <NavigationArrow
                  className="left"
                  onClick={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &#8249;
                </NavigationArrow>
                <NavigationArrow
                  className="right"
                  onClick={() => setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &#8250;
                </NavigationArrow>
                <ThumbnailGallery>
                  {images.map((image, index) => (
                    <Thumbnail 
                      key={index} 
                      src={image.src} 
                      alt={image.alt} 
                      onClick={() => setSelectedImageIndex(index)}
                      selected={index === selectedImageIndex}
                    />
                  ))}
                </ThumbnailGallery>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </ContentWrapper>
    </GallerySection>
  );
};

export default Gallery;