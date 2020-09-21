import React, { useState, useRef } from 'react';
import { RiArrowRightSLine, RiStarFill } from 'react-icons/ri';
import Slider, { Settings } from 'react-slick';

// Slick carousel css styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  Adventure,
  AdventureContent,
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

  const customSlider = useRef<Slider>(null);

  const reactSlickSettings = {
    infinite: true,
    slidesToShow: 7,
    dots: true,
    draggable: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  } as Settings;

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

        <Adventure>
          <h2>Descubra as aventuras do Airbnb</h2>
          <p>
            Viagens de vários dias organizadas por especialistas locais com
            atividades, refeições e alojamento incluídos
          </p>

          <AdventureContent>
            <Slider {...reactSlickSettings} ref={customSlider}>
              <Card type="mini" to="/">
                <img
                  src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
                  alt="imagem bonita"
                />

                <div>
                  <span>Cayman Islands</span>
                  <h4>2 Nights PACKAGE All Inclusive</h4>
                  <p>À partir de 577€/personne - 3 jours</p>

                  <span className="stars">
                    5.0 <RiStarFill />
                  </span>
                </div>
              </Card>
              <Card type="mini" to="/">
                <img
                  src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
                  alt="imagem bonita"
                />

                <div>
                  <span>Cayman Islands</span>
                  <h4>2 Nights PACKAGE All Inclusive</h4>
                  <p>À partir de 577€/personne - 3 jours</p>

                  <span className="stars">
                    5.0 <RiStarFill />
                  </span>
                </div>
              </Card>
              <Card type="mini" to="/">
                <img
                  src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
                  alt="imagem bonita"
                />

                <div>
                  <span>Cayman Islands</span>
                  <h4>2 Nights PACKAGE All Inclusive</h4>
                  <p>À partir de 577€/personne - 3 jours</p>

                  <span className="stars">
                    5.0 <RiStarFill />
                  </span>
                </div>
              </Card>
              <Card type="mini" to="/">
                <img
                  src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
                  alt="imagem bonita"
                />

                <div>
                  <span>Cayman Islands</span>
                  <h4>2 Nights PACKAGE All Inclusive</h4>
                  <p>À partir de 577€/personne - 3 jours</p>

                  <span className="stars">
                    5.0 <RiStarFill />
                  </span>
                </div>
              </Card>
            </Slider>
          </AdventureContent>
          <button
            type="button"
            onClick={() => customSlider.current?.slickPrev()}
          >
            previous
          </button>
        </Adventure>

        {/* <Card type="medium" to="/">
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

          <p>À partir de 577€/personne - 3 jours</p>
        </Card>

        <Card type="large" to="/">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <h5>Plus de 200 séjours vérifiés</h5>
          <p>À partir de 577€/personne - 3 jours</p>
        </Card> */}
      </Container>
    </>
  );
};

export default Home;
