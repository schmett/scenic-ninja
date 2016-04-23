import { combineReducers } from 'redux';
import places from './places.js';
import savedPlaces from './savedPlaces.js';
import user from './user.js';
import saveFriend from './friend.js';

const rootReducer = combineReducers({
  places,
  savedPlaces,
  user,
  saveFriend
});

export default rootReducer;
