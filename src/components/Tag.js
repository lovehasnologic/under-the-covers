import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Tag extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.string
      })
    }),
    volume: PropTypes.string,
    currentAlbum: PropTypes.string,
    setActiveAlbum: PropTypes.func
  };

  render() {
    return (
      <li
        className={`jukebox__volume ${
          this.props.currentAlbum === this.props.volume ? " active" : ""
        }`}
        style={{ background: this.props.details.color.primary }}
      >
        <Link to={`/volume/${this.props.volume}`} className="tag grid">
          <span className="tag__label">
            <span className="tag__volumeNumber">{this.props.volume}</span>
          </span>
        </Link>
      </li>
    );
  }
}

export default Tag;
