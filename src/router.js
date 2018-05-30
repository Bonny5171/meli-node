import React from 'react';
import { Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Results from './components/Results';
import Details from './components/Details';

import history from './history';

const Routes = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={Home} />
      <Route exact path="/items" component={Results} />
      <Route exact path="/items/:id" component={Details} />
    </div>
  </Router>
);

export default Routes;
