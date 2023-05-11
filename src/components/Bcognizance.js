import React from 'react';
import styled from 'styled-components';

const BcognizanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const BcognizanceText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Bcognizance = () => {
  return (
    <BcognizanceContainer>
      <BcognizanceText>B'Cognizance</BcognizanceText>
    </BcognizanceContainer>
  );
};

export default Bcognizance;
