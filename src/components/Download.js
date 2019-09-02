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
        className="download"
        download={`Under The Covers, Volume ${this.props.currentAlbum}`}
      >
        <span className="download__content">
          <span className="download__text">
            Download Volume {this.props.currentAlbum}
          </span>
        </span>
      </a>
    );
  }
}

export default Download;
