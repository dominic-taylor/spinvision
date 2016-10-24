import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MovieList extends Component {

  createListItems() {
    return this.props.movies.map((movie)=>{
      var poster = movie.poster;
      return (<div>
        <li key={movie.id}><p>{movie.title}</p><img src={`https://image.tmdb.org/t/p/w154${poster}`} alt='movie poster'></img></li>
        </div>);
    });
  };

  render(){
    console.log(this.props.movies);
        return (
          <ul>
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
