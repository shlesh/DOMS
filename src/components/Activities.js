import React from 'react';
import styled from 'styled-components';

const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ActivitiesText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Activities = () => {
  return (
    <ActivitiesContainer>
      <ActivitiesText>Activities</ActivitiesText>
    </ActivitiesContainer>
  );
};

export default Activities;
