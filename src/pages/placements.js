// src/pages/PlacementsPage.js
import React from 'react';
import CompanyCard from '../components/CompanyCard';
import * as styles from './placements.module.css';

const PlacementsPage = () => {
  const companies = [
    'ICICI Prudential', 'L & T Infotech','BIRD etech Group of IMBR','Indusind Bank','Auditime India','HCL Comnet',
    'Indiabulls','Intel','Tata Teleservices','Compare Infobase','Tech Mahindra','Wipro Infotech','Rolta India',
    'SBI','PWC','Sysman','Infosys','Cvent','BSNL','SHCIL','Asian Paints','Deloitte','First Flight','Power Grid',
    'HAL','Aptech','Wipro consulting','Corporation Bank','RBI','SAIL','Newgen','Ernst & Young','Mtouch Tech',
    'Pantaloons','NGO','A1 Technolgoies (Delhi)','KPMG','Max New York Life','Canara Bank','Jhonson & Jhonson',
    'LeCPL (Delhi)','Matrix','NALCO','Nilestream Tech. Com','ICICI Bank','ACEVA Technologies','DCM Group',
    'Jaipur Rugs','Tata Motors','Bank of Baroda','HCL Infosystems','Wipro BPO','Mtouch Tech.','HDFC Bank',
    'Crompton Greaves','IL & FS','VIP','Wipro','Hindalco','IIT - M','Indiamart','EDU Camp','DSCL','IFFCO',
    'PIAGGO','A-one Technologies','160by2','GMR','Ricoh India Pvt Ltd','DSCL','TAM media research','Telesourcing',
    'Patni Computer Systems','Areva','CRP Technologies','3i Infotech (SDG)','Bajaj Hindustan Private Limited',
    'Infordart Technologies India Ltd'
  ];

  return (
    <div className={styles.placementsPage}>
      <h1>Training & Placements Officer's Message</h1>
      <p>
      The business environment today requires efficient handling of complex, highly unpredictable situations. By providing an excellent 
      mix of highly qualified faculty and unmatched course content, IIIT-Allahabad ensure that our students are well prepared to step 
      into this volatile corporate world and occupy positions of stature. We not only work for placing students to various companies 
      but we also ensure their overall growth. I wish a very successful career ahead to all the students of IIIT-A and feel confident 
      that they will make significant contributions to the organizations they join. It is a matter of privilege to us that you have 
      shown considerable interest in the MBA program of the institute. We here in IIIT-A take it as a matter of pride and great 
      responsibility to be an institute of national importance.
      <br/>
      <br/>
      Dr. Vineet Tiwari
      <br/>
      TPO
      </p>
      <h2>Companies</h2>
      <div className={styles.companiesContainer}>
        {companies.map((company, index) => (
          <CompanyCard key={index} companyName={company} />
        ))}
      </div>
    </div>
  );
};

export default PlacementsPage;
