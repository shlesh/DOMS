import React from 'react';
import Button from '../Button';
import * as styles from './SideLinks.module.css';

const SideLinks = (props) => {

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>External Links</h4>
      </div>
      <div className={styles.linksContainer}>
        <Button level={'secondary'} href="https://bcognizance.iiita.ac.in/" target="_blank" large>bcognizance</Button>
      </div>
    </div>
  );
};

export default SideLinks;
