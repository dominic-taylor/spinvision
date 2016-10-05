import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MovieList extends Component {

  createListItems() {
    return this.props.movies.map((movie)=>{
      return (<li key={movie.id}>{movie.title}</li>);
    });
  };

  render(){
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
