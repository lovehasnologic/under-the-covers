import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Selections from "./Selections";
import PlayerWindow from "./PlayerWindow";
import NavItem from "./NavItem";
import volumes from "../data/volumes.json";

let stats = {
  artists: [],
  original_artists: []
};

class Jukebox extends React.Component {
  state = {
    currentAlbum: ""
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

    stats[state] = rankedValues;
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
          artists={stats.artists}
          original_artists={stats.original_artists}
          rankUniqueValues={this.rankUniqueValues}
        />
        <nav className="nav">
          <ul className="nav__list">
            <NavItem location="info" />
            <NavItem location="stats" />
          </ul>
        </nav>
      </Router>
    );
  }
}

export default Jukebox;
