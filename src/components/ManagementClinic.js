import React from 'react';
import styled from 'styled-components';

const ManagementClinicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ManagementClinicText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const ManagementClinic = () => {
  return (
    <ManagementClinicContainer>
      <ManagementClinicText>Management Clinic</ManagementClinicText>
    </ManagementClinicContainer>
  );
};

export default ManagementClinic;
