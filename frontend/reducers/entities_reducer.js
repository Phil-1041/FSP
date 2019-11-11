import { combineReducers } from 'redux';
import users from './users_reducer';
import videos from './video_reducer';

export default combineReducers({
  users,
  videos
})