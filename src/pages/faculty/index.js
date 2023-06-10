import React from 'react';
import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import ThemeLink from '../../components/ThemeLink';
import Layout from '../../components/Layout/Layout';
// import Split from '../components/Split';
import facultyData from "../../data/facultyData";
import Container from '../../components/Container';
import Breadcrumbs from '../../components/Breadcrumbs';

// import Button from '../components/Button';

const FacultyPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/faculty', label: 'Faculty' },
              ]}
            />
          </div>
        </Container>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h2 className={styles.mainHeader}>Faculty</h2>
              <br/>
              <div className={styles.facultyContainer}>
                {facultyData.map((faculty) => (
                  <div key={faculty.id} className={styles.facultyCard}>
                    {/* {console.log(faculty.image)} */}
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className={styles.facultyImage}
                    />
                    <h3>{faculty.name}</h3>
                    <p>{faculty.designation}</p>
                    {/* <p>{faculty.study}</p> */}
                    <ThemeLink
                      onClick={() => navigate(`/faculty/${faculty.profileURL}`)}
                      to={`/faculty/${faculty.profileURL}`}
                    >
                      View Bio
                    </ThemeLink>
                    {/* <Link to={`/faculty/faculty${faculty.id}`} className={styles.facultyBioLink}>
                      
                    </Link> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FacultyPage;