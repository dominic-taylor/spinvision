import {updateYear, updateGenre} from '../actions'

const initialState = {
  genreValue: '12',
  mediaType: 'movie',
  yearOfRelease: '2016'
};

const inputReducer = function(state = initialState, action){

  if (action.type == 'UPDATE_YEAR') {
      return Object.assign({}, state, { yearOfRelease: action.year});
  }
  if (action.type == 'UPDATE_GENRE') {
      return Object.assign({}, state, { genreValue: action.genre});
  }
  return state;

}
export default inputReducer;
