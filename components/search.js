import React from 'react';

const Search = React.createClass({
  render: function () {
    return <div><input type="text" placeholder="Actor"/><input type="text" placeholder="Genre"/><input type="text" placeholder="Length"/></div>
  }
});

export default Search;
