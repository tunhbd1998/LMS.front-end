import React from 'react';
import { connect } from 'react-redux';
import { getCookie } from '@supporters/utils/cookies';
import { Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
  signInSuccess as signInSuccessAction,
  getProfile as getProfileAction
} from '@supporters/store/redux/actions/auth.actions';
import { get } from 'lodash';

export function alreadyAuth(ComposedComponent, destUrl = null) {
  function WrappedComponent(props) {
    const { actions, user, isGettingProfile } = props;
    const token = getCookie('token');
    const role = getCookie('role');

    if ((token && role) || (user.token && user.role)) {
      if (!user.token || !user.role) {
        actions.signInSuccess(token || user.token, role || user.role);
      }

      if (!user.profile && !isGettingProfile) {
        actions.getProfile();
      }
      console.log('1');
      return <ComposedComponent {...props} />;
    }

    return <Redirect push to={{ pathname: '/sign-in', state: { destUrl } }} />;
    // if (!getCookie('token') && !isRev) return <Redirect to="/sign-in" />;
    // if (getCookie('token') && isRev) return <Redirect to="/" />;
  }

  const mapStateToProps = state => ({
    user: get(state, ['authReducer', 'user']),
    isGettingProfile: get(state, ['authReducer', 'isGettingProfile'])
  });

  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(
      {
        signInSuccess: signInSuccessAction,
        getProfile: getProfileAction
      },
      dispatch
    )
  });

  const ConnectedWrappedComponent = withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(WrappedComponent)
  );

  return ConnectedWrappedComponent;
}
