import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import InputParams from './containers/input-params';
import MovieList from './containers/movie-list'



const App = React.createClass({
  render() {
    return (
    <div>
        <h1>SpinVision</h1>
            <InputParams />
            <MovieList />
    </div>
    );
  }
});

ReactDOM.render(
  <Provider store={store} >
  <App />
  </ Provider>,
  document.getElementById('content')
);
