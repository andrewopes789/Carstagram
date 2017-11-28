import { combineReducers } from 'redux';

import users from './users_reducer';
import photos from './photos_reducer';
import comments from './comments_reducer';
import likes from './likes_reducer';

export default combineReducers({
  users,
  photos,
  comments,
  likes
});
