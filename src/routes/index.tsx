import React from 'react';

import { Switch, Route } from 'react-router-dom';
import CharacterDetail from '../pages/CharacterDetail';

import Dashboard from '../pages/Dashboard';
import NoMatch from '../pages/NoMatch';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route
      path='/detail/:id'
      exact
      render={({ match }) => <CharacterDetail item={match.params.id} />}
    />
    <Route path='*'>
      <NoMatch />
    </Route>
  </Switch>
);

export default Routes;
