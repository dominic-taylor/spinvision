import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Header from './containers/Header'
import InputParams from './containers/InputParams';
import MovieList from './containers/MovieList'



const App = React.createClass({
  render() {
    return (
    <div>
            <Header />
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
