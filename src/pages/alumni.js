import React from 'react';
import * as styles from './admissions.module.css';
import { SEO } from "../components/seo"
import Layout from '../components/Layout/Layout';
import Split from '../components/Split';
import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import Button from '../components/Button';

const AlumniPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.section}>
            <div className={styles.subSection}>
              <h3 className={styles.mainHeader}>Alumni Registration</h3>
              <p></p>
              {/* <form action="mailto:recipient@example.com" method="get" enctype="application/x-www-form-urlencoded">
                Subject:<br/>
                <input type="text" name="subject" placeholder="Your Name"/><br/>
                Email:<br/>
                <input type="email" name="email" placeholder="Your Email"/><br/>
                Message:<br/>
                <textarea name="body" rows="5" cols="30" placeholder="Your Message">hello there
                  hi{'\n'}
                  bruh</textarea><br/>
                <input type="submit" value="Send"/>
              </form> */}
              {/* <ContactForm/> */}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default AlumniPage;

export const Head = () => (
  <SEO title="Alumni Registration" 
    description="We have an ever expanding network of alumni! Please do register yourselves."
  />
)