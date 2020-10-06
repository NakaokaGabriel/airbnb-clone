import React from 'react';

import { Content } from './styles';

import Navigation from '../../components/Navigation';
import Container from '../../components/Container';
import Header from '../../components/Header';

import Accommodation from './Accommodation';

const Remain: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Header />

        <Content>
          <h1>Acomodações para você</h1>

          <Accommodation title="São Paulo" />
          <Accommodation title="Rio de Janeiro" />
        </Content>
      </Container>
    </>
  );
};

export default Remain;
