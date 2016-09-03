import React from 'react';
import key from '../keys.js';
import Request from 'superagent';
import Results from './results.js';
import Input from './input.js';

let Search = React.createClass ({
  getInitialState(){
    return {
      movies: ['Men In Black'],
      genreValue: '12'
    };
  },

  // componentDidMount(){
  //   console.log('compdidmount')
  //
  // },

  getMovies(){
    let genre = this.state.genreValue;
    let url   = `http://api.themoviedb.org/3/discover/movie?${key}&with_genres=${genre}`;
    Request.get(url).then((response) => {
      console.log('response.body.results', response.body.results)
      this.setState({
        movies: response.body.results.map(function(movie){
          return movie.title
        })
      });
    });
  },

  handleGenre(newGenre) {
    this.setState({ genreValue: newGenre })
    this.getMovies();
  },

  render(){
      console.log(this.state.movies)
      console.log('genreValue state', this.state.genreValue)
      return (
        <div>
          <Input genre={this.state.genreValue} onGenreChanged={this.handleGenre}/>
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
