import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Container } from '@material-ui/core';


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url('/images/5.jpg');
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
`;

const AnotherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  // background-image: url('/images/2.jpg');
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
`;


const useStyles = makeStyles((theme) => ({

  width:'100%',
  
  sliderContent: {
    position: 'relative',
    alignItems: 'center',
    verticalAlign: 'center',
    textAlign: 'center',
    zIndex: 99,
    color: '#404040',
    margin:'10em',
    padding: '4em',
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    borderRadius: '10px'
  },
  sliderTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  sliderSubtitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  sliderButton: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
  },
  contentTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  contentText: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  contentButton: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
  navbarContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
    minHeight: '4.5rem', // Add this line
  },
  
  
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      
      <HomeContainer>
      <div className={classes.sliderContent}>
            <Typography variant="h1" className={classes.sliderTitle}>
              The Department of Management Studies
            </Typography>
            <Typography variant="h2" className={classes.sliderSubtitle}>
              IIIT Allahabad, Prayagraj
            </Typography>
            <Button variant="contained" className={classes.sliderButton} href="/courses">
              Courses
            </Button>
          </div>
      </HomeContainer>
      <AnotherContainer>
      <Container>
        <div id="campus" className={classes.contentContainer}>
          <Typography variant="h2" className={classes.contentTitle}>
            Our Campus
          </Typography>
          <Typography variant="body1" className={classes.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt dignissim, elit
            sapien tincidunt nunc, vel tincidunt sapien sapien vel velit. Sed euismod, nisl vel tincidunt dignissim,
            elit sapien tincidunt nunc, vel tincidunt sapien sapien vel velit.
          </Typography>
          <Button variant="contained" className={classes.contentButton}>
            Learn More
          </Button>
        </div>
        <div id="admissions" className={classes.contentContainer}>
          <Typography variant="h2" className={classes.contentTitle}>
            Admissions
          </Typography>
          <Typography variant="body1" className={classes.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt dignissim, elit
            sapien tincidunt nunc, vel tincidunt sapien sapien vel velit. Sed euismod, nisl vel tincidunt dignissim,
            elit sapien tincidunt nunc, vel tincidunt sapien sapien vel velit.
          </Typography>
          <Button variant="contained" className={classes.contentButton}>
            Learn More
          </Button>
        </div>
        <div id="Courses" className={classes.contentContainer}>
          <Typography variant="h2" className={classes.contentTitle}>
            Undergraduate Admissions
          </Typography>
          <Typography variant="body1" className={classes.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt dignissim, elit
            sapien tincidunt nunc, vel tincidunt sapien sapien vel velit. Sed euismod, nisl vel tincidunt dignissim,
            elit sapien tincidunt nunc, vel tincidunt sapien sapien vel velit.
          </Typography>
          <Button variant="contained" className={classes.contentButton}>
            Learn More
          </Button>
        </div>
        <div id="contact" className={classes.contentContainer}>
          <Typography variant="h2" className={classes.contentTitle}>
            Contact Us
          </Typography>
          <Typography variant="body1" className={classes.contentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt dignissim, elit
            sapien tincidunt nunc, vel tincidunt sapien sapien vel velit. Sed euismod, nisl vel tincidunt dignissim,
            elit sapien tincidunt nunc, vel tincidunt sapien sapien vel velit.
          </Typography>
          <Button variant="contained" className={classes.contentButton}>
            Learn More
          </Button>
        </div>
      </Container>
      </AnotherContainer>
    </>
  );
};

export default Home;
