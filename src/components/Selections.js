import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";

class Selections extends React.Component {
  static propTypes = {
    setActiveAlbum: PropTypes.func,
    volumes: PropTypes.object,
    currentAlbum: PropTypes.string
  };

  render() {
    return (
      <ol
        className={`jukebox__volumes grid ${
          this.props.currentAlbum !== ""
            ? this.props.currentAlbum > 0
              ? "albumSelected"
              : "hide"
            : ""
        }`}
      >
        {Object.keys(this.props.volumes).map(volume => (
          <Tag
            details={this.props.volumes[volume]}
            volume={volume}
            key={volume}
            currentAlbum={this.props.currentAlbum}
            setActiveAlbum={this.props.setActiveAlbum}
          />
        ))}
      </ol>
    );
  }
}

export default Selections;
