// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const saurabhM = facultyData.find((faculty) => faculty.id === "4");

const SaurabhM = () => {
  return <FacultyBioPage faculty={saurabhM} />;
};

export default SaurabhM;
