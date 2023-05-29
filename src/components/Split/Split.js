import React from 'react';

import Button from '../Button';
import * as styles from './Split.module.css';

const Split = (props) => {
  const { image, alt, title, subtitle, description, ctaText, cta, bgColor } = props;
  return (
    <div className={styles.root}>
      <div
        className={styles.contentContainer}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.detailContainer}>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{description}</p>
          {ctaText && (
            <Button className={styles.button} level={'primary'} onClick={cta}>
              {ctaText}
            </Button>
          )}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={alt}></img>
      </div>
    </div>
  );
};

export default Split;
