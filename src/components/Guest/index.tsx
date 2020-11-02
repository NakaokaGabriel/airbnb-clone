import React, { useLayoutEffect, useRef, useCallback } from 'react';

import { Wrapper, Row, GuestType, GuestNumber } from './styles';
import { useGuestCount } from '../../hooks/useGuestCount';

interface Props {
  guest: boolean;
  setGuest: React.Dispatch<React.SetStateAction<boolean>>;
}

const Guest: React.FC<Props> = ({ guest, setGuest }) => {
  const {
    setGuestCount,
    adultCount,
    setAdultCount,
    kidCount,
    setKidCount,
    babyCount,
    setBabyCount,
    totalGuestCount,
  } = useGuestCount();

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

  const toggleAdultSub = useCallback(() => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  }, [adultCount, setAdultCount]);

  const toggleAdultAdd = useCallback(() => {
    if (adultCount < totalGuestCount) {
      setAdultCount(adultCount + 1);
    }
  }, [adultCount, setAdultCount, totalGuestCount]);

  const toggleKidSub = useCallback(() => {
    if (kidCount > 0) {
      setKidCount(kidCount - 1);
    }
  }, [kidCount, setKidCount]);

  const toggleKidAdd = useCallback(() => {
    if (kidCount < totalGuestCount) {
      setKidCount(kidCount + 1);
    }
  }, [kidCount, setKidCount, totalGuestCount]);

  const toggleBabySub = useCallback(() => {
    if (babyCount > 0) {
      setBabyCount(babyCount - 1);
    }
  }, [babyCount, setBabyCount]);

  const toggleBabyAdd = useCallback(() => {
    if (babyCount < totalGuestCount) {
      setBabyCount(babyCount + 1);
    }
  }, [babyCount, setBabyCount, totalGuestCount]);

  return (
    <Wrapper ref={guestRef} toggleGuest={guest}>
      <Row>
        <GuestType>
          <strong>Adultos</strong>
          <span>Maior de 13</span>
        </GuestType>
        <GuestNumber>
          <button type="button" onClick={toggleAdultSub}>
            -
          </button>
          <span>{adultCount}</span>
          <button type="button" onClick={toggleAdultAdd}>
            +
          </button>
        </GuestNumber>
      </Row>
      <Row>
        <GuestType>
          <strong>Crianças</strong>
          <span>Idade 2 - 12</span>
        </GuestType>
        <GuestNumber>
          <button type="button" onClick={toggleKidSub}>
            -
          </button>
          <span>{kidCount}</span>
          <button type="button" onClick={toggleKidAdd}>
            +
          </button>
        </GuestNumber>
      </Row>
      <Row>
        <GuestType>
          <strong>Bebês</strong>
          <span>Menor de 2</span>
        </GuestType>
        <GuestNumber>
          <button type="button" onClick={toggleBabySub}>
            -
          </button>
          <span>{babyCount}</span>
          <button type="button" onClick={toggleBabyAdd}>
            +
          </button>
        </GuestNumber>
      </Row>
    </Wrapper>
  );
};

export default Guest;
