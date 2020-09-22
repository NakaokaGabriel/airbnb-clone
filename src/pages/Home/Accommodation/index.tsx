import React from 'react';
import { RiStarFill } from 'react-icons/ri';

import { Container, AccommodationContent } from './styles';

import Card from '../../../components/Card';

const Accommodation: React.FC = () => {
  return (
    <Container>
      <h2>Alojamento em todo o mundo</h2>

      <AccommodationContent>
        <Card type="medium" to="/">
          <img
            src="https://cdn.theatlantic.com/assets/media/img/photo/2020/06/scenes-antarctica/a01_1725564625-1/original.jpg"
            alt="imagem bonita"
          />

          <div className="content">
            <div>
              <strong>superhost</strong>
              <span>Toledo</span>
            </div>

            <div className="stars">
              <RiStarFill /> 4,98
            </div>
          </div>
          <p>À partir de 577€/personne - 3 jours</p>
        </Card>
      </AccommodationContent>
    </Container>
  );
};

export default Accommodation;
