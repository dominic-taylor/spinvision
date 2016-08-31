import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search.js';

const Title = React.createClass({
  render: function () {
    var title = "SpinVision";
    return <div><h1>{title}</h1>
    <Search /></div>;
  }
});

ReactDOM.render(
  <Title />,
  document.getElementById('content')
);
