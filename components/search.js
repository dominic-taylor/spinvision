import React from 'react';
import key from '../keys.js'
import Request from 'superagent';



const Search = React.createClass({




  render: function () {
    return <div>
    <select>
      <option value="28">Action</option>
      <option value="12">Adventure</option>
      <option value="16">Animation</option>
      <option value="35">Comedy</option>
      <option value="80">Crime</option>
      <option value="99">Documentary</option>
      <option value="18">Drama</option>
      <option value="10751">Family</option>
      <option value="14">Fantasy</option>
      <option value="10769">Non-english</option>
      <option value="36">History</option>
      <option value="27">Horror</option>
      <option value="10402">Music</option>
      <option value="9648">Mystery</option>
      <option value="10749">Romance</option>
      <option value="878">Science Fiction</option>
      <option value="10770">TV Movie</option>
      <option value="53">Thriller</option>
      <option value="10752">War</option>
      <option value="37">Western</option>
    </select>

    <input ref="Genre" type="text" placeholder="Genre"/>
    <input ref="Rating" type="text" placeholder="Rating"/>
    <input ref="Type" type="text" placeholder="Type"/>
    <input type="submit" value="Submit"/>
    </div>
  }

  // search(Genre = "", Rating = "", Type = ""){
  //   var url = `https://api.themoviedb.org${key}`
  // }

});



export default Search;
