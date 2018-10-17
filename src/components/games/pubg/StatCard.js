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
      showInfo: stats.roundsPlayed > 0 ? true : false
    };

    // Assits
    const assists = stats.assists;

    // Average Damage
    const averagedamage = stats.losses
      ? Math.round(stats.damageDealt / (stats.losses + stats.wins))
      : 0;

    // Best Rank Point
    const bestRankPoint = stats.bestRankPoint;

    // Boosts
    const boosts = stats.boosts;

    // Headshot Kills
    const headshotKills = stats.headshotKills;

    // Heals
    const heals = stats.heals;

    // Kills
    const kills = stats.kills;

    // Kill Death Ratio
    const kdratio = stats.kills
      ? Number.parseFloat(stats.kills / stats.losses).toPrecision(2)
      : 0;

    // Longest Kill
    const longestkill = stats.longestKill
      ? Number.parseFloat(stats.longestKill).toFixed(1)
      : 0;

    // Longest Time Survived
    const longestTimeSurvived = stats.rankPoints
      ? Number.parseFloat(stats.rankPoints / 60).toFixed(0)
      : 0;

    // Losses
    const losses = stats.losses;

    // Rank Points
    const rankPoints = stats.rankPoints
      ? Number.parseFloat(stats.rankPoints).toFixed(0)
      : 0;

    // Revives
    const revives = stats.revives;

    // Ride Distance
    const rideDistance = stats.rideDistance
      ? Number.parseFloat(stats.rideDistance).toFixed(0)
      : 0;

    // Road Kills
    const roadKills = stats.roadKills;

    // Round Most Kills
    const roundMostKills = stats.roundMostKills;

    // Rounds Played
    const roundsPlayed = stats.roundsPlayed;

    // Suicides
    const suicides = stats.suicides;

    // Swim Distance
    const swimDistance = stats.swimDistance
      ? Number.parseFloat(stats.swimDistance).toFixed(0)
      : 0;

    // Team Kills
    const teamKills = stats.teamKills;

    // Top 10
    const top10 = stats.top10s;

    // Vehicle Destroys
    const vehicleDestroys = stats.vehicleDestroys;

    // Walking Distance
    const walkDistance = stats.walkDistance
      ? Number.parseFloat(stats.walkDistance).toFixed(0)
      : 0;

    // Weapons Acquired
    const weaponsAcquired = stats.weaponsAcquired;

    // Wins
    const wins = stats.wins;

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
                {this.state.showInfo ? `Rounds Played: ${roundsPlayed}` : ''}
              </div>
            </div>
          </CardHeader>
          {this.state.showInfo ? (
            <React.Fragment>
              <div className="row">
                <div className="col-12">Main </div>
              </div>
              <div className="row">
                <div className="col-7">Average Damage: </div>
                <div className="col-5">{averagedamage}</div>
              </div>
              <div className="row">
                <div className="col-7">K/D Ratio: </div>
                <div className="col-5">{kdratio}</div>
              </div>
              <div className="row">
                <div className="col-12">All</div>
              </div>
              <div className="row">
                <div className="col-7">Assists: </div>
                <div className="col-5">{assists}</div>
              </div>
              <div className="row">
                <div className="col-7">Average Damage: </div>
                <div className="col-5">{averagedamage}</div>
              </div>
              <div className="row">
                <div className="col-7">Boosts: </div>
                <div className="col-5">{boosts}</div>
              </div>
              <div className="row">
                <div className="col-7">Headshot Kills: </div>
                <div className="col-5">{headshotKills}</div>
              </div>
              <div className="row">
                <div className="col-7">Heals: </div>
                <div className="col-5">{heals}</div>
              </div>
              <div className="row">
                <div className="col-7">Kills: </div>
                <div className="col-5">{kills}</div>
              </div>
              <div className="row">
                <div className="col-7">Losses: </div>
                <div className="col-5">{losses}</div>
              </div>
              <div className="row">
                <div className="col-7">Longest Kill: </div>
                <div className="col-5">{longestkill}m</div>
              </div>
              <div className="row">
                <div className="col-7">Longest Time Survived: </div>
                <div className="col-5">{longestTimeSurvived} min.</div>
              </div>
              <div className="row">
                <div className="col-7">Losses: </div>
                <div className="col-5">{losses}</div>
              </div>
              <div className="row">
                <div className="col-7">Rank Points: </div>
                <div className="col-5">{rankPoints}</div>
              </div>
              <div className="row">
                <div className="col-7">Revives: </div>
                <div className="col-5">{revives}</div>
              </div>
              <div className="row">
                <div className="col-7">Ride Distance: </div>
                <div className="col-5">{rideDistance}m</div>
              </div>
              <div className="row">
                <div className="col-7">Road Kills: </div>
                <div className="col-5">{roadKills}</div>
              </div>
              <div className="row">
                <div className="col-7">Round Most Kills: </div>
                <div className="col-5">{roundMostKills}</div>
              </div>
              <div className="row">
                <div className="col-7">Rounds Played: </div>
                <div className="col-5">{roundsPlayed}</div>
              </div>
              <div className="row">
                <div className="col-7">Suicides: </div>
                <div className="col-5">{suicides}</div>
              </div>
              <div className="row">
                <div className="col-7">Swim Distance: </div>
                <div className="col-5">{swimDistance}m</div>
              </div>
              <div className="row">
                <div className="col-7">Team Kills: </div>
                <div className="col-5">{teamKills}</div>
              </div>
              <div className="row">
                <div className="col-7">Top 10: </div>
                <div className="col-5">{top10}</div>
              </div>
              <div className="row">
                <div className="col-7">Vehicle Destroys: </div>
                <div className="col-5">{vehicleDestroys}</div>
              </div>
              <div className="row">
                <div className="col-7">Walked Distance: </div>
                <div className="col-5">{walkDistance}m</div>
              </div>
              <div className="row">
                <div className="col-7">Weapons Acquired: </div>
                <div className="col-5">{weaponsAcquired}</div>
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
