import React, { Component } from 'react';
import logo from '../logo.svg';
import Abc from '../clock/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Sang Huynh To React</h2>
        </div>
        <p className="App-intro">
          Hello World!!!
        </p>
        <Abc />
      </div>
    );
  }
}

export default App;
