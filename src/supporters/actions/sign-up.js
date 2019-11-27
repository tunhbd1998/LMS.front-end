import { RestClient } from '@supporters/rest-client/rest-client';

// action types
export const SIGNUP = {
  IS_SIGNING_UP: 'IS_SIGNING_UP',
  SIGNUP_RESPONSE: 'SIGNUP_RESPONSE'
};

export function clearSignUpMessage() {
  return dispatch => {
    dispatch({
      type: SIGNUP.SIGNUP_RESPONSE,
      message: ''
    });
  };
}

export function signUp(
  username,
  password,
  fullname,
  email,
  IDCardNumber,
  gender
) {
  return dispatch => {
    dispatch({ type: SIGNUP.IS_SIGNING_UP, value: true });
    dispatch(clearSignUpMessage());

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
        if (response.data && response.data.status)
          dispatch({
            type: SIGNUP.SIGNUP_RESPONSE,
            message: 'Đăng ký thành công'
          });
        else
          dispatch({
            type: SIGNUP.SIGNUP_RESPONSE,
            message: response.data.message
          });

        dispatch({ type: SIGNUP.IS_SIGNING_UP, value: false });
      })
      .catch(error => {
        dispatch({
          type: SIGNUP.SIGNUP_RESPONSE,
          message: error.message
        });
        dispatch({ type: SIGNUP.IS_SIGNING_UP, value: false });
      });
  };
}
