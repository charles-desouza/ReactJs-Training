import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IndecisionApp from './components/indecisionApp.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <IndecisionApp></IndecisionApp>
        </header>
      </div>
    );
  }
}

export default App;
