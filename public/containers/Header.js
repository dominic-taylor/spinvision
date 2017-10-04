import React from 'react';
import {connect} from 'react-redux';

import InputParams from './InputParams';

const Header = React.createClass({
 	render() {
 		return(
 			<div className="headingBox">
        		<h1>SpinVision</h1>
            	<InputParams />
      		</div>)
      } 
})

 export default connect()(Header);