import React from 'react';
import styled from 'styled-components';

const StudentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StudentsText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Students = () => {
  return (
    <StudentsContainer>
      <StudentsText>Students</StudentsText>
    </StudentsContainer>
  );
};

export default Students;
