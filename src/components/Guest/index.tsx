import React from 'react';

import { Wrapper, Row, GuestType, GuestNumber } from './styles';

const Guest: React.FC = () => {
  return (
    <Wrapper>
      <Row>
        <GuestType>
          <strong>Adultos</strong>
          <span>Maior de 13</span>
        </GuestType>
        <GuestNumber>
          <button type="button">-</button>
          <span>0</span>
          <button type="button">+</button>
        </GuestNumber>
      </Row>
      <Row>
        <GuestType>
          <strong>Crianças</strong>
          <span>Idade 2 - 12</span>
        </GuestType>
        <GuestNumber>
          <button type="button">-</button>
          <span>0</span>
          <button type="button">+</button>
        </GuestNumber>
      </Row>
      <Row>
        <GuestType>
          <strong>Bebês</strong>
          <span>Menor de 2</span>
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
