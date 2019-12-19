import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserLayout from '../../../containers/layouts/user-layout';
import Homepage from './homepage';
import NotFoundData from '../../../commons/components/not-found-data';

export default function UserPage() {
  return (
    <UserLayout onScroll={event => console.log('event', event)}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/labs/search" exact>
            <NotFoundData />
          </Route>
          <Route path="/lab/:labId" exact>
            <NotFoundData />
          </Route>
        </Switch>
      </Router>
    </UserLayout>
  );
}
