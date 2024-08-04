import React, { useState } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

// Image imports
import tattooing from '../../assets/services/1.jpg';
import piercing from '../../assets/services/2.jpg';
import consultation from '../../assets/services/3.jpg';
import tribal from '../../assets/services/4.jpg';
import Modification from '../../assets/services/5.jpg';
import design from '../../assets/services/6.jpg';

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: ${props => props.active ? '#FFA500' : '#000'};
  border-bottom: ${props => props.active ? '2px solid #FFA500' : 'none'};
`;

const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -16px; /* gutter size offset */
  width: auto;
  
  .my-masonry-grid_column {
    padding-left: 16px; /* gutter size */
    background-clip: padding-box;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 16px; /* space between items */
  break-inside: avoid;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
`;

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All Photos');

  const filters = ['All Photos', 'Tattoos', 'Images', "Gaming"];

  const images = [
    { src: tattooing, category: 'Gaming', alt: 'Tattooing' },
    { src: piercing, category: 'Images', alt: 'Piercing' },
    { src: consultation, category: 'Images', alt: 'Consultation' },
    { src: tribal, category: 'Tattoos', alt: 'Tribal Tattoo' },
    { src: Modification, category: 'Tattoos', alt: 'Body Modification' },
    { src: design, category: 'Gaming', alt: 'Tattoo Design' },
    { src: tattooing, category: 'Tattoos', alt: 'Tattooing' },
    { src: piercing, category: 'Gaming', alt: 'Piercing' },
    { src: consultation, category: 'Images', alt: 'Consultation' },
    { src: tribal, category: 'Tattoos', alt: 'Tribal Tattoo' },
    { src: Modification, category: 'Tattoos', alt: 'Body Modification' },
    { src: design, category: 'Images', alt: 'Tattoo Design' },
    { src: tattooing, category: 'Tattoos', alt: 'Tattooing' },
    { src: piercing, category: 'Images', alt: 'Piercing' },
    { src: consultation, category: 'Images', alt: 'Consultation' },
    { src: tribal, category: 'Tattoos', alt: 'Tribal Tattoo' },
    { src: Modification, category: 'Tattoos', alt: 'Body Modification' },
    { src: design, category: 'Images', alt: 'Tattoo Design' },
    { src: tattooing, category: 'Tattoos', alt: 'Tattooing' },
    { src: piercing, category: 'Images', alt: 'Piercing' },
    { src: consultation, category: 'Images', alt: 'Consultation' },
    { src: tribal, category: 'Tattoos', alt: 'Tribal Tattoo' },
    { src: Modification, category: 'Tattoos', alt: 'Body Modification' },
    { src: design, category: 'Images', alt: 'Tattoo Design' },
  ];

  const filteredImages = activeFilter === 'All Photos' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const breakpointColumnsObj = {
    default: 3, // Desktop: 3 columns
    992: 2,     // Tablet: 2 columns
    576: 2      // Mobile: 2 columns
  };

  return (
    <GalleryContainer>
      <Heading>Gallery</Heading>
      <FilterContainer>
        {filters.map(filter => (
          <FilterButton 
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>
      <StyledMasonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredImages.map((img, index) => (
          <ImageContainer key={index}>
            <Image src={img.src} alt={img.alt} />
          </ImageContainer>
        ))}
      </StyledMasonry>
    </GalleryContainer>
  );
};

export default Gallery;