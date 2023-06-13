import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './404.module.css';
import { SEO } from "../components/seo"
import Container from '../components/Container';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <br/>
          <h1>404 Error</h1>
          <h2>Page not found</h2>
          <p>
            Uh oh, looks like the page you are looking for has been moved or no
            longer exists.
          </p>
          <br/>
          {/* <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.searchContainer}>
              <FormInputField
                id={'name'}
                value={search}
                handleChange={(_, e) => setSearch(e)}
                type={'text'}
              />
              <Button type={'submit'} level={'primary'}>
                search
              </Button>
            </div>
          </form> */}
        </div>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;


export const Head = () => (
  <SEO title="404 | Page not found" 
    description="The page youre looking for could not be found, hence you're being served this!"
  />
)