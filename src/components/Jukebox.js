import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Selections from "./Selections";
import PlayerWindow from "./PlayerWindow";
import volumes from "../data/volumes.json";

class Jukebox extends React.Component {
  state = {
    currentAlbum: "",
    artists: [],
    original_artists: []
  };

  setActiveAlbum = volumeNumber => {
    this.setState(
      {
        currentAlbum: volumeNumber
      },
      () => {
        document.documentElement.style.setProperty(
          "--bgColor",
          volumeNumber > 0 ? volumes[this.state.currentAlbum].color.primary : ""
        );
      }
    );
  };

  clearAlbum = () => {
    this.setState({
      currentAlbum: ""
    });
  };

  grabAllTrackData = (field, state) => {
    let values = [];

    Object.keys(volumes).map(volume =>
      Object.keys(volumes[volume].tracklist).map(track =>
        values.push(volumes[volume].tracklist[track][field])
      )
    );

    return values;
  };

  findUniqueValues = (field, state) => {
    let values = this.grabAllTrackData(field, state);
    let uniqueValues = new Set(values);

    return uniqueValues;
  };

  rankUniqueValues = (field, state) => {
    let values = this.grabAllTrackData(field, state);
    let rankedValues = [];

    this.findUniqueValues(field, state).forEach(value => {
      let count = values.reduce((a, v) => a + (v === value), 0);
      rankedValues.push({ value, count });
    });

    rankedValues = rankedValues.sort((a, b) => b.count - a.count);

    this.setState({
      [state]: rankedValues
    });
  };

  render() {
    return (
      <Router>
        <Selections
          volumes={volumes}
          currentAlbum={this.state.currentAlbum}
          setActiveAlbum={this.setActiveAlbum}
        />
        <PlayerWindow
          currentAlbum={this.state.currentAlbum}
          volumes={volumes}
          clearAlbum={this.clearAlbum}
          setActiveAlbum={this.setActiveAlbum}
          albumDetails={this.state.albumDetails}
          artists={this.state.artists}
          original_artists={this.state.original_artists}
          rankUniqueValues={this.rankUniqueValues}
        />
      </Router>
    );
  }
}

export default Jukebox;
