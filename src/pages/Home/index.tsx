import React, { useState, useRef } from 'react';
import {
  RiArrowRightSLine,
  RiStarFill,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
} from 'react-icons/ri';
import Slider from 'react-slick';

// Slick carousel css styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Container from '../../components/Container';

import Navigation from '../../components/Navigation';
import Header from '../../components/Header';

import Explore from './Explore';

import Card from '../../components/Card';

import { reactSlickSettings } from '../../utils/carousel';

import {
  Introduce,
  Background,
  IntroduceContent,
  Adventure,
  AdventureContent,
  SlideButton,
} from './styles';

const Home: React.FC = () => {
  const customSlider = useRef<Slider>(null);
  const [adventureFocus, setAdventureFocus] = useState<boolean>(false);

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

        <Adventure>
          <h2>Descubra as aventuras do Airbnb</h2>
          <p>
            Viagens de vários dias organizadas por especialistas locais com
            atividades, refeições e alojamento incluídos
          </p>

          <AdventureContent
            onMouseOver={() => setAdventureFocus(true)}
            onMouseOut={() => setAdventureFocus(false)}
          >
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
            <SlideButton focus={adventureFocus}>
              <button
                type="button"
                onClick={() => customSlider.current?.slickPrev()}
              >
                <RiArrowDropLeftLine size={40} />
              </button>

              <button
                type="button"
                onClick={() => customSlider.current?.slickNext()}
              >
                <RiArrowDropRightLine size={40} />
              </button>
            </SlideButton>
          </AdventureContent>
        </Adventure>
      </Container>
    </>
  );
};

export default Home;
