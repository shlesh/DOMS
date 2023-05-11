import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Container } from '@material-ui/core';
import { faculty, findFacultyById } from '../data/facultyData';


const FacultyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FacultyText = styled.h1`
  font-size: 3rem;
  color: '#404040';
  text-align: left;
  margin-top: 2rem;
`;

const FacultyCard = styled(Card)`
  width: 300px;
  margin: 1rem;
  cursor: pointer;
`;

const FacultyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const FacultyName = styled(Typography)`
  font-weight: bold;
  margin-top: 1rem;
`;

const FacultyDesignation = styled(Typography)`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Faculty = () => {
  return (
    <FacultyContainer>
      <Container>
        <FacultyText>Faculty</FacultyText>
        {faculty.map((faculty) => (
        console.log(faculty),
        <Link to={`/faculty/${faculty.id}`} key={faculty.id}>
          <FacultyCard>
            <FacultyImage src={faculty.image} alt={faculty.name} />
            <CardContent>
              <FacultyName variant="h5">{faculty.name}</FacultyName>
              <FacultyDesignation variant="body1">{faculty.designation}</FacultyDesignation>
            </CardContent>
          </FacultyCard>
        </Link>
      ))}
      </Container>
    </FacultyContainer>
  );
};

export default Faculty;
