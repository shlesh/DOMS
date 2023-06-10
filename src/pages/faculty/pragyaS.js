// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const pragyaS = facultyData.find((faculty) => faculty.id === "1");

const PragyaS = () => {
  return <FacultyBioPage faculty={pragyaS} />;
};

export default PragyaS;
