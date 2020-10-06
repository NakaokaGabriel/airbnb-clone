import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Remain from '../pages/Remain';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/remain" component={Remain} />
    </Switch>
  );
};

export default Routes;
