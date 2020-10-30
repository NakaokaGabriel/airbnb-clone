import React from 'react';

import { Wrapper, Row, GuestType, GuestNumber } from './styles';

const Guest: React.FC = () => {
  return (
    <Wrapper>
      <Row>
        <GuestType>
          <strong>Adultos</strong>
          <span>13 anos ou mais</span>
        </GuestType>
        <GuestNumber>
          <button type="button">-</button>
          <span>0</span>
          <button type="button">+</button>
        </GuestNumber>
      </Row>
    </Wrapper>
  );
};

export default Guest;
