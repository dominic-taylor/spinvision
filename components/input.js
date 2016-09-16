import React from 'react';
import key from '../keys.js';
import Request from 'superagent';
import Results from './results.js';

let Input = React.createClass ({

  selectHandler(){
    return this.props.onGenreChanged(this.refs.genre.value, this.refs.media.value, this.refs.year.value);
  },

  render() {
    console.log('genreValue prop', this.props.genre);
    console.log('refs', this.refs.genre)
      return <div>
      <select ref="genre">
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

      <select ref="media">
        <option value="tv">TV</option>
        <option value="movie">Movie</option>
      </select>

      <select ref="year">
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="1970">1970</option>

      </select>

      <button onClick={this.selectHandler} value="SPIN">SPIN</button>
      </div>
    }
});

export default Input;
