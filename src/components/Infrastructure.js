import React from 'react';
import styled from 'styled-components';

const InfrastructureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InfrastructureText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Infrastructure = () => {
  return (
    <InfrastructureContainer>
      <InfrastructureText>Infrastructure</InfrastructureText>
    </InfrastructureContainer>
  );
};

export default Infrastructure;
