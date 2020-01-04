import React from 'react';
import { connect } from 'react-redux';
import { getCookie } from '@supporters/utils/cookies';
import { Redirect, withRouter } from 'react-router-dom';
import { get } from 'lodash';
import NotPermission from '../../commons/components/not-permission';

export function withRole(ComposedComponent, role) {
  function WrappedComponent({ user, ...props }) {
    console.log('with role', user.role, role);
    if (user.token && user.role && user.role !== role) {
      return <NotPermission />;
    }

    return <ComposedComponent {...props} />;
  }

  const mapStateToProps = state => ({
    user: get(state, ['authReducer', 'user'])
  });

  const ConnectedWrappedComponent = withRouter(
    connect(
      mapStateToProps,
      null
    )(WrappedComponent)
  );

  return ConnectedWrappedComponent;
}
