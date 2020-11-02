import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';
import GuestCountProvider from './context/GuestCount';

const App: React.FC = () => (
  <GuestCountProvider>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  </GuestCountProvider>
);

export default App;
