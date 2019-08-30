import React from "react";
import PropTypes from "prop-types";
import Close from "./Close";

class Stats extends React.Component {
  static propTypes = {
    volumes: PropTypes.object.isRequired,
    artists: PropTypes.array.isRequired,
    original_artists: PropTypes.array.isRequired,
    rankUniqueValues: PropTypes.func.isRequired
  };

  state = {
    artists: [],
    original_artists: []
  };

  componentDidMount() {
    this.props.clearAlbum();
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
        <div>
          <ol>
            {this.props.artists.slice(0, chartCount).map(value => (
              <li key={value.value}>
                {value.value} {value.count}
              </li>
            ))}
          </ol>
          <p>
            {this.props.artists
              .slice(chartCount + 1)
              .sort((a, b) =>
                a.value.replace("The ", "") > b.value.replace("The ", "")
                  ? 1
                  : -1
              )
              .map(value => value.value)}
          </p>
        </div>
        <div>
          <ol>
            {this.props.original_artists.slice(0, chartCount).map(value => (
              <li key={value.value}>
                {value.value} {value.count}
              </li>
            ))}
          </ol>
          <p>
            {this.props.original_artists
              .slice(chartCount + 1)
              .sort((a, b) =>
                a.value.replace("The ", "") > b.value.replace("The ", "")
                  ? 1
                  : -1
              )
              .map(value => value.value)}
          </p>
        </div>
        <Close />
      </React.Fragment>
    );
  }
}

export default Stats;
