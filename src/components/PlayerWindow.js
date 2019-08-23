import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Billboard from "./Billboard";
import Album from "./Album";

class PlayerWindow extends React.Component {
  static propTypes = {
    currentAlbum: PropTypes.string,
    volumes: PropTypes.object,
    clearAlbum: PropTypes.func,
    setActiveAlbum: PropTypes.func
  };

  render() {
    return (
      <div
        className={`jukebox__player ${
          this.props.currentAlbum !== "" ? "loaded" : ""
        }`}
      >
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Billboard
                {...props}
                volumeCount={Object.keys(this.props.volumes).length}
                clearAlbum={this.props.clearAlbum}
              />
            )}
          />
          <Route
            exact
            path="/volume/:volume"
            render={props => (
              <Album
                {...props}
                currentAlbum={this.props.currentAlbum}
                setActiveAlbum={this.props.setActiveAlbum}
                volumes={this.props.volumes}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default PlayerWindow;
