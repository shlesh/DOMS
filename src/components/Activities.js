import React from 'react';
import styled from 'styled-components';

const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
    <div style={{display: "flex", justifyContent:"center"}}>
    <ActivitiesContainer>
      <ActivitiesText>Activities</ActivitiesText>

      <Headline>Workshop on Crafting Research</Headline> 
      <SimpleText>17.12.20 to 19.12.20</SimpleText>
      <SimpleText>Dr. Shailendra Kumar,Dr. Utkarsh Goel and Dr. Parikshit Joshi</SimpleText>
      <SimpleText>Scientific Research Methods helps a researcher in exploring better insights of the problem or situation. The 3-Day Workshop aims at inculcating the concept of Scientific Research amongst the researchers by focusing of the philosophical aspects of theory building and statistical aspects related to theory validation. The Workshop also covers several multivariate data analysis techniques from the experts. Proper hands on with area experts will also be provided to the participants.</SimpleText>

      <Headline>Workshop on “Entrepreneurship Development”</Headline>
      <Headline>Five days FDP Workshop on “Creative problem solving and Critical thinking”</Headline>
      <Headline>ATAL sponsored FDP Programme on “Emotional Intelligence”</Headline>
      <Headline>“Colloquium on Information Flux and its impact on Societal Resilience : A case of conflict or concord”</Headline>
      <Headline>Workshop on “Innovation Management and Entrepreneurship Development”</Headline>
      <Headline>Third Summer School on “Behavioral Finance”</Headline>
      <Headline>A talk on Digital and IT Transformations into decision making.</Headline>
      <Headline>Guest Lecture by Prof. D.K. Pandiya</Headline>
      <Headline>Workshop on Leadership by Mrs. Yashodhara Raj</Headline>
    </ActivitiesContainer>
    </div>
  );
};

export default Activities;
