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
    loadTrack: PropTypes.func,
    volume: PropTypes.string
  };

  hasNotes(notes) {
    if (notes) {
      return <p itemProp="comment">{notes}</p>;
    }
  }

  hasUrl(url, album) {
    if (url) {
      return (
        <a
          href={url}
          className="track__albumUrl"
          target="_blank"
          rel="noopener noreferrer"
          itemProp="inAlbum"
        >
          {album}
        </a>
      );
    } else {
      return (
        <span>
          {album}
        </span>
      )
    }
  }

  hasAlbum(album, url) {
    if (album) {
      return (
        <p itemProp="about">
          Released on{" "}
          <em>
            {this.hasUrl(url, album)}
          </em>
          .
        </p>
      );
    } else {
      return <p itemProp="about">Unreleased</p>;
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
          this.props.trackNumber === this.props.selectedTrack ||
          ((this.props.selectedTrack === "" ||
            this.props.selectedTrack === undefined) &&
            this.props.trackNumber === "1")
            ? "track--selected"
            : ""
        }`}
        onClick={() => this.props.handleTrackLoading(this.props.trackNumber)}
        itemProp="track"
        itemScope=""
        itemType="http://schema.org/MusicRecording"
      >
        <strong className="track__artist" itemProp="byArtist">
          {artist}
        </strong>{" "}
        <span itemProp="name">{title}</span>{" "}
        <em className="track__originalArtist" itemProp="copyrightHolder">
          ({original_artist})
        </em>
        <div className="track__info">
          {this.hasNotes(notes)}
          {this.hasAlbum(album, url)}
          <meta
            itemProp="inPlaylist"
            content={`Under The Covers, Vol. ${this.props.volume}`}
          />
          <meta itemProp="accessMode" content="auditory" />
        </div>
      </li>
    );
  }
}

export default Track;
