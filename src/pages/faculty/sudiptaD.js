// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const sudiptaD = facultyData.find((faculty) => faculty.id === "11");

const SudiptaD = () => {
  return <FacultyBioPage faculty={sudiptaD} />;
};

export default SudiptaD;