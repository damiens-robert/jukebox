"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import Jamendo from 'App/Components/Jamendo';
import Playlist from 'App/Components/Playlist';

class Player extends React.Component {
 	constructor(props) {
 	  super(props);
          this.playlist = [
		  {videoId: "2g811Eo7K8U"},
		  {videoId: "FxWQKeM0eug"}
	  ];
	}

 	render() {
 	  return (
	       <div id="multimedia-player">
		 <Jamendo/> 
 	         <Playlist/>
	       </div>
           );
 	}
}

export default Player
