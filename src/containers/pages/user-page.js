import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserLayout from '../layouts/user-layout';
import Homepage from './homepage';

export default function UserPage() {
  return (
    <UserLayout>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/lab/:labId" exact>
            null
          </Route>
        </Switch>
      </Router>
    </UserLayout>
  );
}
