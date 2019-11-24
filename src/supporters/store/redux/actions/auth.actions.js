import { RestClient } from '@supporters/rest-client/rest-client';
import { updateCookie } from '@supporters/utils/cookies';
import * as actionTypes from '../action-types';

export const processingAuth = () => ({
  type: actionTypes.PROCESSING_AUTH,
  payload: {}
});

export const processingAuthDone = () => ({
  type: actionTypes.PROCESSING_AUTH_DONE,
  payload: {}
});

export const signInSuccess = (token, role) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: { token, role }
});

export const signInFailed = message => ({
  type: actionTypes.SIGN_IN_FAILED,
  payload: { message }
});

export const signIn = (username, password) => {
  return dispatch => {
    dispatch(processingAuth());

    new RestClient()
      .asyncPost('/users/sign-in', {
        username,
        password
      })
      .then(res => {
        dispatch(processingAuthDone());

        if (res.error) {
          return dispatch(signInFailed(res.error.message));
        }

        if (res.data) {
          const { token, role, message } = res.data;

          if (token) {
            updateCookie('token', token);
            updateCookie('role', role);
            return dispatch(signInSuccess(token, role));
          }

          return dispatch(signInFailed(message));
        }
      });
  };
};

export const getProfileSuccess = profile => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload: { profile }
});

export const getProfile = () => dispatch => {
  const mockProfile = {
    fullname: 'Nguyen huu tu'
  };

  dispatch(getProfileSuccess(mockProfile));
};
