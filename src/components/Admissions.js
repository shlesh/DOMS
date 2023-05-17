import React from 'react';
import styled from 'styled-components';

const AdmissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const AdmissionsText = styled.h1`
  font-size: 3rem;
  color: #000;
  text-align: center;
  margin-top: 2rem;
`;
const Headline = styled.h2`
  font-size: 1.5rem;
  color: #FF0000;
  margin-right:-15px;
`;
const SimpleText = styled.div`
  font-size: 1 rem;
  color: #000000;
`;

const Admissions = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <AdmissionsContainer>
        <AdmissionsText>Admissions</AdmissionsText>
        <Headline>IIIT-Allahabad announces admissions for its 2 years MBA Program 2023</Headline>
        <Headline>How to Apply ?</Headline>
        <SimpleText>Applicants are required to apply online. The candidate needs to get register for filling online application form through the link provided. Application Fee is Rs. 1200/- for General and OBC & Rs.600/- for SC/ST/PH candidates.</SimpleText>
        <Headline>Eligibility:</Headline>
        <SimpleText>
          <ul>
            <li>Bachelor’s Degree of minimum 3 years duration with minimum 50 per cent marks or equivalent CGPA (45% marks or equivalent CGPA for SC/ST Candidates)</li>
            <li>Valid CAT/XAT/CMAT/MAT/GMAT score.</li>
          </ul>
        </SimpleText>

        <Headline>Revised Important Dates:</Headline> 
        <table>
          <tbody>
            <tr>
           <td> Last date of receiving online application </td>
           <th> 31st May, 2023</th>
          
            </tr>
            <tr>
            <td> Declaration of shortlisted candidates </td>
            <th>8th June, 2023 </th>
            </tr>

            <tr>
            <td> Personal Interview at IIIT-Allahabad (offline and online) </td>
            <th> 15th and 16th June, 2023 </th>
            </tr>

            <tr>
            <td> Result Declaration </td>
            <th> Within 2-3 days after interview </th>
            </tr>
          </tbody>
        </table>

      </AdmissionsContainer>
    </div>
  );
};

export default Admissions;
