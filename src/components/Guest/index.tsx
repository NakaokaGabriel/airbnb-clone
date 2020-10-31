import React, { useLayoutEffect, useRef, useCallback } from 'react';

import { Wrapper, Row, GuestType, GuestNumber } from './styles';

interface Props {
  guest: boolean;
  setGuest: React.Dispatch<React.SetStateAction<boolean>>;
}

const Guest: React.FC<Props> = ({ guest, setGuest }) => {
  const guestRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(
    (event) => {
      if (!guestRef.current?.contains(event.target)) {
        setGuest(false);
      }
    },
    [setGuest],
  );

  useLayoutEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <Wrapper ref={guestRef} toggleGuest={guest}>
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
