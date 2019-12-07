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

export function shouldAuth(ComposedComponent, destUrl = null) {
  function WrappedComponent(props) {
    const { user } = props;
    const token = getCookie('token');
    const role = getCookie('role');

    if (token && role && (user.token && user.role)) {
      return <ComposedComponent {...props} />;
    }

    return <Redirect push to={{ pathname: '/sign-in', state: { destUrl } }} />;
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
