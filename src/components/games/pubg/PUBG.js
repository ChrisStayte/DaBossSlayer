import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Row = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

const StatCard = styled.div`
  margin-bottom: 1em;
`;

const Icon = styled.i`
  margin-left: 3px;
`;

const SoloCardHeader = styled.div`
  background-color: #e4955d;
  color: white;
`;

const DuoCardHeader = styled.div`
  background-color: #48a59f;
  color: white;
`;

const SquadCardHeader = styled.div`
  background-color: #6d6aaa;
  color: white;
`;

export default class PUBG extends Component {
  state = {
    API_KEY:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhMDA2NmIzMC1iMjI2LTAxMzYtNjMxYi01MTc5OWNhMWUyYWUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTM5NTUyNzcwLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImRhYm9zc3NsYXllcl93In0._h8DRrOqIWpewQ_cWlwzyIKEkUum6ZsljordCEuHzQU',
    USER_ID: 'account.0fa55cf9d93449968b5a065a29417e72',

    fpp_solo_stats: {},
    fpp_duo_stats: {},
    fpp_squad_stats: {},
    tpp_solo_stats: {},
    tpp_duo_stats: {},
    tpp_squad_stats: {}
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

    const res = await axios.get(SEASON_URL, config);

    // TPP
    const TPP_Solo_Stats = this.getStats(
      res.data.data.attributes.gameModeStats['solo']
    );

    const TPP_Duo_Stats = this.getStats(
      res.data.data.attributes.gameModeStats['duo']
    );

    const TPP_Squad_Stats = this.getStats(
      res.data.data.attributes.gameModeStats['squad']
    );

    this.setState({ tpp_solo_stats: TPP_Solo_Stats });
    this.setState({ tpp_duo_stats: TPP_Duo_Stats });
    this.setState({ tpp_squad_stats: TPP_Squad_Stats });

    // FPP
    const FPP_Solo_Stats = this.getStats(
      res.data.data.attributes.gameModeStats['solo-fpp']
    );

    const FPP_Duo_Stats = this.getStats(
      res.data.data.attributes.gameModeStats['duo-fpp']
    );

    const FPP_Squad_Stats = this.getStats(
      res.data.data.attributes.gameModeStats['squad-fpp']
    );

    this.setState({ fpp_solo_stats: FPP_Solo_Stats });
    this.setState({ fpp_duo_stats: FPP_Duo_Stats });
    this.setState({ fpp_squad_stats: FPP_Squad_Stats });
  }

  getStats(stats) {
    const kdratio = stats.kills
      ? Number.parseFloat(stats.kills / stats.losses).toPrecision(2)
      : 0;

    const averagedamage = stats.losses
      ? Number.parseFloat(
          stats.DamageDealt / (stats.losses + stats.wins)
        ).toPrecision(2)
      : 0;

    return {
      kdratio: kdratio,
      averagedamage: averagedamage
    };
  }

  render() {
    return (
      <Card className="card p-2">
        <h1>Player Unknown Battle Grounds 2</h1>
        <div className="container-fluid">
          <Row className="row ">
            <div className="col-12">
              <h5>Third Person</h5>
            </div>
            <StatCard className="col-md-4">
              <div className="card">
                <SoloCardHeader>
                  Solo
                  <Icon className="fas fa-male" />
                </SoloCardHeader>

                <div>KD Ratio: {this.state.tpp_solo_stats.kdratio}</div>
              </div>
            </StatCard>
            <StatCard className="col-md-4">
              <div className="card">
                <DuoCardHeader>
                  Duo <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                </DuoCardHeader>
                <div>KD Ratio: {this.state.tpp_duo_stats.kdratio}</div>
              </div>
            </StatCard>
            <StatCard className="col-md-4">
              <div className="card">
                <SquadCardHeader>
                  Squad <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                </SquadCardHeader>
                <div>KD Ratio: {this.state.tpp_squad_stats.kdratio}</div>
                <div />
              </div>
            </StatCard>
          </Row>
          <Row className="row">
            <div className="col-12">
              <h5>First Person</h5>
            </div>
            <StatCard className="col-md-4 ">
              <div className="card">
                <SoloCardHeader>
                  Solo
                  <Icon className="fas fa-male" />
                </SoloCardHeader>
                <div>KD Ratio: {this.state.fpp_solo_stats.kdratio}</div>
              </div>
            </StatCard>
            <StatCard className="col-md-4 ">
              <div className="card">
                <DuoCardHeader>
                  Duo <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                </DuoCardHeader>

                <div>KD Ratio: {this.state.fpp_duo_stats.kdratio}</div>
              </div>
            </StatCard>
            <StatCard className="col-md-4 ">
              <div className="card">
                <SquadCardHeader>
                  Squad <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                  <Icon className="fas fa-male" />
                </SquadCardHeader>
                <div>KD Ratio: {this.state.fpp_squad_stats.kdratio}</div>
                <div>
                  Average Damage: {this.state.fpp_squad_stats.averagedamage}
                </div>
              </div>
            </StatCard>
          </Row>
        </div>
      </Card>
    );
  }
}
