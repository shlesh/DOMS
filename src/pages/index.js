import * as React from 'react';
import { SEO } from "../components/seo"
import Container from '../components/Container';
import Hero from '../components/Hero';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import Quote from '../components/Quote';
import Title from '../components/Title';
import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';

const IndexPage = () => {
  const goToCourses = () => {
    navigate('/course');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'800px'}
        image={'/4.jpg'}
        // header={'IIIT Allahabad'}
        title={'Department of Management Studies'}
        subtitle={'IIIT Allahabad'}
        ctaText={'Course Structure'}
        ctaAction={goToCourses}
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
          <Title name={'Strength of department'} />
          {/* <ProductCollectionGrid /> */}
          <p style={{maxWidth:"100%", }}>The strength of the department lies in the faculty who are having exposure to fields of Management 
          and IT, belonging to various institutes of national importance and centers of excellence. Apart from 
          having its regular faculty members, the Institute has also been very actively supported by experts 
          from industry and academics like those from:</p>
          <ul className={styles.list}>
            <li>ISB Hyderabad</li>
            <li>Hughes Software Systems</li>
            <li>Jindal Iron & Steel Co. Ltd</li>
            <li>BSNL</li>
            <li>Telecom Consultant India Pvt. Ltd, etc.</li>
            <li>Eli Broad School of Business at the Michigan State University, U.S.A</li>
            <li>Buffalo University</li> <li>Sunny New York</li> <li>IIM Ahmedabad</li>
            <li>IIM Lucknow</li>
            <li>IIM Kolkatta</li>
            <li>Thailand University, LUMBA</li>
            <li>TCS Denmark</li>
          </ul> 
        </Container>
      </div>

      {/* Highlight  */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/faculty_pics/pragyaS.webp'}
            altImage={'highlight image'}
            // miniImage={'/logoiiita.png'}
            // miniImageAlt={'mini highlight image'}
            title={'HoD’s Address'}
            description={`Management as a discipline has effectively endured turbulence of time and reflects newer competencies responding to newer challenges. We at IIIT-A in the Department of Management Studies for last two decades of existence have faced the similar music and duly resonate with the tunes of time.`}
            textLink={'Faculties'}
            link={'/faculty'}
          />
        </Container>
      </div>

      {/* Promotion */}
      <div className={styles.promotionContainer}>
        <Hero image={'/3.jpg'} title={`Regular Workshops and activies for student developments`} maxWidth={'660px'} titleColor={"#03045e"} />
        <div className={styles.linkContainers}>
          <Link to={'/infrastructure'}>Infrastructure</Link>
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
      {/* <AttributeGrid /> */}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="MBA Home" 
    description="The homepage of MBA, IIIT Allahabad. The Department of Management Studies came into existence in 2004 and was constituted with the philosophy of running and managing the programmes with a focus on management & technology. The department offers a 2 Years Full Time MBA which is the backbone to cater to the objective of the department for attaining academic excellence by horizontal & vertical growth"
  />
)