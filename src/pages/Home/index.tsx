import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';

import Container from '../../components/Container';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

import Card from '../../components/Card';

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
          <h2>Explore airbnb</h2>

          <ExploreContent>
            {explorations.map((explore) => (
              <ExploreCard key={explore.name}>
                <img src={explore.image} alt={explore.name} />
                <h4>{explore.name}</h4>
              </ExploreCard>
            ))}
          </ExploreContent>
        </Explorer>

        <Card type="mini">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <div>
            <span>Cayman Islands</span>
            <h4>2 Nights PACKAGE All Inclusive</h4>
            <p>À partir de 577€/personne - 3 jours</p>

            <span className="stars">5.0 stars</span>
          </div>
        </Card>

        <Card type="medium">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <div className="content">
            <div>
              <strong>superhost</strong>
              <span>Toledo</span>
            </div>
            <span className="stars">5.0 stars</span>
          </div>
        </Card>

        <Card type="large">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <h5>Plus de 200 séjours vérifiés</h5>
          <p>À partir de 577€/personne - 3 jours</p>
        </Card>
      </Container>
    </>
  );
};

export default Home;
