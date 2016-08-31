import React from 'react';
import key from '../keys.js'
import Request from 'superagent';


let Results = React.createClass ({
  getInitialState(){
    return {
      movies: ['Men In Black']
    };
  },

  componentDidMount(){
    console.log('compdidmount')
    let url = `http://api.themoviedb.org/3/discover/movie?${key}`;
    Request.get(url).then((response) => {
      console.log('response.body.results', response.body.results)
      this.setState({
        movies: response.body.results.map(function(movie){
          return movie.title
        })
      });
    });
  },

  componentWillUnmount(){
    // this.search();
  },

  render(){
      console.log(this.state.movies)
      return (
        <div>
          <ul>
            {this.state.movies.map( function(movie){
              return <li key={movie.id}>{movie}</li> })}
          </ul>
        </div>
      );
  }

});

export default Results;
