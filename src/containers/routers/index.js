import React from 'react';
import SignIn from '@containers/pages/sign-in';
import SignUp from '@containers/pages/sign-up';
import SignUpAdmin from '@containers/pages/sign-up-admin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { injectAuth } from '@supporters/hoc';
import App from '@components/app';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={injectAuth(SignIn, true)} />
        <Route path="/sign-up" component={injectAuth(SignUp, true)} />
        <Route
          path="/sign-up-admin"
          component={injectAuth(SignUpAdmin, true)}
        />
        <Route path="/" component={injectAuth(App)} />

        <Route path="*">404 - Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default Routers;
