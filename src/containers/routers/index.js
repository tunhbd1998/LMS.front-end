import React from 'react';
import SignIn from '@containers/pages/sign-in';
import SignUp from '@containers/pages/sign-up';
import SignUpAdmin from '@containers/pages/sign-up-admin';

import HomepageAdmin from '@containers/pages/admin/homepage';
import LabEditInfo from '@containers/pages/admin/lab-edit-info';
import ProjectEditInfo from '@containers/pages/admin/project-edit-info';
import MemberManagement from '@containers/pages/admin/project-member';
import TaskManagement from '@containers/pages/admin/project-task';
import ScheduleManagement from '@containers/pages/admin/project-schedule';
import RequestManagement from '@containers/pages/admin/lab-request-management';
import ProjectCreate from '@containers/pages/admin/project-create';
import EventEditInfo from '@containers/pages/admin/event-edit-info';
import EventHome from '@containers/pages/admin/event-home';
import LabMember from '@containers/pages/admin/lab-member-management';
import LabMemberEdit from '@containers/pages/admin/lab-member-edit';

import HomepageMember from '@containers/pages/member/homepage';
import MemberLabInfo from '@containers/pages/member/lab-info';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { alreadyAuth, shouldAuth } from '@supporters/hoc';
// import App from '@components/app';
import UserPage from '../pages/user-page';

function Routers() {
  console.log('render');
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-up-lab" component={SignUpAdmin} />

        <Route
          path="/admin/lab/:lid/member/:mid/edit"
          component={LabMemberEdit}
        />
        <Route path="/admin/lab/:lid/member" component={LabMember} />
        <Route
          path="/admin/lab/:lid/event/:eid/edit"
          component={EventEditInfo}
        />
        <Route path="/admin/lab/:lid/event/:eid" component={EventHome} />

        <Route
          path="/admin/lab/:lid/project/create"
          component={ProjectCreate}
        />
        <Route
          path="/admin/lab/:lid/project/:pid/edit"
          component={ProjectEditInfo}
        />
        <Route path="/admin/lab/:lid/request" component={RequestManagement} />
        <Route
          path="/admin/lab/:lid/project/:id/schedule"
          component={ScheduleManagement}
        />
        <Route
          path="/admin/lab/:lid/project/:id/task"
          component={TaskManagement}
        />
        <Route
          path="/admin/lab/:lid/project/:id/member"
          component={MemberManagement}
        />
        <Route path="/admin/lab/:id/edit" component={LabEditInfo} />
        <Route path="/admin" component={HomepageAdmin} />

        <Route path="/member/lab/:id/info" component={MemberLabInfo} />
        <Route path="/member" component={HomepageMember} />

        <Route
          location={{ state: { def: 'def' } }}
          path="/"
          abc="abc"
          component={UserPage}
        />
        <Route path="*">404 - Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default Routers;
