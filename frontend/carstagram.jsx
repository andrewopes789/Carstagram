import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { postUser, postSession, deleteSession } from './utils/session_utils';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser.user } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});

window.postSession = postSession;
window.postUser = postUser;
window.deleteSession = deleteSession;
