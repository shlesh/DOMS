import React from 'react';
import * as styles from './admissions.module.css';
import { SEO } from "../components/seo"
import Layout from '../components/Layout/Layout';
// import Banner from '../components/Banner';
import Container from '../components/Container';
// import Button from '../components/Button';

const StudentsPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        
        <Container>
          <div className={styles.section}>
            {/* <span>IIIT-Allahabad announces admissions for its 2 years MBA Program 2023</span> */}
            <div className={styles.subSection}>
              <h2 className={styles.mainHeader}>Students</h2>
              <br/>
              <strong>List of Ph.D. Scholars Enrolled in the department</strong>
              
              <br/>
              <br/>
              <table border="1">
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Roll No.</th>
                    <th>Scholar Name</th>
                    <th>Supervisor</th>
                    <th>Year of Enrollment</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>IMP2015001</td>
                    <td>SARTHAK SENGUPTA</td>
                    <td>DR ANURIKA VAISH</td>
                    <td>2015</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>IMP2017001</td>
                    <td>UTKARSH DWIVEDI</td>
                    <td>DR MADHVENDRA MISHRA</td>
                    <td>2017</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>IMP2014005</td>
                    <td>SHWETA AGARWAL</td>
                    <td>DR SHAILENDRA KUMAR</td>
                    <td>2014</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>IMP2015002</td>
                    <td>AMAN CHADHA</td>
                    <td>DR VIJAYSHRI TIWARI</td>
                    <td>2015</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5.</td>
                    <td>IMP2016001</td>
                    <td>SHARDUL SHANKAR</td>
                    <td>DR VIJAYSHRI TIWARI</td>
                    <td>2016</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6.</td>
                    <td>RS116</td>
                    <td>KAVITA SINGH</td>
                    <td>DR ANURIKA VAISH</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7.</td>
                    <td>RSM2018505</td>
                    <td>NIMISHA SINGH</td>
                    <td>DR ANURIKA VAISH</td>
                    <td>2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>8.</td>
                    <td>RSM2018002</td>
                    <td>MINANSHU</td>
                    <td>DR MADHVENDRA MISHRA</td>
                    <td>2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>9.</td>
                    <td>RSM2017001</td>
                    <td>KULDEEP SINGH</td>
                    <td>DR MADHVENDRAISHRA</td>
                    <td>2017</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>10.</td>
                    <td>RSM2017002</td>
                    <td>MOHIT KUMAR</td>
                    <td> MADHVENDRA MISHRA</td>
                    <td>2017</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>11.</td>
                    <td>RSM2018001</td>
                    <td>AVIKSHIT YADAV</td>
                    <td>DR MADHVENDRA MISHRA</td>
                    <td>2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>12.</td>
                    <td>RSM2018506</td>
                    <td>JITENDRA YADAV</td>
                    <td>DR MADHVENDRA MISHRA</td>
                    <td>2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>13.</td>
                    <td>RSM2018003</td>
                    <td>KAJOL</td>
                    <td>DR RANJIT SINGH</td>
                    <td>2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>14.</td>
                    <td>RSM2018004</td>
                    <td>SABYASACHI MONDAL</td>
                    <td>DR RANJIT SINGH</td>
                    <td>2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">15.</td>
                    <td>RSM2018501</td>
                    <td>SRABANTI DEBNATH</td>
                    <td>DR RANJIT SINGH</td>
                    <td align="center">2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">16.</td>
                    <td>RSM2018005</td>
                    <td>ANUBHAV SRIVASTAVA</td>
                    <td>DR SHAILENDRA KUMAR</td>
                    <td align="center">2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">17.</td>
                    <td>RSM2019004</td>
                    <td>JYOTI PRAKASH DAS</td>
                    <td>DR SHAILENDRA KUMAR</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">18.</td>
                    <td>RSM2019002</td>
                    <td>PRIYA SHAH</td>
                    <td>DR SHASHIKANT RAI</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">19.</td>
                    <td>RSM2019001</td>
                    <td>UPASANA SINGH</td>
                    <td>DR SUDIPTA DAS</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">20.</td>
                    <td>RSM2018503</td>
                    <td>AMRITA DUTT</td>
                    <td>DR VIJAISHRI TEWARI</td>
                    <td align="center">2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">21.</td>
                    <td>RSM2018504</td>
                    <td>CHANDRA KANT UPADHYAY</td>
                    <td>DR VIJAISHRI TEWARI</td>
                    <td align="center">2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">22.</td>
                    <td>RSM2018502</td>
                    <td>AKRITI GUPTA</td>
                    <td>DR VIJAISHRI TEWARI</td>
                    <td align="center">2018</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">23.</td>
                    <td>RSM2019003</td>
                    <td>SWATI YADAV</td>
                    <td>DR VINEET TIWARI</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">24.</td>
                    <td>RSM2020501</td>
                    <td>AKSHITA SINGH</td>
                    <td>Dr. Shailendra Kumar</td>
                    <td align="center">2020</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">25.</td>
                    <td>RSM2020502</td>
                    <td>KARTIKEYA ASHOK</td>
                    <td>Dr. Pragya Singh</td>
                    <td align="center">2020</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">26.</td>
                    <td>RSM2020503</td>
                    <td>MOHAMMAD ALIJAH HASAN</td>
                    <td>Dr. Sudipta Das</td>
                    <td align="center">2020</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">27.</td>
                    <td>RSM2020504</td>
                    <td>RISHABH JAISWAL</td>
                    <td></td>
                    <td align="center">2020</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">28.</td>
                    <td>RWM2019501</td>
                    <td>WING CO ANURAG CHANDRA</td>
                    <td>DR MADHVENDRA MISHRA</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">29.</td>
                    <td>RWM2019502</td>
                    <td>SHRI DHEER SINGH</td>
                    <td>DR SAURABH MISHRA</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">30.</td>
                    <td>RWM2019002</td>
                    <td>SMT.SUMAN AGARWAL</td>
                    <td>DR RANJIT SINGH</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">31.</td>
                    <td>RWM2019004</td>
                    <td>LT.COL.VIKRAM SINGH RANA</td>
                    <td>DR SHAILENDRA KUMAR</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">32.</td>
                    <td>RWM2019001</td>
                    <td>SHRI SANJAY TANDON</td>
                    <td>DR VIJAISHRI TEWARI</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td align="center">33.</td>
                    <td>RWM2019003</td>
                    <td>COL.KAMAL KISHORE MISHRA</td>
                    <td>DR VIJAISHRI TEWARI</td>
                    <td align="center">2019</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default StudentsPage;

export const Head = () => (
  <SEO title="Students" 
    description="Students enrolled in the Ph.D. course at DoMs, IIITA"
  />
)