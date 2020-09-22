import React, { useState, useRef, useCallback } from 'react';
import {
  RiStarFill,
  RiArrowDropLeftLine,
  RiArrowDropRightLine,
} from 'react-icons/ri';
import Slider from 'react-slick';

// Slick carousel css styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, AdventureContent, SlideButton } from './styles';

import Card from '../../../components/Card';

import { reactSlickSettings } from '../../../utils/carousel';

const Adventure: React.FC = () => {
  const customSlider = useRef<Slider>(null);
  const [adventureFocus, setAdventureFocus] = useState<boolean>(false);

  const toggleMouseOver = useCallback(() => {
    setAdventureFocus(true);
  }, []);

  const toggleMouseOut = useCallback(() => {
    setAdventureFocus(false);
  }, []);

  return (
    <Container>
      <h2>Descubra as aventuras do Airbnb</h2>
      <p>
        Viagens de vários dias organizadas por especialistas locais com
        atividades, refeições e alojamento incluídos
      </p>

      <AdventureContent
        onMouseOver={toggleMouseOver}
        onMouseOut={toggleMouseOut}
      >
        <Slider {...reactSlickSettings} ref={customSlider}>
          <Card type="mini" to="/cayman">
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
          <Card type="mini" to="/Uruguay">
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
          <Card type="mini" to="/Iceland">
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
          <Card type="mini" to="/Mongolia">
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
    </Container>
  );
};

export default Adventure;
