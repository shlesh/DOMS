// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const madhvendraM = facultyData.find((faculty) => faculty.id === "5");

const MadhvendraM = () => {
  return <FacultyBioPage faculty={madhvendraM} />;
};

export default MadhvendraM;
