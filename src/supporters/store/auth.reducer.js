import { SIGNIN } from '@supporters/actions';

const initStates = { isSigningIn: false, data: {}, error: '' };

export const auth = (state = initStates, { type, ...payload }) => {
  switch (type) {
    case SIGNIN.IS_SIGNING_IN:
      return { ...state, isSigningIn: payload.value };
    case SIGNIN.SIGNIN_MESSAGE:
      return { ...state, error: payload.message };
    case SIGNIN.SIGNIN_SUCCESSFULLY:
      return { ...state, data: payload.payload };
    default:
      return { ...state };
  }
};
