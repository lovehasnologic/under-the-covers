import React from "react";
import Tag from "./Tag";
import volumes from "../data/volumes.json";

class Jukebox extends React.Component {
  state = {
    volumes: volumes
  };

  render() {
    return (
      <ol className="volumes">
        {this.state.volumes.map(volume => (
          <Tag volume={volume} key={volume.number} />
        ))}
      </ol>
    );
  }
}

export default Jukebox;
