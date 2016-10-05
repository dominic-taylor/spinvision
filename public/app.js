import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

//const store = createStore(allReducers);

const App = React.createClass({
  render() {
    return (
    <div>
        <h1>SpinVision</h1>
            <Search />
    </div>
    );
  }
});

ReactDOM.render(
  //<Provider store={store} >
  <App />
  //</ Provider>,
  ,document.getElementById('content')
);
