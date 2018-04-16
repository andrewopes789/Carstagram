import * as APIUtil from '../utils/recommendation_utils';

export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS';
export const START_LOADING_RECOMMENDATIONS = 'START_LOADING_RECOMMENDATIONS';

export const startLoadingRecommendations = () => ({
  type: START_LOADING_RECOMMENDATIONS
});

export const receiveRecommendations = payload => ({
  type: RECEIVE_RECOMMENDATIONS,
  payload
});

export const fetchRecommendations = pageId => dispatch => {
  dispatch(startLoadingRecommendations());
  APIUtil.fetchRecommendations(pageId)
  .then(payload => dispatch(receiveRecommendations(payload)));
};
