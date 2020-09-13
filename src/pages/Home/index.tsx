import React from 'react';

import Container from '../../components/Container';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Header />
        <h1>hello world</h1>
      </Container>
    </>
  );
};

export default Home;
