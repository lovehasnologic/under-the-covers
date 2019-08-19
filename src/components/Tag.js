import React from "react";
import PropTypes from "prop-types";

class Tag extends React.Component {
  static propTypes = {
    volume: PropTypes.shape({
      number: PropTypes.number,
      color: PropTypes.shape({
        primary: PropTypes.string
      })
    })
  };

  render() {
    return (
      <li
        className="jukebox__volume"
        style={{ background: this.props.volume.color.primary }}
      >
        <a href="/" className="tag grid">
          <span className="tag__label">
            <span className="tag__volumeNumber">
              {this.props.volume.number}
            </span>
          </span>
        </a>
      </li>
    );
  }
}

export default Tag;
