import React from 'react';
import styled from 'styled-components';

const PlacementsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`;

const PlacementText = styled.h1`
display: flex;
padding: 0px;
  width: 100%;
`;

const Headline = styled.h1`
font-size: 2 rem;
color: #FF0000;
margin-right:0px;

`;


const Simpletext  = styled.div`
font-size: 1 rem;
color: #000000;
margin-right:10px;
margin-left:10px;
`;

const Placements = () => {
  return (
    <PlacementsContainer>
      
         <Headline>Training & Placements Officer's Message</Headline> 
        <Simpletext>The business environment today requires efficient handling of complex, highly unpredictable situations. By providing an excellent mix of highly qualified faculty and unmatched course content, IIIT-Allahabad ensure that our students are well prepared to step into this volatile corporate world and occupy positions of stature. We not only work for placing students to various companies but we also ensure their overall growth. I wish a very successful career ahead to all the students of IIIT-A and feel confident that they will make significant contributions to the organizations they join. It is a matter of privilege to us that you have shown considerable interest in the MBA program of the institute. We here in IIIT-A take it as a matter of pride and great responsibility to be an institute of national importance.
</Simpletext>
     
    </PlacementsContainer>
  );
};

export default Placements;
