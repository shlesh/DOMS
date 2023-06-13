import React from 'react';
import * as styles from './admissions.module.css';
import { SEO } from "../components/seo"
import Layout from '../components/Layout/Layout';
// import Banner from '../components/Banner';
import Container from '../components/Container';
import PhotoGallery from '../components/PhotoGallery';

const GalleryPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        
        <Container>
          <div className={styles.section}>
            {/* <span>IIIT-Allahabad announces admissions for its 2 years MBA Program 2023</span> */}
            <div className={styles.subSection}>
              <h2 className={styles.mainHeader}>Gallery</h2>
              <br/>
              <PhotoGallery />
              
            </div>
          </div>

        </Container>
      </div>
    </Layout>
  );
};

export default GalleryPage;

export const Head = () => (
  <SEO title="Photo Gallery" 
    description="Have a look at our department and what makes it stand out!"
  />
)