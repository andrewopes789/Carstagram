import { combineReducers } from 'redux';
import photos from './photos_reducer';
import user from './users_reducer';

export default combineReducers({
  user,
  photos
});
