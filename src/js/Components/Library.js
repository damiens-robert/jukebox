"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'App/Components/Header';
import Results from 'App/Components/Results';

class Library extends React.Component {
 	constructor(props) {
 	  super(props);
          this.handleSearch = this.handleSearch.bind(this);
          this.handleResult = this.handleResult.bind(this);
          this.state = {search: 'init', result: 'init'};
 	}

	handleSearch(search) {
          this.setState({search: search.query, result: "result"})
	}

	handleResult() {
	}
 
 	render() {
 	  return (
	       <div id="library">
	         <Header 
		    name={ this.props.name }
		    handleSearch={this.handleSearch}
		    
		 />
                 <Results
		    search={this.state.search}
		    result={this.state.result}
		    handleResult={this.handleResult}
		 />
	       </div>
           );
 	}
}

export default Library
