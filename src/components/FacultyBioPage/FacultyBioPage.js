// FacultyBioPage.js
import React from 'react';
import * as styles from './FacultyBioPage.module.css';
import Layout from '../Layout/Layout';
import Container from '../Container';
import Breadcrumbs from '../Breadcrumbs';

const FacultyBioPage = ({ faculty }) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/faculty', label: 'Faculty' },
                { label: `${faculty.name}` },
              ]}
            />
          </div>
        </Container>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h2 className={styles.mainHeader}>{faculty.name}, {faculty.study}</h2>
              <img
                src={`..` + `${faculty.image}`}
                alt={faculty.name}
                className={styles.facultyImage}
              />
              <h3 className={styles.facultyDesignation}>{faculty.designation}</h3>
              <br />
              <h4>Courses:</h4>
              <ul className={styles.list}>
                {faculty.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
              <h4>Bio:</h4>
              <br />
              <p>{faculty.bio}</p>
              <br />
              <h4>Research Interests:</h4>
              <ul className={styles.list}>
                {faculty.researchInterests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
              <h4>Address:</h4>
              <br />
              <p>{faculty.address.join(', ')}</p>
              <br />
              <h4>Email:</h4>
              <br />
              <p>{faculty.email.join(', ')}</p>
              <br />
              <h4>Phone:</h4>
              <br />
              <p>{faculty.phone.join(', ')}</p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FacultyBioPage;
