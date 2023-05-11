import React from 'react';
import styled from 'styled-components';

const Admissions20XXContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Admissions20XXText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Admissions20XX = () => {
  return (
    <Admissions20XXContainer>
      <Admissions20XXText>Admissions 20XX</Admissions20XXText>
    </Admissions20XXContainer>
  );
};

export default Admissions20XX;
