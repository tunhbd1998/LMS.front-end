import { RestClient } from '@supporters/rest-client/rest-client';
import * as actionTypes from '../action-types';

export const isSigningUp = value => ({
  type: actionTypes.IS_SIGNING_UP,
  payload: value
});

export const signUpSuccessfully = message => ({
  type: actionTypes.SIGN_UP_MEMBER_SUCCESS,
  payload: { message }
});

export const signUpFailed = message => ({
  type: actionTypes.SIGN_UP_MEMBER_FAILED,
  payload: { message }
});

export function signUp(
  username,
  password,
  fullname,
  email,
  IDCardNumber,
  gender
) {
  return dispatch => {
    dispatch(isSigningUp(true));
    dispatch(signUpSuccessfully(''));
    dispatch(signUpFailed(''));

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
        dispatch(isSigningUp(false));
        console.log(response.error.code);
        if (response.data && response.data.status)
          dispatch(signUpSuccessfully('Đăng ký thành công'));
        else if (response.error.code === 500)
          dispatch(signUpFailed('Đã có lỗi xảy ra'));
        else dispatch(signUpFailed(response.error.message));
      })
      .catch(error => {
        console.log('catch error signup', error);
        dispatch(isSigningUp(false));
      });
  };
}
