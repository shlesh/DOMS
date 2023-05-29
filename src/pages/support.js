import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import * as styles from './support.module.css';

import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Policy from '../components/Policy';
import Container from '../components/Container';

const SupportPage = (props) => {
  const subpages = [
    { title: 'Business Intelligence Lab', key: 'bil' },
    { title: 'Strategy War Room', key: 'swr' },
    { title: 'Management Clinic', key: 'clinic' },
    { title: 'Library', key: 'lib' },
    { title: 'Campus Network', key: 'net' },
    { title: 'Sports Facility', key: 'sports' },
    { title: 'Labs', key: 'labs' },
    { title: 'Hostels', key: 'hostel' },
    { title: 'Medical Facility', key: 'med' },
  ];

  const [current, setCurrent] = useState(subpages[4]);

  const renderElement = (key) => {
    let tempElement = <React.Fragment />;

    switch (key) {
      case 'bil':
        tempElement = <Contact />;
        break;
      case 'swr':
        tempElement = <Policy />;
        break;
      case 'clinic':
        tempElement = <Policy />;
        break;
      case 'lib':
        tempElement = <Policy />;
        break;
      case 'net':
        tempElement = <Policy />;
        break;
      case 'sports':
        tempElement = <Policy />;
        break;
      case 'labs':
        tempElement = <Policy />;
        break;
      case 'hostel':
        tempElement = <Policy />;
        break;
      case 'med':
        tempElement = <Policy />;
        break;
      default:
        break;
    }
    return tempElement;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.location.hash !== '' && props.location.hash !== undefined) {
      const hash = props.location.hash.substring(1);
      const tempCurrent = subpages.filter((detail) => detail.key === hash)[0];
      if (tempCurrent.key !== current.key) {
        setCurrent(tempCurrent);
        window.scrollTo(0, 475);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location]);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={current.title}
          bgImage={'/support.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />

        <div className={styles.navContainer}>
          {subpages.map((details, index) => {
            return (
              <ThemeLink
                onClick={(e) => {
                  navigate(`/support#${details.key}`);
                }}
                key={details.key}
                isActive={current.key === details.key}
                to={`/support#${details.key}`}
              >
                {details.title}
              </ThemeLink>
            );
          })}
        </div>

        <div className={styles.pageContainer}>
          <Container size={'large'} spacing={'min'}>
            {subpages.map((details) => {
              return (
                <div
                  key={details.key}
                  className={`${styles.content} ${
                    current.key === details.key ? styles.show : styles.hide
                  }`}
                >
                  {renderElement(details.key)}
                </div>
              );
            })}
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;
