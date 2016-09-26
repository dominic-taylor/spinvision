import React from 'react';
import Request from 'superagent';


let Results = React.createClass ({
  render(){
    return <li>{this.props.data}</li>
  }
});



export default Results;
