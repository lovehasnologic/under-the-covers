import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tag from "./Tag";
import Billboard from "./Billboard";
import Album from "./Album";
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

  render() {
    return (
      <Router>
        <div className="jukebox__player">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Billboard
                  {...props}
                  volumeCount={Object.keys(this.state.volumes).length}
                />
              )}
            />
            <Route
              exact
              path="/volume/:volume"
              render={props => (
                <Album {...props} setActiveAlbum={this.setActiveAlbum} />
              )}
            />
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
