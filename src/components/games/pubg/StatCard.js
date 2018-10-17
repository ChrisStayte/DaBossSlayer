import React, { Component } from 'react';
import styled from 'styled-components';

const StatCardStyle = styled.div`
  margin-bottom: 1em;
`;

const CardHeader = styled.div`
  margin-bottom: 0.5em;
  color: white;
`;

const Icon = styled.i`
  margin-left: 3px;
`;

export default class StatCard extends Component {
  state = {
    showInfo: true
  };

  render() {
    const { stats, title } = this.props;

    // Show Info

    this.state = {
      showInfo: stats.wins > 0 || stats.losses > 0 ? true : false
    };

    // Kill Death Ratio
    const kdratio = stats.kills
      ? Number.parseFloat(stats.kills / stats.losses).toPrecision(2)
      : 0;

    // Average Damage
    const averagedamage = stats.losses
      ? Math.round(stats.damageDealt / (stats.losses + stats.wins))
      : 0;

    // Longest Kill
    const longestkill = stats.longestKill
      ? Number.parseFloat(stats.longestKill).toFixed(1)
      : 0;

    // Games Played
    const gamesplayed = stats.wins + stats.losses;

    // Headshot Kills
    const headshotKills = stats.headshotKills;

    // Most Kills
    const mostKills = stats.roundMostKills;

    // Heals
    const heals = stats.heals;

    // Distance Walked
    const walkDistance = Number.parseFloat(stats.walkDistance).toFixed(1);

    return (
      <StatCardStyle>
        <div className="card">
          <CardHeader
            style={(() => {
              switch (title.toLowerCase()) {
                case 'solo' || 'solo-fpp':
                  return { backgroundColor: '#E4955D' };
                case 'duo' || 'duo-fpp':
                  return { backgroundColor: '#48A59F' };
                case 'squad' || 'squad-fpp':
                  return { backgroundColor: '#6D6AAA' };
                default:
                  return { backgroundColor: '#0C1010' };
              }
            })()}
          >
            <div className="row">
              <div className="col-5">
                {(() => {
                  switch (title.toLowerCase()) {
                    case 'solo' || 'solo-fpp':
                      return (
                        <React.Fragment>
                          Solo
                          <Icon className="fa fa-male" />
                        </React.Fragment>
                      );
                    case 'duo' || 'duo-fpp':
                      return (
                        <React.Fragment>
                          Duo
                          <Icon className="fa fa-male" />
                          <Icon className="fa fa-female" />
                        </React.Fragment>
                      );
                    case 'squad' || 'squad-fpp':
                      return (
                        <React.Fragment>
                          Squad
                          <Icon className="fa fa-male" />
                          <Icon className="fa fa-female" />
                          <Icon className="fa fa-male" />
                          <Icon className="fa fa-female" />
                        </React.Fragment>
                      );
                    default:
                      return '';
                  }
                })()}
              </div>
              <div className="col-7">
                {this.state.showInfo ? `Games Played: ${gamesplayed}` : ''}
              </div>
            </div>
          </CardHeader>
          {this.state.showInfo ? (
            <React.Fragment>
              <div className="row">
                <div className="col-7">K/D Ratio: </div>
                <div className="col-5">{kdratio}</div>
              </div>
              <div className="row">
                <div className="col-7">Average Damage: </div>
                <div className="col-5">{averagedamage}</div>
              </div>
              <div className="row">
                <div className="col-7">Longest Kill: </div>
                <div className="col-5">{longestkill}m</div>
              </div>
              <div className="row">
                <div className="col-7">Headshot Kills: </div>
                <div className="col-5">{headshotKills}</div>
              </div>
              <div className="row">
                <div className="col-7">Round Most Kills: </div>
                <div className="col-5">{mostKills}</div>
              </div>
              <div className="row">
                <div className="col-7">Heals: </div>
                <div className="col-5">{heals}</div>
              </div>
              <div className="row">
                <div className="col-7">Distance Walked: </div>
                <div className="col-5">{walkDistance}m</div>
              </div>
            </React.Fragment>
          ) : (
            <h4>No Games Played</h4>
          )}
        </div>
      </StatCardStyle>
    );
  }
}
