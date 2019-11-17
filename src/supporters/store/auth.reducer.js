import { SIGNIN } from '@supporters/actions';

const initStates = { isSigningIn: '', data: {} };

export const authReducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case SIGNIN.IS_SIGNING_IN:
      return { ...state };
    case SIGNIN.SIGNIN_SUCCESSFULLY:
      return { ...state, data: payload };
    default:
      return { ...state };
  }
};
