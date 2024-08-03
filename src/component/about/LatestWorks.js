import React, { useState, useEffect } from 'react';
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
  column-gap: 3px;
  
  @media (max-width: 1024px) {
    column-count: 3;
  }
  
  @media (max-width: 768px) {
    column-count: 2;
  }
  
  @media (max-width: 480px) {
    column-count: 2;
  }
`;

const GalleryItem = styled.div`
  break-inside: avoid;
  margin-bottom: 3px;
  cursor: pointer;
`;

const GalleryImage = styled.img`
  width: 100%;
  display: block;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
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

const ModalImage = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
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
  height: 60px;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid ${props => props.selected ? 'white' : 'transparent'};
`;

const LatestWorks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
      <Title>Latest Works</Title>
      <MasonryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index} onClick={() => openModal(index)}>
            <GalleryImage src={image.src} alt={image.alt} />
          </GalleryItem>
        ))}
      </MasonryGrid>
      {modalIsOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage 
              src={images[selectedImageIndex].src} 
              alt={images[selectedImageIndex].alt} 
            />
            <CloseButton onClick={closeModal}>&times;</CloseButton>
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
    </GallerySection>
  );
};

export default LatestWorks;