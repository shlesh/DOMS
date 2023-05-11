import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Container } from '@material-ui/core';

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  height: 100vh;
`;

const CoursesText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Courses = () => {
  return (
    <CoursesContainer>
      <Container><CoursesText>About MBA Program</CoursesText>
      <Typography variant="body1" component="p"> IIIT-A started its MBA course with specialization in Information Technology in the year 2004, keeping in mind the latest emerging trends in management and future needs of the society. IIIT-A MBA program fosters state-of-the-art approaches to manage the diverse organizational units and settings.

Our MBA program is a dual specialization program (viz: General Management & Functional Areas) which provides graduate students with the advanced knowledge and skills necessary to assume and discharge the duties and responsibilities of managers in high technology industries. Technological advancements have made information management a critical skill for managers at all levels, worldwide. The vast availability of information and explosion of knowledge management tools make accessing information on demand, anytime from anywhere, a new reality need for MBA@ IIITA.

The MBA program prepares a candidate for management positions in a wide range of industries challenged by the complexities of managing information in an era of technological innovation and globalization.

The proliferation of information technologies and the need for managing the flow of information requires a new breed of manager. In addition, students will learn to align technology goals to strategic business goals, design client server applications, develop data communication and networking strategies, assess the business risks and rewards of new information technology, apply reengineering principles to business processes, and understand the role of the technology manager in business planning. </Typography></Container>
      
    </CoursesContainer>
  );
};

export default Courses;
