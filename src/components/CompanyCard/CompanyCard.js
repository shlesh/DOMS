// src/components/CompanyCard.js
import React from 'react';
import * as styles from './CompanyCard.module.css';

const CompanyCard = ({ companyName }) => {
  return (
    <div className={styles.companyCard}>
      <h3>{companyName}</h3>
    </div>
  );
};

export default CompanyCard;
