import React from 'react';
import ReactDOM from 'react-dom';

const Title = React.createClass({
  render: function () {
    var title = "SpinVision";
    return <div><h1>{title}</h1></div>;
  }
});

ReactDOM.render(
  <Title />,
  document.getElementById('content')
);
