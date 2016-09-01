import React from 'react';
import key from '../keys.js';
import Request from 'superagent';
import Results from './results.js';

let Search = React.createClass ({
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

  render(){
      console.log(this.state.movies)
      return (
        <div>
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



// render: function () {
//     return <div>
//     <select>
//       <option ref="28" value="28">Action</option>
//       <option ref="12" value="12">Adventure</option>
//       <option value="16">Animation</option>
//       <option value="35">Comedy</option>
//       <option value="80">Crime</option>
//       <option value="99">Documentary</option>
//       <option value="18">Drama</option>
//       <option value="10751">Family</option>
//       <option value="14">Fantasy</option>
//       <option value="10769">Non-english</option>
//       <option value="36">History</option>
//       <option value="27">Horror</option>
//       <option value="10402">Music</option>
//       <option value="9648">Mystery</option>
//       <option value="10749">Romance</option>
//       <option value="878">Science Fiction</option>
//       <option value="10770">TV Movie</option>
//       <option value="53">Thriller</option>
//       <option value="10752">War</option>
//       <option value="37">Western</option>
//     </select>
//
//     <input ref="genre" type="text" placeholder="Genre"/>
//     <input ref="rating" type="text" placeholder="Rating"/>
//     <input ref="type" type="text" placeholder="Type"/>
//     <input type="submit" value="Submit"/>
//     </div>
//   }
//
//
// });
