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
    isPlaying: false,
    isMuted: false
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });

    this.player.addEventListener("ended", e => {
      window._paq.push([
        "trackEvent",
        "Song",
        "Complete",
        "Vol. " +
          this.props.currentAlbum +
          ", Track " +
          (this.props.selectedTrack ? this.props.selectedTrack : "1")
      ]);
      this.handleSkip("next");
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isPlaying &&
      this.props.selectedTrack !== prevProps.selectedTrack
    ) {
      this.playTrack();
    }
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  playTrack() {
    this.player.play();
    window._paq.push([
      "trackEvent",
      "Song",
      "Play",
      "Vol. " +
        this.props.currentAlbum +
        ", Track " +
        (this.props.selectedTrack ? this.props.selectedTrack : "1")
    ]);
  }

  playToggle() {
    if (this.state.isPlaying) {
      this.player.pause();
      this.setState({
        isPlaying: false
      });
    } else {
      this.playTrack();
      this.setState({
        isPlaying: true
      });
    }
  }

  handleSkip(direction) {
    const nextTrack = this.props.selectedTrack
      ? parseFloat(this.props.selectedTrack) + 1
      : 2;
    const prevTrack = this.props.selectedTrack
      ? parseFloat(this.props.selectedTrack) - 1
      : 0;
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

  volumeControl() {
    if (this.state.isMuted) {
      this.player.muted = false;
      window._paq.push(["trackEvent", "Player", "Unmuted"]);
      this.setState({
        isMuted: false
      });
    } else {
      this.player.muted = true;
      window._paq.push(["trackEvent", "Player", "Muted"]);
      this.setState({
        isMuted: true
      });
    }
  }

  loadTrack = () => {
    const album = this.props.currentAlbum;
    const track =
      this.props.selectedTrack === "" || this.props.selectedTrack === undefined
        ? "1"
        : this.props.selectedTrack;
    const trackData = this.props.volumes[album].tracklist[track];
    const ext =
      trackData !== undefined &&
      trackData.hasOwnProperty("aac") &&
      trackData.aac === true
        ? "m4a"
        : "mp3";

    return `/assets/songs/${album}/${track}.${ext}`;
  };

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
          <div
            className="player__currentTime"
            style={{
              width: `${(this.state.currentTime / this.state.duration) * 100}%`
            }}
          ></div>
        </div>
        <div className="player__volume">
          <button
            className={`player__control player__mute${
              this.state.isMuted ? " active" : ""
            }`}
            onClick={() => this.volumeControl()}
          >
            <img
              src={`/assets/images/icons/${
                this.state.isMuted ? "mute" : "volume"
              }.svg`}
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
          preload="auto"
          src={this.loadTrack()}
          ref={ref => (this.player = ref)}
        ></audio>
      </figure>
    );
  }
}

export default Player;
