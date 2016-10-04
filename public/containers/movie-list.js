import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import updateList from '../actions/index';

class MovieList extends Component {

  createListItems() {
    return this.props.movies.map((movie)=>{
      return (
          <li key={movie.id}>{movie.title}</li>
       );
    });
  };

  render(){
        return (
          <ul>
            {this.createListItems()}ç
          </ul>
        );
    }
}

  function mapStateToProps(state){
      return {
        movies: state.movies
      }
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({updateList: updateList}, dispatch)

  }

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
