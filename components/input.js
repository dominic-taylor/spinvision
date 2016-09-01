import React from 'react';
import key from '../keys.js';
import Request from 'superagent';
import Results from './results.js';

let Input = React.createClass ({

  componentDidMount(){
    console.log('big juicy meat')
  },

  render() {
      return <div>
      <select>
        <option ref="28" value="28">Action</option>
        <option ref="12" value="12">Adventure</option>
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

      <select>
        <option ref="rating" type="text" placeholder="Rating"/>
      </select>

      <select>
        <option ref="type" type="text" placeholder="Type"/>
      </select>

      <input type="submit" value="Submit"/>
      </div>
    }
});

export default Input;
