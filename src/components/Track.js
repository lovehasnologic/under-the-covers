import React from "react";
import PropTypes from "prop-types";

class Track extends React.Component {
  static propTypes = {
    trackDetails: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      original_artist: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      notes: PropTypes.string
    }),
    trackNumber: PropTypes.string,
    accentColor: PropTypes.string,
    selectedTrack: PropTypes.string,
    loadTrack: PropTypes.func
  };

  hasNotes(notes) {
    if (notes) {
      return <p>{notes}</p>;
    }
  }

  render() {
    const {
      artist,
      title,
      album,
      original_artist,
      url,
      notes
    } = this.props.trackDetails;

    return (
      <li
        className={`track ${
          this.props.trackNumber === this.props.selectedTrack
            ? "track--selected"
            : ""
        }`}
        onClick={() => this.props.handleTrackLoading(this.props.trackNumber)}
      >
        <strong className="track__artist">{artist}</strong> {title}{" "}
        <em className="track__originalArtist">({original_artist})</em>
        <div className="track__info">
          {this.hasNotes(notes)}
          <p>
            Released on{" "}
            <em>
              <a
                href={url}
                className="track__albumUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                {album}
              </a>
            </em>
            .{" "}
          </p>
        </div>
      </li>
    );
  }
}

export default Track;
