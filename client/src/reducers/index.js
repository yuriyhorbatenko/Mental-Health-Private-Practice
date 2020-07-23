import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import booking from './booking';

export default combineReducers({
  alert,
  auth,
  profile,
  booking,
});
