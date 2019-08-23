import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Selections from "./Selections";
import PlayerWindow from "./PlayerWindow";
import volumes from "../data/volumes.json";

class Jukebox extends React.Component {
  state = {
    volumes: {},
    currentAlbum: ""
  };

  componentDidMount() {
    this.setState({
      volumes: volumes
    });
  }

  setActiveAlbum = volumeNumber => {
    this.setState(
      {
        currentAlbum: volumeNumber
      },
      () =>
        document.documentElement.style.setProperty(
          "--bgColor",
          this.state.volumes[this.state.currentAlbum].color.primary
        )
    );
  };

  clearAlbum = () => {
    this.setState({
      currentAlbum: ""
    });
  };

  render() {
    return (
      <Router>
        <PlayerWindow
          currentAlbum={this.state.currentAlbum}
          volumes={this.state.volumes}
          clearAlbum={this.clearAlbum}
          setActiveAlbum={this.setActiveAlbum}
          albumDetails={this.state.albumDetails}
        />
        <Selections
          volumes={this.state.volumes}
          currentAlbum={this.state.currentAlbum}
          setActiveAlbum={this.setActiveAlbum}
        />
      </Router>
    );
  }
}

export default Jukebox;
