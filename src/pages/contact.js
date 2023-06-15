import React from 'react';
import * as styles from './admissions.module.css';
import { SEO } from "../components/seo"
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';

const ContactPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3 className={styles.mainHeader}>Contact Us</h3>
              <hr/>
              {/* <br/>  */}
              <p>
                <strong>Department of Management Studies</strong>
                
                <br/>
                <span>1st Floor</span><br/>
                <span>Lecture Theater Complex</span><br/>
                <span>Indian Institute of Information Technology, Allahabad</span><br/>
                <span>Devghat, Jhalwa</span><br/>
                <span>Allahabad 211012, (UP) INDIA</span><br/>
                <span>Phone: +91-532-292-2180, 2179, 2178</span><br/>
                <span>FAX: +91-532-292-2125</span><br/>
                <span>Email: <a href="mailto:hod.mba@iiita.ac.in" target="_blank">Send Email</a></span>
              </p>
{/* Hello there */}
            </div>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => (
  <SEO title="Contact us" 
    description="Feel free to reach out to us!"
  />
)