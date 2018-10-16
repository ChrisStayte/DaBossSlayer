import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

import PUBG from './components/games/pubg/PUBG';
import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <PUBG />
        </div>
      </div>
    );
  }
}

export default App;
