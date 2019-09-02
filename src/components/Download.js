import React from "react";
import PropTypes from "prop-types";

class Download extends React.Component {
  static propTypes = {
    currentAlbum: PropTypes.string.isRequired
  };

  render() {
    return (
      <a
        href={`/assets/albums/${this.props.currentAlbum}.zip`}
        className="album__download"
        download={`Under The Covers, Volume ${this.props.currentAlbum}`}
      >
        Download Volume {this.props.currentAlbum}
      </a>
    );
  }
}

export default Download;
