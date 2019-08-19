import React from "react";
import Tag from "./Tag";
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
      <ol className="jukebox__volumes grid">
        {this.state.volumes.map(volume => (
          <Tag volume={volume} key={volume.number} />
        ))}
      </ol>
    );
  }
}

export default Jukebox;
