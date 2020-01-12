"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
	  return (
            <footer>
              <em>
                Forked from JukeTube made by:
                <a href="https://jgthms.com/">J. Thomas</a>
              </em>
	      Built with <a href="https://reactjs.org/">ReactJS</a>.
	      Source code available on <a href="https://github.com/damiens-robert/jukebox">Github</a>.
            </footer>
	  );
	}
}

export default Footer;
