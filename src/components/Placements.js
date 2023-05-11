import React from 'react';
import styled from 'styled-components';

const PlacementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PlacementsText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Placements = () => {
  return (
    <PlacementsContainer>
      <PlacementsText>Placements</PlacementsText>
    </PlacementsContainer>
  );
};

export default Placements;
