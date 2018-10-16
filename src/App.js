import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

import Header from './components/layout/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <nav className="container" />
      </div>
    );
  }
}

export default App;
