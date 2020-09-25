import React from 'react';
import { RiStarFill } from 'react-icons/ri';

import { Container } from './styles';

import Carousel from '../../../components/Carousel';
import Card from '../../../components/Card';

const Adventure: React.FC = () => {
  return (
    <Container>
      <h2>Descubra as aventuras do Airbnb</h2>
      <p>
        Viagens de vários dias organizadas por especialistas locais com
        atividades, refeições e alojamento incluídos
      </p>

      <Carousel>
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
      </Carousel>
    </Container>
  );
};

export default Adventure;
