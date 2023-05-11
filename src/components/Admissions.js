import React from 'react';
import styled from 'styled-components';

const AdmissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AdmissionsText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Admissions = () => {
  return (
    <AdmissionsContainer>
      <AdmissionsText>Admissions</AdmissionsText>
    </AdmissionsContainer>
  );
};

export default Admissions;
