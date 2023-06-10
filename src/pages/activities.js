import React from 'react';
import * as styles from './activities.module.css';

import Layout from '../components/Layout/Layout';
import Split from '../components/Split';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import Button from '../components/Button';

const ActivitiesPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h2 className={styles.mainHeader}>Activites/Workshops</h2>
              <br/>
              {/* <Split  //let this badboy stay, will prolly use later            // sure thing sir
                image={'/cloth.png'}
                alt={'attribute description'}
                title={'Sustainability'}
                subtitle={'Hello there'}
                description={
                  'We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections.'
                }
                // ctaText={'learn more'}
                // cta={() => navigate('/blog')}
                bgColor={'var(--standard-light-grey)'}
              /> */}
              {/* <ContactForm/> */}
              <br/>
              <center><h3 className={styles.workshopTitle}>Workshop on Crafting Research</h3>
              <h5 className={styles.workshopDate}>17.12.20 to 19.12.20</h5>
              <h6 className={styles.workshopBy}>Dr. Shailendra Kumar, Dr. Utkarsh Goel and Dr. Parikshit Joshi </h6></center>
              <p>
              Scientific Research Methods helps a researcher in exploring better insights of the problem 
              or situation. The 3-Day Workshop aims at inculcating the concept of Scientific Research amongst 
              the researchers by focusing of the philosophical aspects of theory building and statistical aspects 
              related to theory validation. The Workshop also covers several multivariate data analysis techniques
              from the experts. Proper hands on with area experts will also be provided to the participants.
              </p>

              <br/>
              <center><h3 className={styles.workshopTitle}>Workshop on “Entrepreneurship Development”</h3>
              <h5 className={styles.workshopDate}>19.09.20 to 23.09.20</h5>
              <h6 className={styles.workshopBy}>Dr. Ranjit Singh and Dr. Vijaishri Tewari</h6></center>
              <p>
              The workshop has the objective of introducing the participants with fundamental of entrepreneurship
              development so that they can understand the requirements and challenges in this area. The applied 
              aspect of this workshop will be the practical sessions where they can apply this knowledge in decision making.

              </p>
              <br/>
              <center><h3 className={styles.workshopTitle}>Five days FDP Workshop on “Creative problem solving and Critical thinking”</h3>
              <h5 className={styles.workshopDate}>19.09.20 to 23.09.20</h5>
              <h6 className={styles.workshopBy}>Dr. Madhvendra Misra and Dr. Vijaishri Tewari</h6></center>
              <p>
              Creative problem solving and critical thinking has been considered as potent tool to solve Complex problems
              in the industry as well as the academic circle. In this FDP & Workshop it is aimed to use established methods 
              of Creative problem solving and critical thinking to approach the problem and move towards a solution which not 
              only satisfies the constraints but also transcends the current boundaries created due to constrained viewpoint at
             prospective of agents involved in.

              </p>
              <br/>
              <center><h3 className={styles.workshopTitle}>ATAL sponsored FDP Programme on “Emotional Intelligence”</h3>
              <h5 className={styles.workshopDate}>13.09.20 to 17.09.20</h5>
              <h6 className={styles.workshopBy}>Dr. Pragya Singh</h6></center>
              <p>
              Emotional intelligence (otherwise known as emotional quotient or EQ) is the ability to understand, use, and manage
              your own emotions in positive ways to relieve stress, communicate effectively, empathize with others and defuse
              conflict. The FDP will guide to use emotional information to guide thinking and behavior, and manage and/or adjust 
              emotions to adapt to environments or achieve one's goal.

              </p>
              <br/>
              <center><h3 className={styles.workshopTitle}>“Colloquium on Information Flux and its impact on Societal Resilience : A case of conflict or concord”</h3>
              <h5 className={styles.workshopDate}>22.08.20 to 23.08.20</h5>
              <h6 className={styles.workshopBy}>Dr. Anurika Vaish, Dr. Vijaishri Tewari and Dr. Madhvendra Misra</h6></center>
              <p>
              The colloquium aims to provide a platform for the students, researchers and academicians to share the knowledge and 
              ideas on recent trends in the field of technology and management on the issues and challenges presently faced in the
              networking folklore particularly in the prevailing pandemic scenario that has given quantum jump to the flow of information
              and social networking.
              </p>

              <center><h3 className={styles.workshopTitle}>Workshop on “Innovation Management and Entrepreneurship Development”</h3>
              <h5 className={styles.workshopDate}>20.07.20 to 24.07.20</h5>
              <h6 className={styles.workshopBy}>Dr. Ranjit Singh,Dr. Vijaishri Tewari and Dr. Madhvendra Misra</h6></center>
              <p>
              Innovation Management and Entrepreneurship Development is gradually becoming very significant in various areas of business.
              Innovative start-ups and new enterprises act as a catalyst for the economy. The workshop focuses on the basic and advanced 
              techniques of innovation and entrepreneurial development and how it can be imbibed to the participants.
              </p>

              <center><h3 className={styles.workshopTitle}>Third Summer School on “Behavioral Finance”</h3>
              <h5 className={styles.workshopDate}>15.06.20 to 19.06.20</h5>
              <h6 className={styles.workshopBy}>Dr. Ranjit Singh and Dr. Shashikant</h6></center>
              <p>
              Behavioral finance is an emerging area of study which considers the theories based on psychology to elucidate the anomalies in
              the financial market. The course has the objective of introducing the participants with fundamental of behavioral finance and 
              intends to take them to a stage where they can apply this knowledge in everyday decision making.
              </p>

              <center><h3 className={styles.workshopTitle}>A talk on Digital and IT Transformations into decision making</h3>
              <h5 className={styles.workshopDate}>30th Oct 2017</h5>
              <h6 className={styles.workshopBy}>Mr. Prashant Mishra</h6></center>
              <p>
              Dept. of management studies stepped on Monday, October, 30th into an insightful talk on “Digital and IT transformations
              into decision making. The talk has a featured speaker Mr. Prashant Mishra, who is a Director IT- Aon, introducing and discussing
              with students, research scholars about the digital transformations helpful in taking strategic business decisions. Mr. Mishra has
              shared his hands on experience of informative decision-making taken in Aon and other corporations in different capacities. He has 
              discussed recent trends in IT, HR, and marketing areas where informed decisions has an important role in order to have successful 
              go through. Design thinking, multiplexing of human-beings, specialized and commodity skills, etc., are some burning topics from the 
              recent trends have been the center of attraction in the talk. Students and Research scholars of management, has an interactive session 
              with Mr. Mishra and have gained wonderful insight and learning experience during the talk. Mr. Mishra has inspired audiences to have 
              specialized skills in areas of IT and management to sustain in their future jobs, in his ending notes. The talk concludes with a vote 
              of thanks and souvenir presented by Dr. Madhvendra Misra, to the speaker, on behalf of the entire dept. of Management studies and IIIT-A.
              </p>
              <center><h3 className={styles.workshopTitle}>Guest Lecture</h3>
              <h5 className={styles.workshopDate}>27th October, 2016</h5>
              <h6 className={styles.workshopBy}>Prof. D.K. Pandiya</h6></center>
              <p>
              A guest lecture was delivered by Prof. D.K. Pandiya, Ex-Pro Vice Chancellor and presently working as Senior Professor of Assam University. 
              His area of work is HRM and OB. The talk was about creativity and innovation and how it could be attempted by the technique of brainstorming. 
              The importance and relevance of change was described with examples. Later on, the stages and process of brainstorming was described to the 
              students with a practical brainstorming session by taking up a sample problem Overall it was a quite good experience for the students to 
              understand the importance of creativity and brainstorming.
              </p>
              <center><h3 className={styles.workshopTitle}>Workshop on Leadership</h3>
              <h5 className={styles.workshopDate}>17th Sep 2016</h5>
              <h6 className={styles.workshopBy}>Mrs. Yashodhara Raj</h6></center>
              <p>
              A workshop was conducted by Corporate Trainer & Success Coach Yashodhara Raj for students of DOMS on personality development and ways to 
              tackle issues in corporate life. Communication, situational leadership, etc. qualities that a leader should have was demonstrated by fun 
              activities and games. It also helped to understand the various aspects of management like leadership, coordination, team work , trust on 
              your teammates, how to build different strategies. The activities focused on teamwork, co-ordination, leadership, strategy formulation, 
              motivation, decision-making, conflict handling, common goal achievement, emotional intelligence.
              
              </p>
            </div>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default ActivitiesPage;
