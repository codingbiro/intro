import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tempapp from './Tempapp';
import NumberPage from './Num';

const Core = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Tempapp} />
      <Route path="/:number" component={NumberPage} />
    </Switch>
  </Router>
);

export default Core;
