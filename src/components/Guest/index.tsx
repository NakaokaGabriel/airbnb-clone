import React, { useLayoutEffect, useRef, useCallback, useMemo } from 'react';

import { Wrapper, Row, GuestType, GuestNumber } from './styles';
import { useGuestCount } from '../../hooks/useGuestCount';

interface Props {
  guest: boolean;
  setGuest: React.Dispatch<React.SetStateAction<boolean>>;

  guestCount: number;
  setGuestCount: React.Dispatch<React.SetStateAction<number>>;

  adultCount: number;
  setAdultCount: React.Dispatch<React.SetStateAction<number>>;

  kidCount: number;
  setKidCount: React.Dispatch<React.SetStateAction<number>>;

  babyCount: number;
  setBabyCount: React.Dispatch<React.SetStateAction<number>>;
}

const Guest: React.FC<Props> = ({
  guest,
  setGuest,

  guestCount,
  setGuestCount,

  adultCount,
  setAdultCount,

  kidCount,
  setKidCount,

  babyCount,
  setBabyCount,
}) => {
  const { totalGuestCount } = useGuestCount();

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

  const totalGuest = useMemo(() => {
    return guestCount < totalGuestCount;
  }, [guestCount, totalGuestCount]);

  const toggleAdultSub = useCallback(() => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  }, [adultCount, setAdultCount]);

  const toggleAdultAdd = useCallback(() => {
    if (totalGuest) {
      setAdultCount(adultCount + 1);
    }
  }, [adultCount, setAdultCount, totalGuest]);

  const toggleKidSub = useCallback(() => {
    if (kidCount > 0) {
      setKidCount(kidCount - 1);
    }
  }, [kidCount, setKidCount]);

  const toggleKidAdd = useCallback(() => {
    if (totalGuest && kidCount < 6) {
      setKidCount(kidCount + 1);
    }
  }, [kidCount, setKidCount, totalGuest]);

  const toggleBabySub = useCallback(() => {
    if (babyCount > 0) {
      setBabyCount(babyCount - 1);
    }
  }, [babyCount, setBabyCount]);

  const toggleBabyAdd = useCallback(() => {
    if (totalGuest && babyCount < 4) {
      setBabyCount(babyCount + 1);
    }
  }, [babyCount, setBabyCount, totalGuest]);

  useLayoutEffect(() => {
    setGuestCount(adultCount + kidCount + babyCount);
  }, [adultCount, kidCount, babyCount, setGuestCount]);

  return (
    <Wrapper ref={guestRef} toggleGuest={guest}>
      <Row>
        <GuestType>
          <strong>Adultos</strong>
          <span>Maior de 13</span>
        </GuestType>
        <GuestNumber>
          {adultCount > 0 && (
            <button type="button" onClick={toggleAdultSub}>
              -
            </button>
          )}
          <span>{adultCount}</span>
          {totalGuest && (
            <button type="button" onClick={toggleAdultAdd}>
              +
            </button>
          )}
        </GuestNumber>
      </Row>
      <Row>
        <GuestType>
          <strong>Crianças</strong>
          <span>Idade 2 - 12</span>
        </GuestType>
        <GuestNumber>
          {kidCount > 0 && (
            <button type="button" onClick={toggleKidSub}>
              -
            </button>
          )}
          <span>{kidCount}</span>
          {totalGuest && kidCount < 6 && (
            <button type="button" onClick={toggleKidAdd}>
              +
            </button>
          )}
        </GuestNumber>
      </Row>
      <Row>
        <GuestType>
          <strong>Bebês</strong>
          <span>Menor de 2</span>
        </GuestType>
        <GuestNumber>
          {babyCount > 0 && (
            <button type="button" onClick={toggleBabySub}>
              -
            </button>
          )}
          <span>{babyCount}</span>
          {totalGuest && babyCount < 4 && (
            <button type="button" onClick={toggleBabyAdd}>
              +
            </button>
          )}
        </GuestNumber>
      </Row>
    </Wrapper>
  );
};

export default Guest;
