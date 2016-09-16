import React from 'react';
import key from '../keys.js';
import Request from 'superagent';
import Results from './results.js';
import Input from './input.js';

let Search = React.createClass ({
  getInitialState(){
    return {
      movies: ['Men In Black'],
      genreValue: '12',
      mediaType: 'movie',
      yearOfRelease: '2016'
    };
  },

  componentDidMount(){
    console.log('compdidmount')
    this.getMovies()
  },

  getMovies(){
    let genre = this.state.genreValue;
    let media = this.state.mediaType;
    let year = this.state.yearOfRelease;
    if(media === 'movie'){
      var releaseYear = 'primary_release_year'
    } else{
      var releaseYear = 'first_air_date_year'
    }
    let url = `http://api.themoviedb.org/3/discover/${media}?${key}&with_genres=${genre}&${releaseYear}=${year}`;
    Request.get(url).then((response) => {
      console.log('response.body.results', response.body.results)
      this.setState({
        movies: response.body.results.map(function(movie){
          return movie.title
        })
      });
    });
  },

  componentDidUpdate(prevProps, prevState) {
     if (prevState.genreValue !== this.state.genreValue) {
         this.getMovies();
     }
     if (prevState.mediaType !== this.state.mediaType) {
         this.getMovies();
     }
     if (prevState.yearOfRelease !== this.state.yearOfRelease) {
            this.getMovies();
      }
 },

  handleGenre(newGenre, newMedia, newYear) {
    this.setState({ genreValue: newGenre,
                    mediaType: newMedia,
                    yearOfRelease: newYear
     })
  },

  render(){
      console.log(this.state)
      console.log('genreValue state', this.state.genreValue)
      return (
        <div>
          <Input onGenreChanged={this.handleGenre}/>
          <ul>
            {this.state.movies.map( function(movie){
              return <Results key={movie.id} data={movie}/>;
            })}
          </ul>
        </div>
      );
  }

});

export default Search;
