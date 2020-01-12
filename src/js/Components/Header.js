"use strict"

import React from 'react';
import ReactDOM from 'react-dom';
import Search from 'App/Components/Search'

class Header extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleSearch =  this.handleSearch.bind(this);
	}

	handleSearch(search) {
	  this.props.handleSearch(search);
	}

	render() {
	  return (
            <header>
              <h1>{ this.props.name }</h1>
	      <Search
		  handleSearch={this.handleSearch}
	      />
            </header>
	  );
	}
}

export default Header
