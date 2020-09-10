import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Host from '../pages/Host';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/host" component={Host} />
    </Switch>
  );
};

export default Routes;
