import React from 'react';
import Request from 'superagent';
import Results from './results.js';

let Input = React.createClass ({
  getInitialState(){
  return   {
    year: 2016
  }
  },
  selectHandler(){
    return this.props.onGenreChanged(this.refs.genre.value, this.refs.media.value, this.refs.year.value);
  },

  handleChange(e){
    this.setState({year: e.target.value});
  },

  render() {
    return <div>
    <select ref="genre" defaultValue="12" >
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
      <select ref="media" defaultValue="movie">
        <option value="tv">TV</option>
        <option value="movie">Movie</option>
      </select>

      <input
      type="range"  min="1900" max="2016" defaultValue="2016" id="date" ref="year"
      onChange={this.handleChange}/>
      <div>Year: {this.state.year}</div>

      <button onClick={this.selectHandler} value="SPIN">SPIN</button>
      </div>
    }
});

export default Input;



/*  var genreOption;
if(this.refs.media.value == "tv"){
  genreOption = <div>
  <option value="10759">Action & Adventure</option>
    <option value="16">Animation</option>
    <option value="35">Comedy</option>
    <option value="80">Crime</option>
    <option value="99">Documentary</option>
    <option value="18">Drama</option>
    <option value="10751">Family</option>
    <option value="10762">Kids</option>
    <option value="9648">Mystery</option>
    <option value="10763">News</option>
    <option value="10764">Reality</option>
    <option value="10765">Sci-Fi & Fantasy</option>
    <option value="10766">Soap</option>
    <option value="10767">Talk</option>
    <option value="10768">War & Politics</option>
    <option value="37">Western</option>
    </div>
}else{
  genreOption =

*/
