import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { postUser, postSession, deleteSession } from './utils/session_utils';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});

window.postSession = postSession;
window.postUser = postUser;
window.deleteSession = deleteSession;
