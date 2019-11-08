import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import surveysReducer from './surveys';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveysReducer
});
