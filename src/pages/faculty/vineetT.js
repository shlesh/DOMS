// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const vineetT = facultyData.find((faculty) => faculty.id === "9");

const VineetT = () => {
  return <FacultyBioPage faculty={vineetT} />;
};

export default VineetT;
