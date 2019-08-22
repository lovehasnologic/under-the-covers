import React from "react";
import Tag from "./Tag";
import Artwork from "./Artwork";
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
      <React.Fragment>
        <div className="jukebox__player">
          <Artwork volumeCount={Object.keys(this.state.volumes).length} />
        </div>
        <ol
          className={`jukebox__volumes grid ${
            this.state.currentAlbum !== "" ? "nowPlaying" : ""
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
      </React.Fragment>
    );
  }
}

export default Jukebox;
