import React from 'react';
import styled from 'styled-components';

const PhotoGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PhotoGalleryText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const PhotoGallery = () => {
  return (
    <PhotoGalleryContainer>
      <PhotoGalleryText>Photo Gallery</PhotoGalleryText>
    </PhotoGalleryContainer>
  );
};

export default PhotoGallery;
