// faculty1.js
import React from 'react';
import FacultyBioPage from '../../components/FacultyBioPage/FacultyBioPage';
import facultyData from '../../data/facultyData';

const anurikaV = facultyData.find((faculty) => faculty.id === "10");

const AnurikaV = () => {
  return <FacultyBioPage faculty={anurikaV} />;
};

export default AnurikaV;
