import {
  labs,
  projectRecruitments,
  labRecruitments,
  activities
} from '@commons/data/mock-data';
import * as actionTypes from '../action-types';
import { RestClient } from '../../../rest-client/rest-client';

export const updateSearchOptions = ({
  university,
  specialize,
  province,
  name
}) => ({
  type: actionTypes.UPDATE_SEARCH_OPTIONS,
  payload: {
    university,
    specialize,
    province,
    name
  }
});

export const fetchingLabs = () => ({
  type: actionTypes.FETCHING_LABS,
  payload: {}
});

export const fetchingLabsDone = () => ({
  type: actionTypes.FETCHING_LABS_DONE,
  payload: {}
});

export const fetchLabsSuccess = res => ({
  type: actionTypes.FETCH_LABS_SUCCESS,
  payload: {
    res
  }
});

export const fetchLabsFailed = () => ({
  type: actionTypes.FETCH_LABS_FAILED,
  payload: {}
});

export const fetchLabs = ({
  name,
  province,
  university,
  specialize,
  page,
  pageSize
}) => dispatch => {
  dispatch(fetchingLabs());

  new RestClient()
    .asyncGet('/labs', {
      name,
      province,
      university,
      specialize,
      page,
      pageSize
    })
    .then(res => {
      console.log('fetch labs res', res);

      if (res.error) {
        console.log('error', res.error);
        return dispatch(fetchLabsFailed());
      }
      dispatch(fetchLabsSuccess({ ...res.data, list: res.data.labs }));
      dispatch(fetchingLabsDone());
    })
    .catch(err => {
      dispatch(fetchLabsFailed());
      dispatch(fetchingLabsDone());
    });

  // dispatch(fetchLabsSuccess(labs));
};

export const fetchingProjectRecruitments = () => ({
  type: actionTypes.FETCHING_PROJECT_RECRUITMENTS,
  payload: {}
});

export const fetchingProjectRecruitmentsDone = () => ({
  type: actionTypes.FETCHING_PROJECT_RECRUITMENTS_DONE,
  payload: {}
});

export const fetchProjectRecruitmentsSuccess = res => ({
  type: actionTypes.FETCH_PROJECT_RECRUITMENTS_SUCCESS,
  payload: { res }
});

export const fetchProjectRecruitmentsFailed = () => ({
  type: actionTypes.FETCH_PROJECT_RECRUITMENTS_FAILED,
  payload: {}
});

export const fetchProjectRecruitments = (page, pageSize) => dispatch => {
  dispatch(fetchingProjectRecruitments());

  // new RestClient()
  //   .asyncGet('/projects/recruitments', {
  //     page,
  //     pageSize
  //   })
  //   .then(res => {
  //     if (res.error) {
  //       return dispatch(fetchProjectRecruitmentsFailed());
  //     }

  //     dispatch(fetchProjectRecruitmentsSuccess(res.data));
  //   })
  //   .catch(err => {
  //     dispatch(fetchProjectRecruitmentsFailed());
  //   });

  dispatch(fetchProjectRecruitmentsSuccess(projectRecruitments));
  dispatch(fetchingProjectRecruitmentsDone());
};

export const fetchingActivities = () => ({
  type: actionTypes.FETCHING_ACTIVE_ACTIVITIES,
  payload: {}
});

export const fetchingActivitiesDone = () => ({
  type: actionTypes.FETCHING_ACTIVE_ACTIVITIES_DONE,
  payload: {}
});

export const fetchActivitiesSuccess = res => ({
  type: actionTypes.FETCH_ACTIVE_ACTIVITIES_SUCCESS,
  payload: { res }
});

export const fetchActivitiesFailed = () => ({
  type: actionTypes.FETCH_ACTIVE_ACTIVITIES_FAILED,
  payload: {}
});

export const fetchActivities = (page, pageSize) => dispatch => {
  dispatch(fetchingActivities());

  // new RestClient()
  //   .asyncGet('/activities/active', {
  //     page,
  //     pageSize
  //   })
  //   .then(res => {
  //     if (res.error) {
  //       return dispatch(fetchActivitiesFailed());
  //     }

  //     dispatch(fetchActivitiesSuccess(res.data));
  //   })
  //   .catch(err => {
  //     dispatch(fetchActivitiesFailed());
  //   });

  dispatch(fetchActivitiesSuccess(activities));
  dispatch(fetchingActivitiesDone());
};

export const fetchingLabRecruitments = () => ({
  type: actionTypes.FETCHING_LAB_RECRUITMENTS,
  payload: {}
});

export const fetchingLabRecruitmentsDone = () => ({
  type: actionTypes.FETCHING_LAB_RECRUITMENTS_DONE,
  payload: {}
});

export const fetchLabRecruitmentsSuccess = res => ({
  type: actionTypes.FETCH_LAB_RECRUITMENTS_SUCCESS,
  payload: { res }
});

export const fetchLabRecruitmentsFailed = () => ({
  type: actionTypes.FETCH_LAB_RECRUITMENTS_FAILED,
  payload: {}
});

export const fetchLabRecruitments = (page, pageSize) => dispatch => {
  dispatch(fetchingLabRecruitments());
  // new RestClient()
  //   .asyncGet('/labs/recruitments', {
  //     page,
  //     pageSize
  //   })
  //   .then(res => {
  //     if (res.error) {
  //       return dispatch(fetchLabRecruitmentsFailed());
  //     }

  //     dispatch(fetchLabRecruitmentsSuccess(res.data));
  //   })
  //   .catch(err => {
  //     dispatch(fetchLabRecruitmentsFailed());
  //   });
  const mockData = dispatch(fetchLabRecruitmentsSuccess(labRecruitments));
  dispatch(fetchingLabRecruitmentsDone());
};
