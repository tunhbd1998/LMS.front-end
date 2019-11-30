import * as actionTypes from '../action-types';

const initStates = {
  isProcessingAuth: false,
  user: {
    token: null,
    role: null,
    profile: null,
    editMode: false
  },
  failedAuth: {
    status: false,
    message: null
  }
};

export const authReducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case actionTypes.MODE_EDIT_PROFILE_ON:
      return {
        ...state,
        user: {
          ...state.user,
          editMode: true
        }
      };
    case actionTypes.MODE_EDIT_PROFILE_DONE:
      return {
        ...state,
        user: {
          ...state.user,
          // profile : payload.profile,
          editMode: false
        }
      };
    case actionTypes.UPLOAD_AVATAR:
      return { ...state };
    case actionTypes.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: payload.profile.data
        }
      };
    case actionTypes.UPLOAD_AVATAR_FAIL:
      return {
        ...state
      };
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
          role: payload.role || null
        }
      };
    case actionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        failedAuth: {
          ...state.failedAuth,
          message: payload.message
        }
      };
    case actionTypes.GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profile: payload.profile
        }
      };
    default:
      return { ...state };
  }
};
