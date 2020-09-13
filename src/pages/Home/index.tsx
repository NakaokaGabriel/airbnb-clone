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
      </Container>
    </>
  );
};

export default Home;
