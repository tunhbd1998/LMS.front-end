import React from 'react';
import { connect } from 'react-redux';
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

function Routers({ isLoggedIn }) {
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

const mapStateToProps = state => {
  return {
    isLoggedIn: !!(
      (state.authReducer &&
        state.authReducer.data &&
        state.authReducer.data.data &&
        state.authReducer.data.data.token) ||
      getCookie('token')
    )
  };
};

export default connect(mapStateToProps)(Routers);
