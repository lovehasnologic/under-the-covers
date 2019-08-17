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
      <li className="tag">
        <a href="/" className="tag__label">
          {this.props.volume.number}
        </a>
      </li>
    );
  }
}

export default Tag;
