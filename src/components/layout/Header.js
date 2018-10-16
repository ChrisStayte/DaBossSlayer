import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark p-0">
        <a
          href="#"
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          DaBossSlayer
        </a>
      </nav>
    );
  }
}
