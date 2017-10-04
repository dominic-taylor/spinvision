import React, {Component} from 'react';
import Request from 'superagent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateYear, updateList, updateGenre} from '../actions/index';
import store from '../store';
import key from '../../keys.js';


class InputParams extends Component {
  componentWillMount() {
   this.makeRequest();
  }
  makeRequest() {

    console.log(this.props)
         let genre = this.props.genre; 
         let media = 'movie'
         let year = this.props.year;
         let url = `https://api.themoviedb.org/3/discover/${media}?${key}&with_genres=${genre}&primary_release_year=${year}`;

        Request.get(url).then((response) => {
          store.dispatch({
            type: 'UPDATE_MOVIES',
            movies: response.body.results.map(function(movie){
              return ({title: movie.title, id: movie.id, poster: movie.poster_path, description: movie.overview})
            })
          });
          console.log(response.body);
        });
};
handleYear(e){
  store.dispatch({
    type: 'UPDATE_YEAR',
    year: e.target.value
  });
};
handleGenre(e){
  store.dispatch({
    type: 'UPDATE_GENRE',
    genre: e.target.value
  });
};

createYearOptions(highestYear) {
  let yearArray = []
  for(var i=1900; i<=highestYear; i++){
    yearArray.push(i)
  }
  return yearArray.map((year) => {
    return (
        <option key={year} value={year}>{year}</option>
      )

  })

}

  render() {
    let maxYear = new Date().getFullYear() + 2;

    return (
     <div className="inputBox"> 
       <label htmlFor="genre">Genre: </label>
        <select ref="genre" defaultValue="12" onChange={this.handleGenre}>
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

        <label htmlFor="date">Year: </label>
        <select defaultValue={maxYear - 2} id="date" ref="year"
                onChange={this.handleYear}>
               {this.createYearOptions(maxYear)}       
        </select>

        <button className="btn" onClick={() => this.makeRequest()} value="SPIN" >go!</button>
      </div>
      )
    }
}

function mapStateToProps(state){
    return {
      media: state.input.mediaType,
      genre: state.input.genreValue,
      year: state.input.yearOfRelease
    }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({updateYear: updateYear,
                            updateList: updateList,
                            updateGenre: updateGenre}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(InputParams);
