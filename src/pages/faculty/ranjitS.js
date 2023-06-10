// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const ranjitS = facultyData.find((faculty) => faculty.id === "7");

const RanjitS = () => {
  return <FacultyBioPage faculty={ranjitS} />;
};

export default RanjitS;
