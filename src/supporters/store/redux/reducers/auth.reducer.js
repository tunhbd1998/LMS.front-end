import * as actionTypes from '../action-types';

const initStates = {
  isProcessingAuth: false,
  isGettingProfile: false,
  user: {
    token: null,
    role: null,
    profile: null,
    editMode: false
  },
  authState: {
    status: false,
    message: null
  }
  // failedAuth: {
  //   status: false,
  //   message: null
  // },
  // signUpInfo: {
  //   status: false,
  //   message: null
  // },
  // signInSuccess: false
};

export const authReducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case actionTypes.RESET_AUTH_STATE:
      return {
        ...state,
        authState: {
          status: false,
          message: null
        }
      };
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
        },
        authState: {
          status: true,
          message: 'Đăng nhập thành công'
        }
      };
    case actionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        user: {
          ...state.user,
          token: null,
          role: null,
          profile: null
        },
        authState: {
          status: false,
          message: payload.message
        }
      };
    case actionTypes.SIGN_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          token: null,
          role: null,
          profile: null
        }
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        authState: {
          status: true,
          message: payload.message
        }
      };
    case actionTypes.SIGN_UP_FAILED:
      return {
        ...state,
        authState: {
          status: false,
          message: payload.message
        }
      };
    case actionTypes.GETTING_PROFILE:
      return {
        ...state,
        isGettingProfile: true
      };
    case actionTypes.GETTING_PROFILE_DONE:
      return {
        ...state,
        isGettingProfile: false
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
