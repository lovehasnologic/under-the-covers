import React from "react";
import PropTypes from "prop-types";
import { getTime } from "../helpers";

class Player extends React.Component {
  static propTypes = {
    volumes: PropTypes.object.isRequired,
    currentAlbum: PropTypes.string.isRequired,
    selectedTrack: PropTypes.string
  };

  state = {
    isPlaying: false
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isPlaying &&
      this.props.selectedTrack !== prevProps.selectedTrack
    ) {
      this.player.play();
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  playToggle() {
    if (this.state.isPlaying) {
      this.player.pause();
      this.setState({
        isPlaying: false
      });
    } else {
      this.player.play();
      this.setState({
        isPlaying: true
      });
    }
  }

  handleSkip(direction) {
    const nextTrack = parseFloat(this.props.selectedTrack) + 1;
    const prevTrack = parseFloat(this.props.selectedTrack) - 1;
    if (direction === "next") {
      if (
        nextTrack >
        parseFloat(
          Object.keys(this.props.volumes[this.props.currentAlbum].tracklist)
            .length
        )
      ) {
        return;
      } else {
        this.props.handleTrackLoading(nextTrack.toString());
      }
    }
    if (direction === "previous") {
      if (prevTrack < 1) {
        this.player.currentTime = 0;
      } else {
        this.props.handleTrackLoading(prevTrack.toString());
      }
    }
  }

  render() {
    const tracklist = this.props.volumes[this.props.currentAlbum].tracklist;
    const trackCount = Object.keys(tracklist).length;
    const loadedTrack = this.props.selectedTrack
      ? this.props.selectedTrack
      : "1";
    const currentTime = this.state.currentTime
      ? getTime(this.state.currentTime)
      : "--:--";
    const duration = this.state.duration
      ? getTime(this.state.duration)
      : "--:--";

    return (
      <figure className="player">
        <div className="player__controls">
          <button
            className="player__control player__prev"
            onClick={() => this.handleSkip("previous")}
          >
            <img
              src="/assets/images/icons/prev-track.svg"
              className="player__icon"
              alt="Previous Track"
            />
          </button>
          <button
            className="player__control player__play"
            onClick={() => this.playToggle()}
          >
            <img
              src={`/assets/images/icons/${
                this.state.isPlaying ? "pause" : "play"
              }.svg`}
              className="player__icon"
              alt="Play Button"
            />
          </button>
          <button
            className="player__control player__next"
            onClick={() => this.handleSkip("next")}
          >
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
        <figcaption className="player__info">
          <p>{`Track ${loadedTrack} of ${trackCount}`}</p>
          <p>
            {this.state.isPlaying ? `${currentTime} / ${duration}` : "Paused"}
          </p>
        </figcaption>
        <audio
          controls
          preload="auto"
          src={`/assets/songs/${this.props.currentAlbum}/${loadedTrack}.mp3`}
          ref={ref => (this.player = ref)}
        ></audio>
      </figure>
    );
  }
}

export default Player;
