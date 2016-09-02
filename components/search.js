import React from 'react';
import key from '../keys.js';
import Request from 'superagent';
import Results from './results.js';
import Input from './input.js';

let Search = React.createClass ({
  getInitialState(){
    return {
      movies: ['Men In Black']
    };
  },

  componentDidMount(){
    console.log('compdidmount')
    let genre = '';
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

  render(){
      console.log(this.state.movies)
      return (
        <div>
          <Input/>
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
