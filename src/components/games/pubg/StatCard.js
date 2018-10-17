import React, { Component } from 'react';
import styled from 'styled-components';

const StatCardStyle = styled.div`
  margin-bottom: 1em;
`;

const CardHeader = styled.div`
  margin-bottom: 0.5em;
  color: white;
`;

export default class StatCard extends Component {
  state = {
    showInfo: true
  };

  render() {
    const { stats, title } = this.props;

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
                      return 'Solo';
                    case 'duo' || 'duo-fpp':
                      return 'Duo';
                    case 'squad' || 'squad-fpp':
                      return 'Squad';
                    default:
                      return '';
                  }
                })()}
              </div>
              <div className="col-7">
                {this.state.showInfo ? `Games Played: ${kdratio}` : ''}
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
                <div className="col-5">{}</div>
              </div>
              <div className="row">
                <div className="col-7">Longest Kill: </div>
                <div className="col-5">{}m</div>
              </div>
            </React.Fragment>
          ) : (
            <h5>No Games Played</h5>
          )}
        </div>
      </StatCardStyle>
    );
  }
}
