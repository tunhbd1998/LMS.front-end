import React from 'react';
import Page from '@components/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Page} />
        <Route path="*">404 - Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default Routers;
