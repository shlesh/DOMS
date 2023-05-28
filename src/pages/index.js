import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
// import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
// import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

// import { generateMockBlogData} from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  // const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'800px'}
        image={'/4.jpg'}
        title={'Department of Management Studies'}
        subtitle={'IIIT Allahabad'}
        ctaText={'Course Structure'}
        ctaAction={goToShop}
        titleColor={"#03045e"}
      />

      {/* Message Container */}
      <div className={styles.messageContainer}>
        <p>
          This is the home of{' '}
          <span className={styles.light_blue}>Department of Management</span>
        </p>
        <p>
          at <span className={styles.light_blue}>IIIT Allahabad</span>
        </p>
      </div>

      {/* Collection Container */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'New Collection'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'highlight image'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini highlight image'}
            title={'HoD’s Address'}
            description={`Having a whole department pushing for excellence`}
            textLink={'shop now'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/3.jpg'} title={`Regular Workshops and activies for student developments`} maxWidth={'660px'} titleColor={"#03045e"} />
        <div className={styles.linkContainers}>
          <Link to={'/workshops'}>Workshops</Link>
          <Link to={'/activities'}>Activities</Link>
        </div>
      </div>

      {/* Quote */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'about the department'}
        quote={
          '“Propelling academic excellence through innovative pedagogy of blended learning inculcating all round self-development by creativity, knowledge exchange, empowerment and enrichment of students and faculty members.”'
        }
      />

      {/* Blog Grid */}
      {/* <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Journal'} subtitle={'Notes on life and style'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div> */}

      {/* Promotion */}
      {/* <div className={styles.sustainableContainer}>
        <Hero
          image={'/banner3.png'}
          title={'Dedicated faculty'}
          subtitle={
            'From caring for our land to supporting our people, discover the steps we’re taking to do more for the world around us.'
          }
          ctaText={'read more'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div> */}      
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
