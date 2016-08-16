import React from 'react';
import key from '../keys.js'

const Search = React.createClass({
  render: function () {
    return <div><form action="https://api.themoviedb.org" method="GET"><input type="text" placeholder="Actor"/><input type="text" placeholder="Genre"/><input type="text" placeholder="Length"/><input type="submit" value="Submit"/></form></div>
  }
});

export default Search;
