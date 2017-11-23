import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => {
  return(
    <div>
      <AuthRoute path="/login" component={SigninContainer}/>
      <AuthRoute path="/signup" component={SignupContainer}/>
    </div>
  );
};

export default App;
