import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';
import { faculty, findFacultyById } from '../data/facultyData';

const FacultyProfileContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-around;
  margin-top: 2rem;
  flex-direction:row;
  
 
`;

const FacultyProfileCard = styled(Card)`
  width: 600px;
  flex-direction:row;
  display: block;
`;

const FacultyProfileImage = styled.img`
  width: 45%;  
  height: 300px;
  margin-left:1rem;
  margin-top:1rem;
  
`;

const FacultyProfileName = styled(Typography)`
  font-weight: bold;
  margin-top: 1rem;
  flex-direction:row;
`;

const FacultyProfileDesignation = styled(Typography)`
  font-size: 1rem;
  margin-top: 0.5rem;
  flex-direction:row;
  font-weight: bold;
`;

const FacultyProfileCourses = styled(Typography)`
  font-size: 1rem;
  margin-top: 1rem;
`;

const FacultyProfileBio = styled(Typography)`
  font-size: 1rem;
  margin-top: 1rem;
`;

const FacultyProfileResearchInterests = styled(Typography)`
  font-size: 1rem;
  margin-top: 1rem;
`;

const FacultyProfileAddress = styled(Typography)`
  font-size: 1rem;
  margin-top: 1rem;
`;

const FacultyProfileEmail = styled(Typography)`
  font-size: 1rem;
  margin-top: 1rem;
`;

const FacultyProfilePhone = styled(Typography)`
  font-size: 1rem;
  margin-top: 1rem;
`;

const FacultyProfileStudy = styled(Typography)`
  font-size: 1rem;
  margin-top: 1rem;
`;



const FacultyProfile = () => {
  const { id } = useParams();
  const facultyVar = faculty.find((faculty) => faculty.id === id);


  return (
    <FacultyProfileContainer>
     
      <FacultyProfileCard>
        <FacultyProfileImage src={facultyVar.image} alt={facultyVar.name} /> 
        <CardContent>
          <FacultyProfileName variant="h5">{facultyVar.name}
          
          </FacultyProfileName>

          <FacultyProfileDesignation variant="body1">{facultyVar.designation}</FacultyProfileDesignation> 
          <FacultyProfileStudy variant="body1">{facultyVar.study}</FacultyProfileStudy>
          
          <FacultyProfileCourses variant="body1">
            <strong>Courses Taught:</strong> {facultyVar.courses.join(', ')}
          </FacultyProfileCourses>

          <FacultyProfileBio variant="body1">
            <strong>Bio:</strong> {facultyVar.bio}
          </FacultyProfileBio>

          <FacultyProfileResearchInterests variant="body1">
            <strong>Research Interests:</strong> {facultyVar.researchInterests.join(', ')}
          </FacultyProfileResearchInterests>

          <FacultyProfileAddress variant="body1">
            <strong>Address:</strong> {facultyVar.address.join(', ')}
          </FacultyProfileAddress>

          <FacultyProfileEmail variant="body1">
            <strong>Email:</strong> {facultyVar.email}
          </FacultyProfileEmail>

          <FacultyProfilePhone variant="body1">
            <strong>Phone:</strong> {facultyVar.phone}
          </FacultyProfilePhone>

        </CardContent>
        
      </FacultyProfileCard>
    
    </FacultyProfileContainer>
  );
};

export default FacultyProfile;