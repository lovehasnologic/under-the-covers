import React from "react";
import PropTypes from "prop-types";
import Close from "./Close";

class Stats extends React.Component {
  static propTypes = {
    volumes: PropTypes.object.isRequired,
    artists: PropTypes.array.isRequired,
    original_artists: PropTypes.array.isRequired,
    rankUniqueValues: PropTypes.func.isRequired,
    setActiveAlbum: PropTypes.func.isRequired
  };

  state = {
    artists: [],
    original_artists: []
  };

  componentDidMount() {
    this.props.setActiveAlbum("0");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.artists.length < 1) {
      this.props.rankUniqueValues("artist", "artists");
      this.props.rankUniqueValues("original_artist", "original_artists");
    }
  }

  render() {
    const chartCount = 25;
    return (
      <React.Fragment>
        <div className="stats">
          <h1 className="stats__heading">Jukebox Statistics</h1>
          <div className="stats__column stats__column--players">
            <h2 className="stats__subHeading">Top Players</h2>
            <ol className="stats__topList">
              {this.props.artists.slice(0, chartCount).map(value => (
                <li key={value.value} className="stats__topItem">
                  <span className="stats__topArtist">{value.value}</span>
                  <span className="stats__topCount">{value.count}</span>
                </li>
              ))}
            </ol>
            <h3 className="stats__subHeading--minor">Other Players</h3>
            <p className="stats__others">
              {this.props.artists
                .slice(chartCount + 1)
                .sort((a, b) =>
                  a.value.replace("The ", "") > b.value.replace("The ", "")
                    ? 1
                    : -1
                )
                .map(value => (
                  <span className="stats__otherArtist" key={value.value}>
                    {value.value}
                  </span>
                ))}
            </p>
          </div>
          <div className="stats__column stats__column--writers">
            <h2 className="stats__subHeading">Top Writers</h2>
            <ol className="stats__topList">
              {this.props.original_artists.slice(0, chartCount).map(value => (
                <li key={value.value} className="stats__topItem">
                  <span className="stats__topArtist">{value.value}</span>
                  <span className="stats__topCount">{value.count}</span>
                </li>
              ))}
            </ol>
            <h3 className="stats__subHeading--minor">Other Writers</h3>
            <p className="stats__others">
              {this.props.original_artists
                .slice(chartCount + 1)
                .sort((a, b) =>
                  a.value.replace("The ", "") > b.value.replace("The ", "")
                    ? 1
                    : -1
                )
                .map(value => (
                  <span className="stats__otherArtist" key={value.value}>
                    {value.value}
                  </span>
                ))}
            </p>
          </div>
        </div>
        <Close />
      </React.Fragment>
    );
  }
}

export default Stats;
