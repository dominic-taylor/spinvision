import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MovieList extends Component {

  createListItems() {
    return this.props.movies.map((movie)=>{
      var poster = movie.poster;

      return (
        <li key={movie.id} >
        <div className="poster">        
          <img src={`https://image.tmdb.org/t/p/w154${poster}`} alt={movie.description} />
          <div className="description"><p>{movie.description}</p></div>
        </div>
        <p className="title">{movie.title}</p>
        </li>);
    });
  };

  render(){
    console.log(this.props.movies);
        return (
          <ul className="movieList">
            {this.createListItems()}
          </ul>
        );
    }
}

  function mapStateToProps(state){
      return {
        movies: state.movies.movieList
      }
  }

export default connect(mapStateToProps)(MovieList);
