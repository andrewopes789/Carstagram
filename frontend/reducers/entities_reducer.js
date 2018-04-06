import { combineReducers } from 'redux';

import user from './user_reducer';
import photos from './photos_reducer';
import comments from './comments_reducer';
import likes from './likes_reducer';
import follows from './follows_reducer';
import messages from './messages_reducer';
import chatrooms from './chatrooms_reducer';
import searchResults from './searches_reducer';

export default combineReducers({
  user,
  photos,
  comments,
  likes,
  follows,
  messages,
  chatrooms,
  searchResults
});
