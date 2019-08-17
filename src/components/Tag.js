import React from "react";

class Tag extends React.Component {
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
