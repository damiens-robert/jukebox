"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

class Results extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
	  return (
		  <div id="results">search is {this.props.search} and result is {this.props.result}</div>
	  );
	}
}

export default Results
