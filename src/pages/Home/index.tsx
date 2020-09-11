import React from 'react';

// import { Container } from './styles';

import Navigation from '../../components/Navigation';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <h1 style={{ zIndex: 4 }}>Hello header</h1>
    </>
  );
};

export default Home;
