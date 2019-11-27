import { RestClient } from '@supporters/rest-client/rest-client';
import { updateCookie, deleteCookie } from '@supporters/utils/cookies';

// action types
export const SIGNIN = {
  IS_SIGNING_IN: 'IS_SIGNING_IN',
  SIGNIN_SUCCESSFULLY: 'SIGNIN_SUCCESSFULLY',
  SIGNIN_MESSAGE: 'SIGNIN_MESSAGE'
};

// actions
export function isLoggingIn() {
  return {
    type: SIGNIN.IS_SIGNING_IN
  };
}

export function signInSucessfully(data) {
  return {
    type: SIGNIN.SIGNIN_SUCCESSFULLY,
    payload: data
  };
}

export function clearSignInMessage() {
  return dispatch => {
    dispatch({
      type: SIGNIN.SIGNIN_MESSAGE,
      message: ''
    });
  };
}

export function signIn(username, password) {
  return dispatch => {
    dispatch({ type: SIGNIN.IS_SIGNING_IN, value: true });
    dispatch(clearSignInMessage());

    new RestClient()
      .asyncPost('/users/sign-in', {
        username,
        password
      })
      .then(signInData => {
        if (signInData.data && signInData.data.token) {
          updateCookie('token', signInData.data.token);
          dispatch(signInSucessfully(signInData));
          window.location.replace('/');
        } else {
          dispatch({
            type: SIGNIN.SIGNIN_MESSAGE,
            message: signInData.data.message
          });
        }

        dispatch({ type: SIGNIN.IS_SIGNING_IN, value: false });
      })
      .catch(error => {
        dispatch({
          type: SIGNIN.SIGNIN_MESSAGE,
          message: error.message
        });
        dispatch({ type: SIGNIN.IS_SIGNING_IN, value: false });
      });
  };
}

export function signOut() {
  return dispatch => {
    dispatch({ type: SIGNIN.SIGNIN_SUCCESSFULLY, payload: null });
    deleteCookie('token');
  };
}
