import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Remain from '../pages/Remain';
import Room from '../pages/Room';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/remain" component={Remain} />
      <Route path="/room/:location" component={Room} />
      <h1>Test - a</h1>
    </Switch>
  );
};

export default Routes;
