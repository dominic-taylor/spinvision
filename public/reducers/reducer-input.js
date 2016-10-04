import updateYear from '../actions'

const initialState = {
  genreValue: '12',
  mediaType: 'movie',
  yearOfRelease: '2016'
};

const inputReducer = function(state = initialState, action){

  if (action.type == 'UPDATE_YEAR') {
      return Object.assign({}, state, { yearOfRelease: action.year});
  }
  return state;

}
export default inputReducer;
