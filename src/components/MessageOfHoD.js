import React from 'react';
import styled from 'styled-components';

const MessageOfHoDContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MessageOfHoDText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const MessageOfHoD = () => {
  return (
    <MessageOfHoDContainer>
      <MessageOfHoDText>Message from the Head of Department</MessageOfHoDText>
    </MessageOfHoDContainer>
  );
};

export default MessageOfHoD;
