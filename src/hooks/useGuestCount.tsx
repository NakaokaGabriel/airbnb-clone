import { useContext } from 'react';

import { GuestContext, GuestCountContext } from '../context/GuestCount';

export const useGuestCount = (): GuestContext => {
  const context = useContext(GuestCountContext);

  if (!context) {
    throw new Error('useGuest must be used within an GuestProvider');
  }

  return context;
};
