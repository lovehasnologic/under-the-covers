import React from "react";
import PropTypes from "prop-types";

class Download extends React.Component {
  static propTypes = {
    currentAlbum: PropTypes.string.isRequired
  };

  download() {
    window._paq.push([
      "trackEvent",
      "Album",
      "Download",
      "Vol. " + this.props.currentAlbum
    ]);
  }

  render() {
    return (
      <a
        href={`/assets/albums/${this.props.currentAlbum}.zip`}
        className="download"
        download={`Under The Covers, Volume ${this.props.currentAlbum}`}
        onClick={() => this.download()}
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
