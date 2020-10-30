import React, { useState, useLayoutEffect, useRef, useCallback } from 'react';

import { Wrapper, Row, GuestType, GuestNumber } from './styles';

interface Props {
  guest: boolean;
}

const Guest: React.FC<Props> = ({ guest }) => {
  const guestRef = useRef(null);

  const [toggleGuest, setToggleGuest] = useState<boolean>(true);

  useLayoutEffect(() => {
    setToggleGuest(guest);
  }, [guest]);

  return (
    <Wrapper ref={guestRef} toggleGuest={toggleGuest}>
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
