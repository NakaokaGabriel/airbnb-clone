import React from 'react';

import { Container } from './styles';

const Experience: React.FC = () => {
  return (
    <Container>
      <h2>Experiências com alta classificação</h2>
      <p>
        Viagens de vários dias organizadas por especialistas locais com
        atividades, refeições e alojamento incluídos
      </p>

      <ExperienceContent>
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
      </ExperienceContent>
    </Container>
  );
};

export default Experience;
