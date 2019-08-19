import React from "react";
import Tag from "./Tag";
import Artwork from "./Artwork";
import volumes from "../data/volumes.json";

class Jukebox extends React.Component {
  state = {
    volumes: []
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
          <Artwork volumes={this.state.volumes} />
        </div>
        <ol className="jukebox__volumes grid">
          {this.state.volumes.map(volume => (
            <Tag volume={volume} key={volume.number} />
          ))}
        </ol>
      </React.Fragment>
    );
  }
}

export default Jukebox;
