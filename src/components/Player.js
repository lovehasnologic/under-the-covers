import React from "react";
import PropTypes from "prop-types";

class Player extends React.Component {
  static propTypes = {
    volumes: PropTypes.object.isRequired,
    currentAlbum: PropTypes.string.isRequired
  };

  render() {
    const tracklist = this.props.volumes[this.props.currentAlbum].tracklist;
    const trackCount = Object.keys(tracklist).length;

    return (
      <div className="player">
        <div className="player__controls">
          <button className="player__control player__prev">
            <img
              src="/assets/images/icons/prev-track.svg"
              className="player__icon"
              alt="Previous Track"
            />
          </button>
          <button className="player__control player__play">
            <img
              src="/assets/images/icons/play.svg"
              className="player__icon"
              alt="Play Button"
            />
          </button>
          <button className="player__control player__next">
            <img
              src="/assets/images/icons/next-track.svg"
              className="player__icon"
              alt="Next Track"
            />
          </button>
        </div>
        <div className="player__duration">
          <div className="player__currentTime" style={{ width: "0%" }}></div>
        </div>
        <div className="player__volume">
          <button className="player__control player__mute">
            <img
              src="/assets/images/icons/volume.svg"
              className="player__icon"
              alt="Mute Button"
            />
          </button>
        </div>
        <div className="player__info">
          <p>{`Track 1 of ${trackCount}`}</p>
          <p>0:00 / 2:56</p>
        </div>
      </div>
    );
  }
}

export default Player;
