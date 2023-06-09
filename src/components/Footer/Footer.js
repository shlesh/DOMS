import { Link } from 'gatsby';
import React from 'react';

import Accordion from '../Accordion';
import Container from '../Container';
// import Dropdown from '../Dropdown/Dropdown';
// import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Button from '../Button';
import Config from '../../config.json';
import * as styles from './Footer.module.css';

const Footer = (prop) => {
  // const [email, setEmail] = useState('');

  // const subscribeHandler = (e) => {
  //   e.preventDefault();
  //   setEmail('');
  //   console.log('Subscribe this email: ', email);
  // };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={styles.root}>
      <Container size={'large'} spacing={'min'}>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className={styles.footerLinkContainer} key={indexLink}>
                  {/* for web version */}
                  <div className={styles.footerLinks}>
                    <span className={styles.linkTitle}>
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className={styles.mobileFooterLinks}>
                    <Accordion
                      customStyle={styles}
                      type={'add'}
                      title={linkCollection.subTitle}
                    >
                      {renderLinks(linkCollection)}
                    </Accordion>
                  </div>
                </div>
              );
            })}
            <div className={styles.newsLetter}>
              <div className={styles.newsLetterContent}>
                <span className={styles.linkTitle}>Socials</span>
                {/* <p className={styles.promoMessage}>
                  Our various social handles!
                </p> */}
                <div className={styles.socialContainer}>
                  {Config.social.youtube && (
                    <div
                      onClick={() => handleSocialClick('youtube')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'youtube'}></Icon>
                    </div>
                  )}

                  {Config.social.instagram && (
                    <div
                      onClick={() => handleSocialClick('instagram')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'instagram'}></Icon>
                    </div>
                  )}

                  {Config.social.facebook && (
                    <div
                      onClick={() => handleSocialClick('facebook')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'facebook'}></Icon>
                    </div>
                  )}

                  {Config.social.twitter && (
                    <div
                      onClick={() => handleSocialClick('twitter')}
                      role={'presentation'}
                      className={styles.socialIconContainer}
                    >
                      <Icon symbol={'twitter'}></Icon>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <br/>
          <div style={{justifyContent:"center"}}><span style={{color:"#fff",display:"flex", justifyContent:"center"}}>
                Copyright © {new Date().getFullYear()}  {' '}
                <a target={true} href="https://iiita.ac.in/" className={styles.footerIIITA}>
                  IIITA
                </a> All rights reserved.
              </span></div>
          
        </div>
      </Container>
      {/* <div className={styles.contentBottomContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.contentBottom}>
            <div className={styles.copyrightContainer}>
              <span>
                Copyright © {new Date().getFullYear()} . 
                <Button target={true} href="https://iiita.ac.in/">
                  IIITA
                </Button>{' '}
                Powered by{' '}
                <Button target={true} href="">
                  Gatsby & React
                </Button>
              </span>
            </div>
          </div>
        </Container>
      </div> */}
    </div>
  );
};

export default Footer;
