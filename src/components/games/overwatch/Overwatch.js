import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 0.5em;
`;

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  margin-bottom: 3em;
`;

export default class Overwatch extends Component {
  state = {
    URL: 'https://ow-api.com/v1/stats/pc/us/DaBossSlayer-1169/profile',
    stats: {},
    status: <div />
  };

  async componentDidMount() {
    await axios
      .get(this.state.URL)
      .then(res => {})
      .catch(e => {
        this.setState({
          error: e
        });
      });
  }

  render() {
    return (
      <Card>
        <Title>Overwatch</Title>
        {this.state.status}
        <div className="container-fluid" />
      </Card>
    );
  }
}
