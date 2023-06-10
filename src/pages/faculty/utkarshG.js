// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const utkarshG = facultyData.find((faculty) => faculty.id === "2");

const UtkarshG = () => {
  return <FacultyBioPage faculty={utkarshG} />;
};

export default UtkarshG;
