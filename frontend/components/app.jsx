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
import FeedPhotoContainer from './photo/feed_photo_container';
import PhotoUploadContainer from './photo/photo_upload_container';
import ProfileContainer from './user/profile_container';
import ChatroomContainer from './chatroom/chatroom_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import FooterContainer from './footer/footer_container';

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
        <ProtectedRoute exact path='/photos' component={FeedPhotoContainer}/>
        <ProtectedRoute path='/users/:userId' component={ProfileContainer}/>
        <ProtectedRoute path='/photos/new' component={PhotoUploadContainer}/>
        <ProtectedRoute path='/chatrooms' component={ChatroomContainer}/>
      </Switch>
      <footer>
        <FooterContainer />
      </footer>
    </div>
  );
};

export default App;
