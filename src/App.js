import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Home from './components/Home';
import Faculty from './components/Faculty';
import FacultyProfile from './components/FacultyProfile';
import Courses from './components/Courses';
import Activities from './components/Activities';
import Admissions from './components/Admissions';
import Placements from './components/Placements';
import Contact from './components/Contact';
import Navbar from "./components/navbar/Navbar";

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const AppMain = styled.main`
  flex-grow: 1;
  padding: 0;
  margin:0;
  width: 100%;
`;

const useStyles = makeStyles((theme) => ({
  navbarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  navbarLogo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  navbarLogoImg: {
    height: '3rem',
    marginRight: '1rem',
  },
  navbarLogoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#3f51b5',
  },
  navbarLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navbarLink: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#3f51b5',
    margin: '0 1rem',
    textDecoration: 'none',
    '&:hover': {
      color: '#303f9f',
    },
  },
  navbarDropdown: {
    position: 'relative',
    '&:hover $navbarDropdownContent': {
      display: 'block',
    },
  },
  navbarDropdownContent: {
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 3,
    minWidth: '10rem',
  },
  navbarDropdownLink: {
    display: 'block',
    padding: '0.5rem 1rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#3f51b5',
    textDecoration: 'none',
    '&:hover': {
      color: '#303f9f',
    },
  },
  navbarLinksOpen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '4.5rem',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 4.5rem)',
    backgroundColor: '#fff',
    zIndex: 1,
    transition: 'transform 0.5s ease-in-out',
    transform: 'translateY(-100%)',
  },
  hamburgerMenu: {
    '&:hover': {
      cursor: 'pointer',
    },
    '& .bm-burger-bars': {
      transition: 'all 0.3s ease-in-out',
    },
    '& .bm-burger-bars-hover': {
      backgroundColor: '#3f51b5',
    },
    '& .bm-cross': {
      transition: 'all 0.3s ease-in-out',
    },
    '& .bm-cross-button': {
      height: '30px',
      width: '30px',
    },
    '& .bm-cross-button:hover .bm-cross': {
      backgroundColor: '#3f51b5',
    },
  },

}));


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  return (
    <Router>
      {/* <AppContainer sx={{px:0, margin:0}}> */}
      <Navbar />

        <AppMain>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/faculty/:id" element={<FacultyProfile />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </AppMain>
      {/* </AppContainer> */}
    </Router>
  );
};

export default App;
