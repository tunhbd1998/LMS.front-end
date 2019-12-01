import { RestClient } from '@supporters/rest-client/rest-client';
import { getCookie, updateCookie } from '@supporters/utils/cookies';
import { get } from 'lodash';
import axios from 'axios';
import * as actionTypes from '../action-types';

export function signOut() {
  // return dispatch => {
  //   dispatch({ type: actionTypes.SIGNIN_SUCCESSFULLY, payload: null });
  //   deleteCookie('token');
  // };
}

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

export const signIn = (username, password, callback) => {
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
            dispatch(signInSuccess(token, role));
            // window.location.replace('/');
          }

          return dispatch(signInFailed(message));
        }
      })
      .catch(error => {
        console.log('catch error sign in', error);
        dispatch(processingAuthDone());
      });
  };
};

export const getProfileSuccess = profile => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  payload: { profile }
});

export const getProfileFail = message => ({
  type: actionTypes.GET_PROFILE_FAIL,
  payload: { message }
});

export const gettingProfile = () => ({
  type: actionTypes.GET_PROFILE,
  payload: {}
});

export const getProfile = () => dispatch => {
  dispatch(gettingProfile());

  new RestClient().asyncGet('/users/profile').then(res => {
    if (res.data) {
      dispatch(getProfileSuccess(get(res.data, ['profile'])));
    } else {
      dispatch(getProfileFail(res.error.message));
    }
  });
};

export const uploadingAvatar = () => ({
  type: actionTypes.UPLOAD_AVATAR,
  payload: {}
});

export const uploadAvatarSuccess = profile => ({
  type: actionTypes.UPLOAD_AVATAR_SUCCESS,
  payload: { profile }
});

export const uploadAvatarFail = message => ({
  type: actionTypes.UPLOAD_AVATAR_FAIL,
  payload: { message }
});

export const uploadAvatar = formData => {
  return (dispatch, getState) => {
    dispatch(uploadingAvatar());
    axios
      .post('http://localhost:5001/users/upload-avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getCookie('token')}`
        }
      })
      .then(res => {
        console.log(res);
        const profile = res.data;
        if (res.data) dispatch(uploadAvatarSuccess(profile));
        else dispatch(uploadAvatarFail(res.error));
      });
  };
};

export const modeEditProfileOn = () => ({
  type: actionTypes.MODE_EDIT_PROFILE_ON,
  payload: {}
});

export const modeEditProfileDone = () => ({
  type: actionTypes.MODE_EDIT_PROFILE_DONE,
  payload: {}
});

export const modeEditOn = () => {
  return dispatch => {
    dispatch(modeEditProfileOn());
  };
};

export const modeEditOff = () => {
  return dispatch => {
    dispatch(modeEditProfileDone());
  };
};
