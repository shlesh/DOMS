import React from 'react';
import styled from 'styled-components';

const AlumniContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AlumniText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Alumni = () => {
  return (
    <AlumniContainer>
      <AlumniText>Alumni</AlumniText>
    </AlumniContainer>
  );
};

export default Alumni;
