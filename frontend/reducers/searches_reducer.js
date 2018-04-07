import merge from 'lodash/merge';

import {
  RECEIVE_NAV_SEARCH_RESULTS,
  RECEIVE_CHAT_SEARCH_RESULTS
} from '../actions/search_actions';

const initialState = {
  navSearch: {},
  chatSearch: {}
};

const SearchesReducer = (state=initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NAV_SEARCH_RESULTS:
      return {
        navSearch: action.searchResults,
        chatSearch: {}
      };

    case RECEIVE_CHAT_SEARCH_RESULTS:
      return {
        navSearch: {},
        chatSearch: action.searchResults
      };

    default:
      return state;
  }
};

export default SearchesReducer;
