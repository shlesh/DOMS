// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const vijayshriT = facultyData.find((faculty) => faculty.id === "8");

const VijayshriT = () => {
  return <FacultyBioPage faculty={vijayshriT} />;
};

export default VijayshriT;
