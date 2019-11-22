import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import App from '@components/app';
import { getCookie } from '@supporters/utils/cookies';
import SignIn from '@containers/pages/signin';
import SignUp from '@containers/pages/signup';
import SignUpAdmin from '@containers/pages/signup-admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '@supporters/store/redux/actions/auth.actions';
import UserPage from '../pages/user-page';

function Routers({ token, actions }) {
  let isLoggedIn = false;

  if (!token) {
    const actualToken = getCookie('token');
    const actualRole = getCookie('role');

    if (actualToken) {
      isLoggedIn = true;
      actions.signInSuccess(actualToken, actualRole);
    }
  } else {
    isLoggedIn = true;
  }
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" exact>
          {!isLoggedIn ? <SignIn /> : <Redirect to="/" />}
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/sign-up-lab" exact>
          <SignUpAdmin />
        </Route>
        <Route path="/">
          <UserPage />
        </Route>
        <Route path="*">404 - Not Found!</Route>
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      signInSuccess: authActions.signInSuccess
    },
    dispatch
  )
});

const mapStateToProps = state => ({
  token: get(state, ['authReducer', 'user', 'token'])
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routers);
