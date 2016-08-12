var React = require('react');
var ReactDOM = require('react-dom');

var Title = React.createClass({
  render: function () {
    var title = "Hi !!";
    return <div><h1>{title}</h1></div>;
  }
});

ReactDOM.render(
  <Title />,
  document.getElementById('content')
);
