import React from "react";
import Tag from "./Tag";
import Artwork from "./Artwork";
import volumes from "../data/volumes.json";

class Jukebox extends React.Component {
  state = {
    volumes: {}
  };

  componentDidMount() {
    this.setState({
      volumes: volumes
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="jukebox__player">
          <Artwork volumeCount={Object.keys(this.state.volumes).length} />
        </div>
        <ol className="jukebox__volumes grid">
          {Object.keys(this.state.volumes).map(volume => (
            <Tag
              details={this.state.volumes[volume]}
              volume={volume}
              key={volume}
            />
          ))}
        </ol>
      </React.Fragment>
    );
  }
}

export default Jukebox;
