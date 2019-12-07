import React from 'react';
import SignIn from '@containers/pages/sign-in';
import SignUp from '@containers/pages/sign-up';
import SignUpAdmin from '@containers/pages/sign-up-admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { alreadyAuth, shouldAuth } from '@supporters/hoc';
import App from '@components/app';
import UserPage from '../pages/user-page';

function Routers() {
  console.log('render');
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={alreadyAuth(SignIn)} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-up-lab" component={SignUpAdmin} />
        <Route
          location={{ state: { def: 'def' } }}
          path="/"
          abc="abc"
          component={shouldAuth(UserPage, '/')}
        />

        <Route path="*">404 - Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default Routers;
