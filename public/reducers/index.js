import {combineReducers} from 'redux';

import MovieReducer from './reducer-movies';
import InputReducer from './reducer-input';


var allReducers = combineReducers({
  movies: MovieReducer,
  input: InputReducer
});
export default allReducers;
