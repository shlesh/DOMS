import React from 'react';
import styled from 'styled-components';

const AwardsHonorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AwardsHonorsText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const AwardsHonors = () => {
  return (
    <AwardsHonorsContainer>
      <AwardsHonorsText>Awards and Honors</AwardsHonorsText>
    </AwardsHonorsContainer>
  );
};

export default AwardsHonors;
