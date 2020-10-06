import React, { useState } from 'react';

import { Container, ExploreContent, ExploreCard } from './styles';

interface ExplorationArray {
  image: string;
  name: string;
}

const Explore: React.FC = () => {
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
    <Container>
      <h2>Explore airbnb</h2>

      <ExploreContent>
        {explorations.map((explore) => (
          <ExploreCard to="/remain" key={explore.name}>
            <img src={explore.image} alt={explore.name} />
            <h4>{explore.name}</h4>
          </ExploreCard>
        ))}
      </ExploreContent>
    </Container>
  );
};

export default Explore;
