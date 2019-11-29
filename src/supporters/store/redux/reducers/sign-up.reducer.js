import { SIGNUP } from '@supporters/store/redux/actions';

const initStates = { isSigningUp: false, response: '' };

export const signUpReducer = (state = initStates, { type, ...payload }) => {
  switch (type) {
    case SIGNUP.IS_SIGNING_UP:
      return { ...state, isSigningUp: payload.value };
    case SIGNUP.SIGNUP_RESPONSE:
      return { ...state, response: payload.message };
    default:
      return { ...state };
  }
};
