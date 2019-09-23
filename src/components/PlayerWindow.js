import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Billboard from "./Billboard";
import Album from "./Album";
import Stats from "./Stats";
import Info from "./Info";
import ScrollToTop from "./ScrollToTop";

class PlayerWindow extends React.Component {
  static propTypes = {
    currentAlbum: PropTypes.string,
    volumes: PropTypes.object,
    clearAlbum: PropTypes.func,
    setActiveAlbum: PropTypes.func,
    artists: PropTypes.array,
    original_artists: PropTypes.array,
    rankUniqueValues: PropTypes.func
  };

  render() {
    return (
      <ScrollToTop>
        <div className="jukebox__player">
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
              path="/stats"
              render={props => (
                <Stats
                  {...props}
                  setActiveAlbum={this.props.setActiveAlbum}
                  volumes={this.props.volumes}
                  artists={this.props.artists}
                  original_artists={this.props.original_artists}
                  rankUniqueValues={this.props.rankUniqueValues}
                />
              )}
            />
            <Route
              exact
              path="/info"
              render={props => (
                <Info
                  {...props}
                  setActiveAlbum={this.props.setActiveAlbum}
                  volumes={this.props.volumes}
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
            <Route
              exact
              path="/volume/:volume/track/:track"
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
      </ScrollToTop>
    );
  }
}

export default PlayerWindow;
