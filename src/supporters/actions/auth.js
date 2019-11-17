import { RestClient } from '@supporters/rest-client/rest-client';
import { updateCookie } from '@supporters/utils/cookies';
// action types
export const SIGNIN = {
  IS_SIGNING_IN: 'IS_SIGNING_IN',
  SIGNIN_SUCCESSFULLY: 'SIGNIN_SUCCESSFULLY'
};

// actions
export function isLoggingIn() {
  return {
    type: SIGNIN.IS_SIGNING_IN
  };
}

export function loginSucessfully(data) {
  return {
    type: SIGNIN.SIGNIN_SUCCESSFULLY,
    payload: data
  };
}

export function login(username, password) {
  return dispatch => {
    dispatch(isLoggingIn());

    new RestClient()
      .asyncPost('/users/sign-in', {
        username,
        password
      })
      .then(loginData => {
        if (loginData.data && loginData.data.token)
          updateCookie('token', loginData.data.token);

        dispatch(loginSucessfully(loginData));
      });
  };
}
