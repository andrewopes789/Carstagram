import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import PhotoContainer from './photo/photo_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

const App = () => {
  return(
    <div>
      <header>
        <NavbarContainer />
      </header>
      <Switch>
        <AuthRoute exact path="/" component={SignupContainer}/>
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={SigninContainer}/>
        <ProtectedRoute path='/photos' component={PhotoContainer}/>
      </Switch>
    </div>
  );
};

export default App;
