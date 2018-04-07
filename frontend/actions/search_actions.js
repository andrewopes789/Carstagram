import * as APIUtil from '../utils/search_utils';

export const RECEIVE_NAV_SEARCH_RESULTS = 'RECEIVE_NAV_SEARCH_RESULTS';
export const RECEIVE_CHAT_SEARCH_RESULTS = 'RECEIVE_CHAT_SEARCH_RESULTS';

const receiveNavSearchResults = (searchResults) => ({
  type: RECEIVE_NAV_SEARCH_RESULTS,
  searchResults
});

const receiveChatSearchResults = (searchResults) => ({
  type: RECEIVE_CHAT_SEARCH_RESULTS,
  searchResults
});

export const searchDBNav = query => dispatch => (
  APIUtil.searchDB(query).then(
    results => dispatch(receiveNavSearchResults(results)))
);

export const searchDBChat = query => dispatch => (
  APIUtil.searchDB(query).then(
    results => dispatch(receiveChatSearchResults(results))
  )
);
