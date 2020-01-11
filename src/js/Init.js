"use strict"

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App/Components/Main';


import '../img/icon.png';

class Init {
  constructor() {
    this._deviceReadyElement = document.getElementById("deviceready");
  }

  run() {
    if (window.usingCordova === true) {
      let init = () => {
        return Init.app();
      }

      try {
        let options = Object.defineProperty(init, "once", {
          value: true,
          writable: false,
          configurable: false,
          enumerable: false,
          get : undefined,
          set: undefined
	});
        
        this._deviceReadyElement.addEventListener("deviceReady", init, options);
      } catch (err) {
        throw new EventError("Error while listening the 'deviceready' event to the 'window' while initializing the application.", "dev");
      }
    } else {
      Init.app();
    }
  }

  static app() {
    ReactDOM.render(<App />, document.getElementById('app'));
  }
}

export default Init;
