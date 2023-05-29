import React from 'react';
import * as styles from './admissions.module.css';

import Layout from '../components/Layout/Layout';
// import Banner from '../components/Banner';
import Container from '../components/Container';
import Button from '../components/Button';

const AdmissionsPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        {/* <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        /> */}
        <Container>
          <div className={styles.section}>
            <span>IIIT-Allahabad announces admissions for its 2 years MBA Program 2023</span>
            <div className={styles.subSection}>
              <h3 className={styles.mainHeader}>ADMISSIONS 2023</h3>
              <p></p>
              <strong>How to apply</strong>
              <p>
                Applicants are required to apply online. The candidate needs to get 
                register for filling online application form through the link provided. 
                Application Fee is Rs. 1200/- for General and OBC & Rs.600/- for SC/ST/PH candidates.
              </p>
              <p></p>
              <strong>Eligibility:</strong>
              <p>
                <ol>
                  <li>
                    Bachelor’s Degree of minimum 3 years duration with minimum 50 per cent marks 
                    or equivalent CGPA (45% marks or equivalent CGPA for SC/ST Candidates)
                  </li>
                  <li>
                  Valid CAT/XAT/CMAT/MAT/GMAT score.
                  </li>
                </ol>
              </p>
              <p></p>
              <strong>Revised Important Dates:</strong>
              <table>
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                </tr>
                <tr>
                  <td>Last date of receiving online application</td>
                  <td>31st May, 2023</td>
                </tr>
                <tr>
                  <td>Declaration of shortlisted candidates</td>
                  <td>8th June, 2023</td>
                </tr>
                <tr>
                  <td>Personal Interview at IIIT-Allahabad (offline and online)</td>
                  <td>15th and 16th June, 2023</td>
                </tr>
                <tr>
                  <td>Result Declaration</td>
                  <td>Within 2-3 days of interview</td>
                </tr>
              </table>
            </div>

            <div className={styles.subSection}>
              <h3>Brochure:</h3>
              <br/>
              <Button level={'primary'} href={"/brochure.pdf"} download >Download PDF</Button>
              <br/>
              <h3>Apply now!</h3>
              <br/>
              <Button level={'primary'} href="https://apply.iiita.ac.in/application/authenticate/mba/" target="_blank">Apply Now</Button>
              <br/>
              <br/>
              <h3>Contact Us:</h3>
              <p>
                Department of Management Studies,<br/>
                Indian Institute of Information Technology, Allahabad<br/>
                Devghat Jhalwa, Allahabad – 211015 (U.P.) INDIA<br/>
                Contact Email: 	mba.admission.iiita.ac.in<br/>
                Contact Number:	<ol><li>0532-2922179 (Dr. Utkarsh Goel)</li><li>0532-2922183 (Dr. Sudipta Das) </li></ol>
              </p>
              <p>
                
              </p>
            </div>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default AdmissionsPage;
