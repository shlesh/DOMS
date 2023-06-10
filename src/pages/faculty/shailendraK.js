// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const shailendraK = facultyData.find((faculty) => faculty.id === "3");

const ShailendraK = () => {
  return <FacultyBioPage faculty={shailendraK} />;
};

export default ShailendraK;
