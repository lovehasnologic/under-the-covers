import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tag from "./Tag";
import Artwork from "./Artwork";
import Album from "./Album";
import volumes from "../data/volumes.json";

class Jukebox extends React.Component {
  state = {
    volumes: {},
    currentAlbum: "",
    primaryColor: ""
  };

  componentDidMount() {
    this.setState({
      volumes: volumes
    });
  }

  setActiveAlbum = volumeNumber => {
    this.setState(
      {
        currentAlbum: volumeNumber,
        primaryColor: this.state.volumes[volumeNumber].color.primary
      },
      () =>
        document.documentElement.style.setProperty(
          "--bgColor",
          this.state.primaryColor
        )
    );
  };

  render() {
    return (
      <Router>
        <div className="jukebox__player">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Artwork
                  {...props}
                  volumeCount={Object.keys(this.state.volumes).length}
                />
              )}
            />
            <Route exact path="/volume/:volume" component={Album} />
          </Switch>
        </div>
        <ol
          className={`jukebox__volumes grid ${
            this.state.currentAlbum !== "" ? "albumSelected" : ""
          }`}
        >
          {Object.keys(this.state.volumes).map(volume => (
            <Tag
              details={this.state.volumes[volume]}
              volume={volume}
              key={volume}
              currentAlbum={this.state.currentAlbum}
              setActiveAlbum={this.setActiveAlbum}
            />
          ))}
        </ol>
      </Router>
    );
  }
}

export default Jukebox;
