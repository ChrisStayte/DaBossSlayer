import React, { Component } from 'react';
import styled from 'styled-components';

const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark p-0">
        <Branding
          href="a"
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
        >
          DaBossSlayer
        </Branding>
      </nav>
    );
  }
}
