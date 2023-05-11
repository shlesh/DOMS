import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Container } from '@material-ui/core';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ContactText = styled.h1`
  font-size: 3rem;
  color: '#404040';
  text-align: left;
  margin-top: 2rem;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Container>
        <ContactText>Contact Us</ContactText>
        <Typography variant="body1" component="p">
          <b>Department of Management Studies</b>
          <br />
          1st Floor, Lecture Theater Complex
          <br />
          Indian Institute of Information Technology, Allahabad
          <br />
          Devghat, Jhalwa
          <br />
          Allahabad 211012, (UP) INDIA
          <br />
          Phone: +91-532-292-2180, 2179, 2178
          <br />
          FAX: +91-532-292-2125
          <br />
          Email: <a href="mailto:hod.mba@iiita.ac.in">hod [dot] mba [at] iiita [dot] ac [dot] in</a>
          <br />
</Typography>

      </Container>
      
    </ContactContainer>
  );
};

export default Contact;
