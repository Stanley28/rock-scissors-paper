import React, { Component } from 'react';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gameboard />
      </div>
    );
  }
}

export default App;
