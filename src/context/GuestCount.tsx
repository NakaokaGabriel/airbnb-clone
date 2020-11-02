import React, { createContext, useState } from 'react';

type GuestActions = React.Dispatch<React.SetStateAction<number>>;

export interface GuestContext {
  adultCount: number;
  setAdultCount: GuestActions;

  kidCount: number;
  setKidCount: GuestActions;

  babyCount: number;
  setBabyCount: GuestActions;

  guestCount: number;
  setGuestCount: GuestActions;

  totalGuestCount: number;
}

export const GuestCountContext = createContext<GuestContext>(
  {} as GuestContext,
);

const GuestCountProvider: React.FC = ({ children }) => {
  const [adultCount, setAdultCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [babyCount, setBabyCount] = useState(0);
  const [guestCount, setGuestCount] = useState(0);
  const [totalGuestCount] = useState(20);

  return (
    <GuestCountContext.Provider
      value={{
        adultCount,
        setAdultCount,

        kidCount,
        setKidCount,

        babyCount,
        setBabyCount,

        guestCount,
        setGuestCount,

        totalGuestCount,
      }}
    >
      {children}
    </GuestCountContext.Provider>
  );
};

export default GuestCountProvider;
