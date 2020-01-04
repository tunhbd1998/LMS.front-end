import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { alreadyAuth, shouldAuth, withRole } from '@supporters/hoc';
import UserPage from './user';
import LabAdminPage from './lab-admin';
import MemberPage from './member';
import SignIn from './sign-in';
import SignUp from './sign-up';
import SignUpLab from './sign-up-lab';

export default function Page() {
  return (
    <Router>
      <Switch>
        <Route
          path="/lab-admin"
          component={alreadyAuth(
            shouldAuth(withRole(LabAdminPage, 'LAB_ADMIN'), '/lab-admin')
          )}
        />
        <Route
          path="/member"
          component={alreadyAuth(
            shouldAuth(withRole(MemberPage, 'MEMBER'), '/member')
          )}
        />
        <Route path="/sign-in" exact component={alreadyAuth(SignIn)} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-up-lab" exact component={SignUpLab} />
        <Route path="/" component={alreadyAuth(UserPage)} />
      </Switch>
    </Router>
  );
}
