import React from 'react';

import Container from '../../components/Container';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

import { Introduce, Background } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Header />

        <Introduce>
          <Background>
            <h1>Um mundo inteiro perto de você</h1>
            <p>
              Faça uma viagem diferente e descubra as maravilhas perto de você.
            </p>
            <button type="button">Explore os arredores</button>
          </Background>
        </Introduce>
      </Container>
    </>
  );
};

export default Home;
