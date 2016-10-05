import {combineReducers} from 'redux';
import MovieReducer from './reducer-movies';

const allReducers = combineReducers({
    movies: MovieReducer
});

export default allReducers;
