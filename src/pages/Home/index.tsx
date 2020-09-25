import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

import Container from '../../components/Container';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

import Explore from './Explore';
import Adventure from './Adventure';
import Accommodation from './Accommodation';
import Experience from './Experience';

import { Introduce, Background, IntroduceContent } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Header />

        <Introduce>
          <Background>
            <IntroduceContent>
              <h1>Um mundo inteiro perto de você</h1>
              <p>
                Faça uma viagem diferente e descubra as maravilhas perto de
                você.
              </p>
              <button type="button">
                Explore os arredores
                <RiArrowRightSLine size={28} color="#fff" />
              </button>
            </IntroduceContent>
          </Background>
        </Introduce>

        <Explore />
        <Adventure />
        <Accommodation />
        <Experience />
      </Container>
    </>
  );
};

export default Home;
