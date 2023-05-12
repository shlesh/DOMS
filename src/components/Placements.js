import React from 'react';
import styled from 'styled-components';

const PlacementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PlacementsText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;

const Placements = () => {
  return (
    <PlacementsContainer>
      <PlacementsText>
        <h2>Training & Placements Officer's Message</h2>
        <p>The business environment today requires efficient handling of complex, highly unpredictable situations. By providing an excellent mix of highly qualified faculty and unmatched course content, IIIT-Allahabad ensure that our students are well prepared to step into this volatile corporate world and occupy positions of stature. We not only work for placing students to various companies but we also ensure their overall growth. I wish a very successful career ahead to all the students of IIIT-A and feel confident that they will make significant contributions to the organizations they join. It is a matter of privilege to us that you have shown considerable interest in the MBA program of the institute. We here in IIIT-A take it as a matter of pride and great responsibility to be an institute of national importance.
</p>
      </PlacementsText>
    </PlacementsContainer>
  );
};

export default Placements;
