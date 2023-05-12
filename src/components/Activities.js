import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/Activities_1.jpg';
import img2 from '../assets/Activities_2.jpg';
import img3 from '../assets/Activities_3.jpg';

const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const ActivitiesText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Headline = styled.h2`
  font-size: 1.5rem;
  color: #FF0000;
`;
const SimpleText = styled.div`
  font-size: 0.5rem;
  color: #000000;
`;


const Activities = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ActivitiesContainer>
        <ActivitiesText>Activities</ActivitiesText>

        <Headline>Workshop on Crafting Research</Headline>
        <SimpleText>17.12.20 to 19.12.20</SimpleText>
        <SimpleText>Dr. Shailendra Kumar,Dr. Utkarsh Goel and Dr. Parikshit Joshi</SimpleText>
        <SimpleText>Scientific Research Methods helps a researcher in exploring better insights of the problem or situation. The 3-Day Workshop aims at inculcating the concept of Scientific Research amongst the researchers by focusing of the philosophical aspects of theory building and statistical aspects related to theory validation. The Workshop also covers several multivariate data analysis techniques from the experts. Proper hands on with area experts will also be provided to the participants.</SimpleText>

        <Headline>Workshop on “Entrepreneurship Development”</Headline>
        <SimpleText>19.09.20 to 23.09.20</SimpleText>
        <SimpleText>Dr. Ranjit Singh and Dr. Vijaishri Tewari</SimpleText>
        <SimpleText>The workshop has the objective of introducing the participants with fundamental of entrepreneurship development so that they can understand the requirements and challenges in this area. The applied aspect of this workshop will be the practical sessions where they can apply this knowledge in decision making.</SimpleText>

        <Headline>Five days FDP Workshop on “Creative problem solving and Critical thinking”</Headline>
        <SimpleText>19.09.20 to 23.09.20</SimpleText>
        <SimpleText>Dr. Madhvendra Misra and Dr. Vijaishri Tewari</SimpleText>
        <SimpleText>Creative problem solving and critical thinking has been considered as potent tool to solve Complex problems in the industry as well as the academic circle. In this FDP & Workshop it is aimed to use established methods of Creative problem solving and critical thinking to approach the problem and move towards a solution which not only satisfies the constraints but also transcends the current boundaries created due to constrained viewpoint at prospective of agents involved in</SimpleText>

        <Headline>ATAL sponsored FDP Programme on “Emotional Intelligence”</Headline>
        <SimpleText>13.09.20 to 17.09.20</SimpleText>
        <SimpleText>Dr. Pragya Singh</SimpleText>
        <SimpleText>Emotional intelligence (otherwise known as emotional quotient or EQ) is the ability to understand, use, and manage your own emotions in positive ways to relieve stress, communicate effectively, empathize with others and defuse conflict. The FDP will guide to use emotional information to guide thinking and behavior, and manage and/or adjust emotions to adapt to environments or achieve one's goal.</SimpleText>

        <Headline>“Colloquium on Information Flux and its impact on Societal Resilience : A case of conflict or concord”</Headline>
        <SimpleText>22.08.20 to 23.08.20</SimpleText>
        <SimpleText>Dr. Anurika Vaish, Dr. Vijaishri Tewari and Dr. Madhvendra Misra</SimpleText>
        <SimpleText>The colloquium aims to provide a platform for the students, researchers and academicians to share the knowledge and ideas on recent trends in the field of technology and management on the issues and challenges presently faced in the networking folklore particularly in the prevailing pandemic scenario that has given quantum jump to the flow of information and social networking.</SimpleText>

        <Headline>Workshop on “Innovation Management and Entrepreneurship Development”</Headline>
        <SimpleText>20.07.20 to 24.07.20</SimpleText>
        <SimpleText>Dr. Ranjit Singh,Dr. Vijaishri Tewari and Dr. Madhvendra Misra</SimpleText>
        <SimpleText>Innovation Management and Entrepreneurship Development is gradually becoming very significant in various areas of business. Innovative start-ups and new enterprises act as a catalyst for the economy. The workshop focuses on the basic and advanced techniques of innovation and entrepreneurial development and how it can be imbibed to the participants.</SimpleText>

        <Headline>Third Summer School on “Behavioral Finance”</Headline>
        <SimpleText>15.06.20 to 19.06.20</SimpleText>
        <SimpleText>Dr. Ranjit Singh and Dr. Shashikant</SimpleText>
        <SimpleText>Behavioral finance is an emerging area of study which considers the theories based on psychology to elucidate the anomalies in the financial market. The course has the objective of introducing the participants with fundamental of behavioral finance and intends to take them to a stage where they can apply this knowledge in everyday decision making.</SimpleText>


        <Headline>A talk on Digital and IT Transformations into decision making.</Headline>
        <SimpleText>30th Oct 2017</SimpleText>
        <div style={{ display: "flex" }}>
          <img src={img1} width={300} height={250} alt='Image1'></img>
          <SimpleText>A guest lecture was delivered by Prof. D.K. Pandiya, Ex-Pro Vice Chancellor and presently working as Senior Professor of Assam University. His area of work is HRM and OB. The talk was about creativity and innovation and how it could be attempted by the technique of brainstorming. The importance and relevance of change was described with examples. Later on, the stages and process of brainstorming was described to the students with a practical brainstorming session by taking up a sample problem Overall it was a quite good experience for the students to understand the importance of creativity and brainstorming.</SimpleText>
        </div>

        <SimpleText>Dept. of management studies stepped on Monday, October, 30th into an insightful talk on “Digital and IT transformations into decision making. The talk has a featured speaker Mr. Prashant Mishra, who is a Director IT- Aon, introducing and discussing with students, research scholars about the digital transformations helpful in taking strategic business decisions. Mr. Mishra has shared his hands on experience of informative decision-making taken in Aon and other corporations in different capacities. He has discussed recent trends in IT, HR, and marketing areas where informed decisions has an important role in order to have successful go through. Design thinking, multiplexing of human-beings, specialized and commodity skills, etc., are some burning topics from the recent trends have been the center of attraction in the talk. Students and Research scholars of management, has an interactive session with Mr. Mishra and have gained wonderful insight and learning experience during the talk. Mr. Mishra has inspired audiences to have specialized skills in areas of IT and management to sustain in their future jobs, in his ending notes. The talk concludes with a vote of thanks and souvenir presented by Dr. Madhvendra Misra, to the speaker, on behalf of the entire dept. of Management studies and IIIT-A.</SimpleText>
        <Headline>Guest Lecture by Prof. D.K. Pandiya</Headline>
        <SimpleText>27th October, 2016</SimpleText>

        <div style={{ display: "flex" }}>
          <img src={img2} alt='Image2'></img>
          <SimpleText>A guest lecture was delivered by Prof. D.K. Pandiya, Ex-Pro Vice Chancellor and presently working as Senior Professor of Assam University. His area of work is HRM and OB. The talk was about creativity and innovation and how it could be attempted by the technique of brainstorming. The importance and relevance of change was described with examples. Later on, the stages and process of brainstorming was described to the students with a practical brainstorming session by taking up a sample problem Overall it was a quite good experience for the students to understand the importance of creativity and brainstorming.</SimpleText>
        </div>
        <Headline>Workshop on Leadership by Mrs. Yashodhara Raj</Headline>
        <SimpleText>17th Sep 2016</SimpleText>
        <div style={{ display: "flex" }}>
          <img src={img3} alt='Image3'></img>
          < SimpleText>A workshop was conducted by Corporate Trainer & Success Coach Yashodhara Raj for students of DOMS on personality development and ways to tackle issues in corporate life. Communication, situational leadership, etc. qualities that a leader should have was demonstrated by fun activities and games. It also helped to understand the various aspects of management like leadership, coordination, team work , trust on your teammates, how to build different strategies. The activities focused on teamwork, co-ordination, leadership, strategy formulation, motivation, decision-making, conflict handling, common goal achievement, emotional intelligence.</SimpleText>
        </div>
      </ActivitiesContainer>
    </div>
  );
};

export default Activities;
