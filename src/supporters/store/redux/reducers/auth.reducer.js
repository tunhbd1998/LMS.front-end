import * as actionTypes from '../action-types';

const initStates = {
  isProcessingAuth: false,
  user: {
    token: null,
    role: null,
    profile: null,
  },
  failedAuth: {
    status: false,
    message: null,
  },
};

export const authReducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case actionTypes.PROCESSING_AUTH:
      return { ...state, isProcessingAuth: true };
    case actionTypes.PROCESSING_AUTH_DONE:
      return { ...state, isProcessingAuth: false };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          token: payload.token,
          role: payload.role,
        },
      };
    case actionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        failedAuth: {
          ...state.failedAuth,
          message: payload.message,
        },
      };
    default:
      return { ...state };
  }
};
