import React, { createContext, useState } from 'react';

type GuestActions = React.Dispatch<React.SetStateAction<number>>;

export interface GuestContext {
  totalGuestCount: number;
  setTotalGuestCount: GuestActions;
}

export const GuestCountContext = createContext<GuestContext>(
  {} as GuestContext,
);

const GuestCountProvider: React.FC = ({ children }) => {
  const [totalGuestCount, setTotalGuestCount] = useState(20);

  return (
    <GuestCountContext.Provider
      value={{
        totalGuestCount,
        setTotalGuestCount,
      }}
    >
      {children}
    </GuestCountContext.Provider>
  );
};

export default GuestCountProvider;
