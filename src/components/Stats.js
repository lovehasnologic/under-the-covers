import React from "react";
import PropTypes from "prop-types";
import Close from "./Close";

class Stats extends React.Component {
  static propTypes = {
    volumes: PropTypes.object.isRequired
  };

  state = {
    artists: [],
    original_artists: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.artists === this.state.artists) {
      this.grabAllTrackData("artist", "artists");
    }
    if (prevState.original_artists === this.state.original_artists) {
      this.grabAllTrackData("original_artist", "original_artists");
    }
  }

  grabAllTrackData = (field, state) => {
    const albums = this.props.volumes;
    let values = [];
    let rankedValues = [];

    Object.keys(albums).map(album =>
      Object.keys(albums[album].tracklist).map(track =>
        values.push(albums[album].tracklist[track][field])
      )
    );

    let uniqueValues = new Set(values);

    uniqueValues.forEach(value => {
      let count = values.reduce((a, v) => a + (v === value), 0);
      rankedValues.push({ value, count });
    });

    rankedValues = rankedValues.sort((a, b) => b.count - a.count);

    this.setState({
      [state]: rankedValues.slice(0, 20)
    });
  };

  render() {
    return (
      <React.Fragment>
        <ol>
          {this.state.artists.map(value => (
            <li key={value.value}>
              {value.value} {value.count}
            </li>
          ))}
        </ol>
        <ol>
          {this.state.original_artists.map(value => (
            <li key={value.value}>
              {value.value} {value.count}
            </li>
          ))}
        </ol>
        <Close />
      </React.Fragment>
    );
  }
}

export default Stats;
