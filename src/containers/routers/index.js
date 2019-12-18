import React from 'react';
import SignIn from '@containers/pages/sign-in';
import SignUp from '@containers/pages/sign-up';
import SignUpAdmin from '@containers/pages/sign-up-admin';

import HomepageAdmin from '@containers/pages/admin/homepage';
import LabEditInfo from '@containers/pages/admin/lab-edit-info';
import ProjectEditInfo from '@containers/pages/admin/project-edit-info';
import MemberManagement from '@containers/pages/admin/lab-member-management';

import HomepageMember from '@containers/pages/member/homepage';
import MemberLabInfo from '@containers/pages/member/lab-info';

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
          path="/admin/lab/:lid/project/:pid/edit"
          component={ProjectEditInfo}
        />
        <Route path="/admin/lab/:lid/member" component={MemberManagement} />
        <Route path="/admin/lab/:id/edit" component={LabEditInfo} />
        <Route path="/admin" component={HomepageAdmin} />

        <Route path="/member/lab/:id/info" component={MemberLabInfo} />
        <Route path="/member" component={HomepageMember} />

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
