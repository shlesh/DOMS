import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#aboutMBA'}>
            About MBA Program
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#courseStructure'}>
            Course Structure
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>About our MBA</h3>
            <div id="#aboutMBA" ref={builtRef}>
              <p>
                IIIT-A started its MBA course with specialization in Information Technology in the year 2004, 
                keeping in mind the latest emerging trends in management and future needs of the society. 
                IIIT-A MBA program fosters state-of-the-art approaches to manage the diverse organizational units and settings. 
              </p>
              <p>
                Our MBA program is a dual specialization program (viz: General Management & Functional Areas) which 
                provides graduate students with the advanced knowledge and skills necessary to assume and discharge 
                the duties and responsibilities of managers in high technology industries. Technological advancements 
                have made information management a critical skill for managers at all levels, worldwide. The vast 
                availability of information and explosion of knowledge management tools make accessing information 
                on demand, anytime from anywhere, a new reality need for MBA@ IIITA. 
              </p>
              <p>
                The MBA program prepares a candidate for management positions in a wide range of industries challenged 
                by the complexities of managing information in an era of technological innovation and globalization.
              </p>
              <p>
                The proliferation of information technologies and the need for managing the flow of information requires 
                a new breed of manager. In addition, students will learn to align technology goals to strategic business 
                goals, design client server applications, develop data communication and networking strategies, assess the 
                business risks and rewards of new information technology, apply reengineering principles to business processes, 
                and understand the role of the technology manager in business planning. 
              </p>
              <Button target={true} href="https://jamm.matter.design/">
                Read more about JAMM.™
              </Button>
              <img
                alt={'JAMM Detail'}
                src={'/how-to-use/jamm-sydney-1upd@2x.png'}
                style={{ display: 'block', height: 'auto' }}
              />
            </div>
            <h3>Course Structure</h3>
            <div id={'#courseStructure'} ref={toolsRef}>
              <strong>Semester-wise Course Structure</strong>
              <p></p>
              <table>
                <thead>
                    <tr>
                        <th>Semester</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="7">Semester-I</td>
                        <td>Financial Statements and Analysis</td>
                    </tr>
                    <tr>
                        <td>Business Statistics</td>
                    </tr>
                    <tr>
                        <td>Research Methodology</td>
                    </tr>
                    <tr>
                        <td>Economics</td>
                    </tr>
                    <tr>
                        <td>Management thought & Environment</td>
                    </tr>
                    <tr>
                        <td>IT Infrastructure and Services Mgt.</td>
                    </tr>
                    <tr>
                        <td>Organizational Behavior</td>
                    </tr>
                    <tr>
                        <td rowspan="7">Semester-II</td>
                        <td>Corporate Finance</td>
                    </tr>
                    <tr>
                        <td>Production and Operations Management</td>
                    </tr>
                    <tr>
                        <td>Operation Research</td>
                    </tr>
                    <tr>
                        <td>Human Resource Management</td>
                    </tr>
                    <tr>
                        <td>Marketing Management</td>
                    </tr>
                    <tr>
                        <td>Database Management Systems</td>
                    </tr>
                    <tr>
                        <td>Software Project Management</td>
                    </tr>
                    <tr>
                        <td rowspan="8">Semester-III</td>
                        <td>Strategic Management</td>
                    </tr>
                    <tr>
                        <td>Business Continuity Plan & DRP</td>
                    </tr>
                    <tr>
                        <td>Internal Electives</td>
                    </tr>
                    <tr>
                        <td>Elective (E1) – 1</td>
                    </tr>
                    <tr>
                        <td>Elective (E1) – 2</td>
                    </tr>
                    <tr>
                        <td>Elective (E2) – 1</td>
                    </tr>
                    <tr>
                        <td>Elective (E2) – 2</td>
                    </tr>
                    <tr>
                        <td>Summer Internship</td>
                    </tr>
                    <tr>
                        <td rowspan="8">Semester-IV</td>
                        <td>International Business Management</td>
                    </tr>
                    <tr>
                        <td>Data Mining & Warehousing</td>
                    </tr>
                    <tr>
                        <td>Internal Electives</td>
                    </tr>
                    <tr>
                        <td>Elective (E1) – 1</td>
                    </tr>
                    <tr>
                        <td>Elective (E1) – 2</td>
                    </tr>
                    <tr>
                        <td>Elective (E2) – 1</td>
                    </tr>
                    <tr>
                        <td>Elective (E2) – 2</td>
                    </tr>
                    <tr>
                        <td>Master Project</td>
                    </tr>
                </tbody>
              </table>
              <p>
                
              </p>

              <strong>Electives Basket</strong>
              <p>
                
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Marketing Basket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Advertising and Sales Promotion</td>
                  </tr>
                  <tr>
                    <td>Digital Marketing</td>
                  </tr>
                  <tr>
                    <td>Marketing of Services</td>
                  </tr>
                  <tr>
                    <td>Retail Operations and Management</td>
                  </tr>
                  <tr>
                    <td>International Marketing</td>
                  </tr>
                  <tr>
                    <td>Strategic Marketing</td>
                  </tr>
                  <tr>
                    <td>Business Marketing and Key Account Management</td>
                  </tr>
                  <tr>
                    <td>Consumer Behavior</td>
                  </tr>
                  <tr>
                    <td>Marketing Research</td>
                  </tr>
                  <tr>
                    <td>Luxury Brand Management</td>
                  </tr>
                  <tr>
                    <td>Sports Marketing</td>
                  </tr>
                  <tr>
                    <td>Data-Driven Marketing</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Finance Basket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Security Analysis and Portfolio Management</td>
                  </tr>
                  <tr>
                    <td>International Financial Management</td>
                  </tr>
                  <tr>
                    <td>Strategic Cost Management</td>
                  </tr>
                  <tr>
                    <td>Behaviour Finance</td>
                  </tr>
                  <tr>
                    <td>Management of Banking and Financial Institutions</td>
                  </tr>
                  <tr>
                    <td>Financial Technology</td>
                  </tr>
                  <tr>
                    <td>Financial derivatives and Risk Management</td>
                  </tr>
                  <tr>
                    <td>Project Appraisal and Financing</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Operations Basket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Strategic Sourcing and Logistics Management</td>
                  </tr>
                  <tr>
                    <td>Supply Chain Management</td>
                  </tr>
                  <tr>
                    <td>Project Managementt</td>
                  </tr>
                  <tr>
                    <td>Knowledge Management</td>
                  </tr>
                  <tr>
                    <td>Total Quality Management and Six Sigma</td>
                  </tr>
                  <tr>
                    <td>Sustainable and Global Supply Chains</td>
                  </tr>
                  <tr>
                    <td>Service Operations Management</td>
                  </tr>
                  <tr>
                    <td>Advanced Operations Research</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>HR Basket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Emotional Intelligence and Leadership</td>
                  </tr>
                  <tr>
                    <td>Employer Brand Building</td>
                  </tr>
                  <tr>
                    <td>Strategic HRM</td>
                  </tr>
                  <tr>
                    <td>Creativity and Innovation</td>
                  </tr>
                  <tr>
                    <td>Training and Development</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>IT Basket</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>FIS &amp; IT Audit</td>
                  </tr>
                  <tr>
                    <td>IT Risk Compliance</td>
                  </tr>
                  <tr>
                    <td>IT Governance &amp; control</td>
                  </tr>
                  <tr>
                    <td>Cybersecurity Strategy and Implementation</td>
                  </tr>
                  <tr>
                    <td>Cloud Services &amp; Security</td>
                  </tr>
                  <tr>
                    <td>Search Engine Optimizationtd</td>
                  </tr>
                  <tr>
                    <td>Risk Vulnerability and Physical Assessment</td>
                  </tr>
                  <tr>
                    <td>Expert System Design and Applications</td>
                  </tr>
                  <tr>
                    <td>System Analysis and Design and Software Engineering</td>
                  </tr>
                  <tr>
                    <td>Business Intelligence</td>
                  </tr>
                </tbody>
              </table>
              <strong>Content Management Systems (CMS):</strong>
              <ul>
                <li>Contentful</li>
                <li>WordPress</li>
                <li>Sanity</li>
                <li>Builder.io</li>
              </ul>

              <strong>Advanced Search:</strong>
              <ul>
                <li>Algolia</li>
                <li>Searchspring (roadmap)</li>
                <li>XO (roadmap)</li>
                <li>Syte (roadmap)</li>
              </ul>

              <strong>Product Information Management (PIM):</strong>
              <ul>
                <li>Akeneo</li>
              </ul>

              <strong>Marketing Automation:</strong>
              <ul>
                <li>Klaviyo</li>
                <li>Ortto</li>
                <li>Dot Digital</li>
                <li>Omnisend</li>
              </ul>

              <strong>Customer Support:</strong>
              <ul>
                <li>Gorgias</li>
                <li>Zendesk</li>
              </ul>

              <strong>Reviews and User Generated Content:</strong>
              <ul>
                <li>Yotpo</li>
                <li>Trustpilot</li>
                <li>Reviews.io</li>
              </ul>

              <strong>Physical Locations:</strong>
              <ul>
                <li>Localisr.io</li>
              </ul>

              <p>
                Our team are fanatical about site speed and the agility of a
                composable commerce approach. If you need help to setup a
                Headless architecture, we’d love to hear from you.
              </p>

              <p>
                <Button
                  target={true}
                  href="https://www.matterdesign.com.au/contact/"
                >
                  Contact the team at Matter.
                </Button>
              </p>
            </div>
          </div>
        </Container>
        <div className={styles.imageContainer}>
          <img
            alt={'Best of Breed tools'}
            src={'/how-to-use/logos@2x.png'}
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default HowToUsePage;
