"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import Library from 'App/Components/Library';
import Player from 'App/Components/Player';
import Footer from 'App/Components/Footer';

class App extends React.Component {
 	constructor(props) {
 	  super(props);
 	}
 
 	render() {
 	  return (
             <div id="jukebox">
	       <Library name={ this.props.name }/>
	       <Player/>
               <Footer/>
 	    </div>
           );
 	}
}

export default App
