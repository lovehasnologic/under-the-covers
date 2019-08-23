import React from "react";
import PropTypes from "prop-types";

class Track extends React.Component {
  render() {
    return (
      <li className="track">
        <strong className="track__artist">{this.props.track.artist}</strong>{" "}
        {this.props.track.title}{" "}
        <em className="track__originalArtist">
          ({this.props.track.original_artist})
        </em>
      </li>
    );
  }
}

export default Track;
