import { RestClient } from '@supporters/rest-client/rest-client';
import { getCookie, updateCookie } from '@supporters/utils/cookies';
import { saveAuthInfo, removeAuthInfo } from '@supporters/utils/auth';
import { get } from 'lodash';
import axios from 'axios';
import * as actionTypes from '../action-types';

export const resetAuthState = () => ({
  type: actionTypes.RESET_AUTH_STATE,
  payload: {}
});

export const signOut = () => {
  return dispatch => {
    removeAuthInfo();
    dispatch({ type: actionTypes.SIGN_OUT, payload: null });
  };
};

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
            saveAuthInfo(token, role);
            return dispatch(signInSuccess(token, role));
          }

          return dispatch(signInFailed(message));
        }
      })
      .catch(error => {
        console.log('actions: sign in: error: ', error);
        dispatch(processingAuthDone());
      });
  };
};

export const signUpSuccess = message => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: { message }
});

export const signUpFailed = message => ({
  type: actionTypes.SIGN_UP_FAILED,
  payload: { message }
});

export const signUpMember = (
  username,
  password,
  fullname,
  email,
  IDCardNumber,
  gender
) => dispatch => {
  dispatch(processingAuth());

  new RestClient()
    .asyncPost('/users/sign-up-member', {
      username,
      password,
      fullname,
      email,
      IDCardNumber,
      gender
    })
    .then(response => {
      dispatch(processingAuthDone());

      if (response.data) {
        if (response.data.status) dispatch(signUpSuccess('Đăng ký thành công'));
        else dispatch(signUpFailed(response.data.message));
      }

      if (response.error) {
        if (response.error.code === 500)
          dispatch(signUpFailed('Đã có lỗi xảy ra'));
        else dispatch(signUpFailed(response.error.message));
      }
    })
    .catch(error => {
      console.log('actions: signUpMember: error: ', error);
      dispatch(processingAuthDone());
    });
};

export const signUpLab = (user, lab) => dispatch => {
  dispatch(processingAuth());

  new RestClient()
    .asyncPost('/users/sign-up-lab', {
      user,
      lab
    })
    .then(response => {
      dispatch(processingAuthDone());

      if (response.data) {
        if (response.data.status) dispatch(signUpSuccess('Đăng ký thành công'));
        else dispatch(signUpFailed(response.data.message));
      }

      if (response.error) {
        if (response.error.code === 500)
          dispatch(signUpFailed('Đã có lỗi xảy ra'));
        else dispatch(signUpFailed(response.error.message));
      }
    })
    .catch(error => {
      console.log('actions: signUpLab: error: ', error);
      dispatch(processingAuthDone());
    });
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
  type: actionTypes.GETTING_PROFILE,
  payload: {}
});

export const gettingProfileDone = () => ({
  type: actionTypes.GETTING_PROFILE_DONE,
  payload: {}
});

export const getProfile = () => dispatch => {
  dispatch(gettingProfile());

  new RestClient().asyncGet('/users/profile').then(res => {
    dispatch(gettingProfileDone());

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
      .post(
        `${process.env.REACT_APP_BACKEND_HOST}/users/upload-avatar`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getCookie('token')}`
          }
        }
      )
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
