import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { postUser, postSession, deleteSession } from './utils/session_utils';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  const store = configureStore(preloadedState);
  window.getState = store.getState;
  ReactDOM.render(<Root store={store}/>, root);
});

window.postSession = postSession;
window.postUser = postUser;
window.deleteSession = deleteSession;
