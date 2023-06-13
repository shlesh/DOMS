import React from 'react';
import * as styles from './admissions.module.css';
import { SEO } from "../components/seo"
import Layout from '../components/Layout/Layout';
import Container from '../components/Container';

const InfrastructurePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        
        <Container>
          <div className={styles.section}>
            {/* <span>IIIT-Allahabad announces admissions for its 2 years MBA Program 2023</span> */}
            <div className={styles.subSection}>
              <h2 className={styles.mainHeader}>Infrastructure</h2>
              <br/>
              <strong>Business Intelligence Lab</strong>
              <p>
                Business Intelligence lab has been developed in the department keeping in consideration 
                of students' interest and academic research in the developing field of Business 
                Intelligence and Web Analytics. The lab houses facilities for students and researchers 
                to work on projects and application covering issues related to data mining, business 
                intelligence, web analytics using:
                <ol>
                  <li>Big Data</li>
                  <li>Hadoop and other similar application</li>
                </ol>
                The impact would enable developing proficiency among students and also creation of 
                new knowledge through collaboration among faculties and students of different streams 
                of management, technology and allied sectors. 
              </p>
              <br/>
              <strong>Strategy War Room</strong>
              <p>
                Objective of the War Room is to enable the participants to develop vertical skills 
                leading to scenario development and analysis, option evaluation, resource allocation 
                and developing strategies and their implementation. A war room is a meeting room for 
                the purpose of discussing project management. The room is a place where our student 
                teams discuss the development of a plan to specifically and successfully accomplish 
                an assigned project. In addition, they may discuss the resources needed such as man 
                power, budget, timeline and possible challenges to be faced and what can be done 
                about the pitfalls, which may occur. In the room, they also talk about the execution 
                of the project, the step by step process of accomplishing their goal.
              </p>
              <br/>
              <strong>Management Clinic</strong>
              <p>
                Management Clinic as an outreach initiative of IIIT-Allahabad to help and support 
                Micro & Small Business:
                <ul>
                  <li>To create efficient and effective enterprises through ‘Consulting’ & ‘Process Management’</li>
                  <li>Introducing lean and agile methods / technologies for BPM (Business Process Management)</li>
                </ul>
              </p>
              <br/>
              <strong>Library</strong>
              <p>
                The IIIT-A central library has a repository of more than 50000 books concerning myriad disciplines 
                of study such as pure and computer science, information technology, information security and 
                management. It can accommodate up to 150 students at a time. The e-media section of the library 
                has 50 computer systems and is largely meant for facilitating e-reading amongst the students. 
                A collection of more than 2000 CDs equipped with drivers, tools and recorded lectures aim at 
                enhancing the conceptual understanding of the students on various subjects and topics. It 
                also proves handy for students who prepare for placements. The in-house developed automated 
                library management system with its web portal provide the facility of accessing the 
                information related to the availability and non-availability of books for issuing and 
                reserving them beforehand. The library also has subscribed to more than 50 daily newspapers, 
                magazines and newsletters. A dedicated team of librarian and staff ensure timely upkeep and 
                smooth management of the resources. The library opens 7 days a week and encourages the 
                reading and academic endeavours of the students.
              </p>
              <br/>
              <strong>Campus Network</strong>
              <p>
                IIITA has a well-established network infrastructure both for the local(LAN) as well as access 
                to the internet. It is a medium sized network and approximately consists of 2000 nodes. The 
                internet is facilitated by dedicated link from National Informatics Centre of 250Mbps including 
                a redundant wireless link of 10Mbps to ensure connectivity in case of technical breakdown. 
                Along with consistent connectivity, IIITA provided native web services to its users like 
                E-Mail, Web Server, Profile service, Cloud file sharing, etc. All these web services and 
                the network are responsibly managed by IIITA’s Network Development Engineering and Management Team.
              </p>
              <br/>
              <strong>Sports Facility</strong>
              <p>
                IIIT-Allahabad provides an excellent physical activities infrastructure for its residents to ensure that 
                academic development is duly supplemented by sufficient physical development as well.A well maintained 
                football ground – complete with spectator stands serves as the principal venue for most of the sports 
                events organized by “Spirit” – the sports club of IIIT-Allahabad.The institute also provides flood lit 
                basketball, tennis, squash courts, duly marked athletic track and swimming pool to ensure that students 
                have sufficient venues to engage in games of their choice. To further complement these venues, Student 
                Activity Center (SAC) houses a table tennis facility along with a billiards room for those interested 
                in indoor activities.
              </p>
              <br/>
              <strong>Labs</strong>
              <p>
                The institute takes pride in its laboratory facilities which cover all the major aspects of Electronics & 
                Communication and Information Technology. The labs impart sound practical skills to students with numerous 
                projects being researched in them. Students have round the clock access to each of these labs.
              </p>
              <br/>
              <strong>Hostels</strong>
              <p>
                The Boys Hostel Campus consisting of BH1, BH2, BH3 and BH4, situated across the road from the main campus, 
                is a vibrant place allotted to the present students and research scholars of the campus. With a residential 
                capacity exceeding 800 and a new hostel BH5 coming up and soon to be operational, the boys hostel campus is 
                the perfect place to be at peace and rest or to put in more of one’s strength and energy when not involved 
                elsewhere in some other pursuit of life which may not include academics. IIIT Allahabad provides hostel 
                facility with a homely environment to the lady scholars of the institute. It consists of three hostels 
                GH1, GH2, GH3 constituting separate air conditioned mess and gym facilities with 24hrs guidance of 
                caretakers. For the all round development, the students can access the facility of basketball court, 
                badminton court. Wardens visit the hostel regularly to monitor and ensure the proper functioning of 
                the hostels and the comfort of the students. Major discussions and activities among the students can 
                be carried out in the common room. Timings are strictly adhered to for the incoming and outgoing of 
                the students for their safety. Regular attendance is taken by the caretaker. Ample green cover all 
                around the residential area provides a visually appealing and healthy environment for the residents. 
                Different festivals and cultural events are celebrated together within the hostel campus in a very 
                friendly and homely atmosphere.
              </p>
              <br/>
              <strong>Medical Facility</strong>
              <p>
                The health center of the institute is a 24×7 functional body that provides OPD care and first aid 
                facilities for the residents where prompt treatment for ailments and small wounds can be availed. A 
                multi-bed hospital meant for admitting students with greater illness is also maintained. Facilities 
                like ECG and Pathology for basic routine tests on weekdays are also available and can be availed as per need.
              </p>
            </div>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default InfrastructurePage;

export const Head = () => (
  <SEO title="Infrastructure" 
    description="MBA at IIITA boasts of the latest and greatest, find out more! "
  />
)