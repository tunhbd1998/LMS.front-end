import * as actionTypes from '../action-types';

const initStates = {
  searchOptions: {
    province: 'all',
    university: 'all',
    specialize: 'all',
    name: ''
  },
  labs: {
    totalPage: null,
    page: null,
    list: [],
    loading: false
  },
  projects: {
    totalPage: null,
    page: null,
    list: [],
    loading: false
  },
  activities: {
    totalPage: null,
    page: null,
    list: [],
    loading: false
  },
  recruitments: {
    totalPage: null,
    page: null,
    list: [],
    loading: false
  }
};

export const mainReducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_SEARCH_OPTIONS:
      return {
        ...state,
        searchOptions: {
          ...state.searchOptions,
          ...payload
        }
      };
    case actionTypes.FETCHING_LABS:
      return {
        ...state,
        labs: {
          ...state.labs,
          loading: true
        }
      };
    case actionTypes.FETCHING_LABS_DONE:
      return {
        ...state,
        labs: {
          ...state.labs,
          loading: false
        }
      };
    case actionTypes.FETCH_LABS_SUCCESS:
      return {
        ...state,
        labs: {
          ...state.labs,
          page: payload.res.page,
          totalPage: payload.res.totalPage,
          list: [...state.labs.list, ...payload.res.list]
        }
      };
    case actionTypes.FETCHING_PROJECT_RECRUITMENTS:
      return {
        ...state,
        projects: {
          ...state.projects,
          loading: true
        }
      };
    case actionTypes.FETCHING_PROJECT_RECRUITMENTS_DONE:
      return {
        ...state,
        projects: {
          ...state.projects,
          loading: false
        }
      };
    case actionTypes.FETCH_PROJECT_RECRUITMENTS_SUCCESS:
      return {
        ...state,
        projects: {
          ...state.projects,
          page: payload.res.page,
          totalPage: payload.res.totalPage,
          list: payload.res.list
        }
      };
    case actionTypes.FETCHING_ACTIVE_ACTIVITIES:
      return {
        ...state,
        activities: {
          ...state.activities,
          loading: true
        }
      };
    case actionTypes.FETCHING_ACTIVE_ACTIVITIES_DONE:
      return {
        ...state,
        activities: {
          ...state.activities,
          loading: false
        }
      };
    case actionTypes.FETCH_ACTIVE_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: {
          ...state.activities,
          page: payload.res.page,
          totalPage: payload.res.totalPage,
          list: payload.res.list
        }
      };
    case actionTypes.FETCHING_LAB_RECRUITMENTS:
      return {
        ...state,
        recruitments: {
          ...state.recruitments,
          loading: true
        }
      };
    case actionTypes.FETCHING_LAB_RECRUITMENTS_DONE:
      return {
        ...state,
        recruitments: {
          ...state.recruitments,
          loading: false
        }
      };
    case actionTypes.FETCH_LAB_RECRUITMENTS_SUCCESS:
      return {
        ...state,
        recruitments: {
          ...state.recruitments,
          page: payload.res.page,
          totalPage: payload.res.totalPage,
          list: payload.res.list
        }
      };
    case actionTypes.UPDATE_FETCH_HIGHLIGHT_LABS_STATUS:
      return {
        ...state,
        labs: {
          ...state.labs,
          loading: payload.status
        }
      };
    case actionTypes.FETCH_HIGHLIGHT_LABS_SUCCESS:
      return {
        ...state,
        labs: {
          totalPage: payload.totalPage,
          page: payload.page,
          list: [...state.labs.list, ...payload.labs]
        }
      };
    default:
      return { ...state };
  }
};
