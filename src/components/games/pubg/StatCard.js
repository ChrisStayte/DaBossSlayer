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
    labelColWidth: '8',
    contentColWidth: '4'
  };

  render() {
    const { stats, title } = this.props;

    const showInfo = this.props.stats.roundsPlayed > 0 ? true : false;

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
                {showInfo ? `Rounds Played: ${roundsPlayed}` : ''}
              </div>
            </div>
          </CardHeader>
          {showInfo ? (
            <React.Fragment>
              <div className="row">
                <div className="col-12">
                  <span class="badge badge-secondary">Main</span>{' '}
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Average Damage:</p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0 ">{averagedamage}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right">K/D Ratio:</p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{kdratio}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <span class="badge badge-secondary">All</span>{' '}
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Assists: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{assists}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Average Damage: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{averagedamage}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Boosts: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{boosts}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Best Rank Point: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0"> {bestRankPoint}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Headshot Kills: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0"> {headshotKills}</p>
                </div>
              </div>
              <div className="row ">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Heals: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{heals}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Kills: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{kills}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Losses: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{losses}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Longest Kill: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{longestkill}m</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Longest Time Survived: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{longestTimeSurvived} min.</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0"> Losses: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{losses}</p>
                </div>
              </div>

              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Revives: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{revives}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Ride Distance: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{rideDistance}m</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Road Kills: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{roadKills}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Round Most Kills: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{roundMostKills}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Rounds Played: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0"> {roundsPlayed}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Suicides: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{suicides}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Swim Distance: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{swimDistance}m</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0"> Team Kills: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{teamKills}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Top 10: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{top10}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Vehicle Destroys: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{vehicleDestroys}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0"> Walked Distance: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{walkDistance}m</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Weapons Acquired: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0">{weaponsAcquired}</p>
                </div>
              </div>
              <div className="row">
                <div className={`col-${this.state.labelColWidth}`}>
                  <p className="text-right m-0">Wins: </p>
                </div>
                <div className={`col-${this.state.contentColWidth}`}>
                  <p className="text-left m-0"> {wins}</p>
                </div>
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
