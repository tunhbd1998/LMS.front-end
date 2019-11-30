import * as actionTypes from '@supporters/store/redux/action-types';

const initStates = {
  isSigningUp: false,
  successfulResponse: {
    status: false,
    message: null
  },
  failedResponse: {
    status: false,
    message: null
  }
};

export const signUpReducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case actionTypes.IS_SIGNING_UP:
      return { ...state, isSigningUp: payload };
    case actionTypes.SIGN_UP_MEMBER_SUCCESS:
      return {
        ...state,
        successfulResponse: {
          ...state.successfulResponse,
          message: payload.message
        }
      };
    case actionTypes.SIGN_UP_MEMBER_FAILED:
      return {
        ...state,
        failedResponse: {
          ...state.failedResponse,
          message: payload.message
        }
      };
    default:
      return { ...state };
  }
};
