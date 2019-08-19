import React from "react";
import PropTypes from "prop-types";

class Tag extends React.Component {
  static propTypes = {
    volume: PropTypes.shape({
      number: PropTypes.number
    })
  };

  render() {
    return (
      <li className="jukebox__volume">
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
