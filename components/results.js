import React from 'react';
import key from '../keys.js'
import Request from 'superagent';


let Results = React.createClass ({
  render(){
    return <li>{this.props.data}</li>
  }
});



export default Results;
