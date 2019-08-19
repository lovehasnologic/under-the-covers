import React from "react";
import PropTypes from "prop-types";

class Tag extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      color: PropTypes.shape({
        primary: PropTypes.string
      })
    }),
    volume: PropTypes.string
  };

  render() {
    return (
      <li
        className="jukebox__volume"
        style={{ background: this.props.details.color.primary }}
      >
        <a href="/" className="tag grid">
          <span className="tag__label">
            <span className="tag__volumeNumber">{this.props.volume}</span>
          </span>
        </a>
      </li>
    );
  }
}

export default Tag;
