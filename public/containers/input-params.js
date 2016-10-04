import React, {Component} from 'react';
import Request from 'superagent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateYear} from '../actions/index';
import store from '../store';
import key from '../../keys.js';


class InputParams extends Component {
  componentDidMountn() {
   makeRequest();
  }
  makeRequest() {
        // console.log("API CALL!", {this.props.year})
         let genre = this.props.genre;
         let media = 'movie'
         let year = this.props.year;
         let url = `http://api.themoviedb.org/3/discover/${media}?${key}&with_genres=${genre}&primary_release_year=${year}`;

        Request.get(url).then((response) => {
          console.log('response.body.results', response.body.results)
          store.dispatch({
            type: 'UPDATE_MOVIES',
            movies: response.body.results.map(function(movie){
              console.log(movie.title, movie.id)
              return ({title: movie.title, id: movie.id})
            })
          });
        });
};
handleYear(e){
  store.dispatch({
    type: 'UPDATE_YEAR',
    year: e.target.value
  }); // this is not sending anytthingh
console.log('send this.refs.year to store', e.target.value, store.getState())
};
  render() {
    console.log('ip', this.props);
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
      onChange={this.handleYear}/>
      <div>Year: {this.props.year}</div>

      <button onClick={() => this.makeRequest()} value="SPIN">SPIN</button>
      </div>
    }
}

function mapStateToProps(store){
    return {
      media: store.input.mediaType,
      genre: store.input.genreValue,
      year: store.input.yearOfRelease
    }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({updateYear: updateYear}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(InputParams);
