import * as APIUtil from '../utils/recommendation_utils';

export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS';

export const receiveRecommendations = payload => ({
  type: RECEIVE_RECOMMENDATIONS,
  payload
});

export const fetchRecommendations = pageId => dispatch => {
  APIUtil.fetchRecommendations(pageId)
  .then(payload => dispatch(receiveRecommendations(payload)));
};
