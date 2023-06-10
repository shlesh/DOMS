// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const sashiKantR = facultyData.find((faculty) => faculty.id === "6");

const SashiKantR = () => {
  return <FacultyBioPage faculty={sashiKantR} />;
};

export default SashiKantR;
