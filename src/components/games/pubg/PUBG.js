import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StatCard from './StatCard';

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

const Row = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

export default class PUBG extends Component {
  state = {
    API_KEY:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMDA2NmIzMC1iMjI2LTAxMzYtNjMxYi01MTc5OWNhMWUyYWUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTM5NTUyNzcwLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImRhYm9zc3NsYXllcl93In0._h8DRrOqIWpewQ_cWlwzyIKEkUum6ZsljordCEuHzQU',
    USER_ID: 'account.0fa55cf9d93449968b5a065a29417e72',
    solo: {},
    duo: {},
    squad: {},
    soloFpp: {},
    duoFpp: {},
    squadFpp: {},
    Status: <div />
  };

  async componentDidMount() {
    const SEASON_URL = `https://api.pubg.com/shards/steam/players/${
      this.state.USER_ID
    }/seasons/division.bro.official.pc-2018-01`;
    var config = {
      headers: {
        Authorization: 'Bearer ' + this.state.API_KEY,
        Accept: 'application/vnd.api+json'
      }
    };

    const res = await axios
      .get(SEASON_URL, config)
      .then(res => {
        this.setState({
          solo: res.data.data.attributes.gameModeStats['solo'],
          duo: res.data.data.attributes.gameModeStats['duo'],
          squad: res.data.data.attributes.gameModeStats['squad'],
          soloFpp: res.data.data.attributes.gameModeStats['solo-fpp'],
          duoFpp: res.data.data.attributes.gameModeStats['duo-fpp'],
          squadFpp: res.data.data.attributes.gameModeStats['squad-fpp']
        });
      })
      .catch(e => {
        this.setState({ error: e });
        if (e.response.status === 429) {
          this.setState({
            Status: (
              <div class="alert alert-danger" role="alert">
                To Many Requests
              </div>
            )
          });
        }
      });
  }

  render() {
    return (
      <Card className="card p-1">
        <Title>Player Unknown Battle Grounds</Title>
        {this.state.Status}
        <div className="container-fluid">
          <Row className="row ">
            <div className="col-12">
              <h5>
                <span className="badge badge-secondary">Third Person</span>
              </h5>
            </div>
            <div className="col-md-4">
              <StatCard stats={this.state.solo} title="Solo" />
            </div>
            <div className="col-md-4">
              <StatCard stats={this.state.duo} title="Duo" />
            </div>
            <div className="col-md-4">
              <StatCard stats={this.state.squad} title="Squad" />
            </div>
          </Row>
          <Row className="row">
            <div className="col-12">
              <h5>
                <span className="badge badge-secondary">First Person</span>
              </h5>
            </div>
            <div className="col-md-4">
              <StatCard stats={this.state.soloFpp} title="Solo" />
            </div>
            <div className="col-md-4">
              <StatCard stats={this.state.duoFpp} title="Duo" />
            </div>
            <div className="col-md-4">
              <StatCard stats={this.state.squadFpp} title="Squad" />
            </div>
          </Row>
        </div>
      </Card>
    );
  }
}
