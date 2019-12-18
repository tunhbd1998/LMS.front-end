import React from 'react';
import { connect } from 'react-redux';
import { getCookie } from '@supporters/utils/cookies';
import { Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  signInSuccess as signInSuccessAction,
  signInFailed as signInFailedAction,
  getProfile as getProfileAction
} from '@supporters/store/redux/actions/auth.actions';
import { get } from 'lodash';

export function alreadyAuth(ComposedComponent, destUrl = null) {
  function WrappedComponent(props) {
    const { actions, user, isGettingProfile } = props;
    const token = getCookie('token');
    const role = getCookie('role');

    if (token && role) {
      if (!user.token || !user.role) {
        actions.signInSuccess(token || user.token, role || user.role);
      }

      if (!user.profile && !isGettingProfile) {
        actions.getProfile();
      }
    }

    return <ComposedComponent {...props} />;
  }

  const mapStateToProps = state => ({
    user: get(state, ['authReducer', 'user']),
    isGettingProfile: get(state, ['authReducer', 'isGettingProfile'])
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
      {
        signInSuccess: signInSuccessAction,
        signInFailed: signInFailedAction,
        getProfile: getProfileAction
      },
      dispatch
    )
  });

  const ConnectedWrappedComponent = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
  );

  return ConnectedWrappedComponent;
}
