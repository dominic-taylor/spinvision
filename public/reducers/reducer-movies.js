import updateList from '../actions'

const initialState = { movieList:
                        [
                          {
                            title: '',
                            id: '1',
                            poster: '',
                            description: ''
                          },
                          {
                            title: '',
                            id: '45',
                            poster: '',
                            description: ''
                          }
                        ]
                      };

var movieReducer = function(state = initialState, action){

 if (action.type == 'UPDATE_MOVIES') {
      return Object.assign({}, state, { movieList: action.movies});
  }
  return state;

}
export default movieReducer;
