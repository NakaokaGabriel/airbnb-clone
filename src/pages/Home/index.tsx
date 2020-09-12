import React from 'react';

// import { Container } from './styles';

import Navigation from '../../components/Navigation';
import Header from './Header';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Header />
      <h1>Hello header</h1>
    </>
  );
};

export default Home;
