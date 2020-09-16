import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

import Container from '../../components/Container';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

import {
  Introduce,
  Background,
  IntroduceContent,
  Explorer,
  ExploreContent,
  ExploreCard,
} from './styles';

interface ExplorationArray {
  image: string;
  name: string;
}

const Home: React.FC = () => {
  const [explorations] = useState<ExplorationArray[]>([
    {
      image:
        'https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg',
      name: 'Habitações',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-1.2.1&w=1000&q=80',
      name: 'Experiencias',
    },
    {
      image:
        'https://images.unsplash.com/photo-1541800569-95a8b25835f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9',
      name: 'Aventuras',
    },
  ]);

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

        <Explorer>
          <h1>Explore airbnb</h1>

          <ExploreContent>
            {explorations.map((explore) => (
              <ExploreCard key={explore.name}>
                <img src={explore.image} alt={explore.name} />
                <p>{explore.name}</p>
              </ExploreCard>
            ))}
          </ExploreContent>
        </Explorer>
      </Container>
    </>
  );
};

export default Home;
