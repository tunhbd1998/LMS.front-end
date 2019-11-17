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
  Redirect,
} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as authActions from '@supporters/store/redux/actions/auth.actions';

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
  // console.log('render', isLoggedIn);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <App /> : <Redirect to="/sign-in" />}
        </Route>
        <Route path="/sign-in" exact>
          {!isLoggedIn ? <SignIn /> : <Redirect to="/" />}
        </Route>

        {/* specific */}
        {!isLoggedIn && (
          <>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-up-admin">
              <SignUpAdmin />
            </Route>
          </>
        )}
        <Route path="*">404 - Not Found!</Route>
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      signInSuccess: authActions.signInSuccess,
    },
    dispatch
  ),
});

const mapStateToProps = state => ({
  token: get(state, ['authReducer', 'user', 'token']),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routers);
