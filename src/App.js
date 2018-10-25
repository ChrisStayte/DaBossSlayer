import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/layout/Header';
import PUBG from './components/games/pubg/PUBG';

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
