import * as APIUtil from '../utils/search_utils';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const searchDB = (query) => (dispatch) => (
  APIUtil.searchDB(query).then(
    results => dispatch(receiveSearchResults(results)))
);
