import React from 'react';
import { RiStarFill } from 'react-icons/ri';

import { Container, DestinyContent } from './styles';

import Card from '../../../components/Card';

const Destiny: React.FC = () => {
  return (
    <Container>
      <h2>Destinos do Airbnb Plus em destaque</h2>
      <p>
        Viagens de vários dias organizadas por especialistas locais com
        atividades, refeições e alojamento incluídos
      </p>

      <DestinyContent>
        <Card type="large" to="/">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <h5>Plus de 200 séjours vérifiés</h5>
          <p>À partir de 577€/personne - 3 jours</p>
        </Card>
        <Card type="large" to="/">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <h5>Plus de 200 séjours vérifiés</h5>
          <p>À partir de 577€/personne - 3 jours</p>
        </Card>
        <Card type="large" to="/">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <h5>Plus de 200 séjours vérifiés</h5>
          <p>À partir de 577€/personne - 3 jours</p>
        </Card>
      </DestinyContent>
    </Container>
  );
};

export default Destiny;
