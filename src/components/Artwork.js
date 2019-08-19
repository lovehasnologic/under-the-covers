import React from "react";
import PropTypes from "prop-types";

class Artwork extends React.Component {
  static propTypes = {
    volumeCount: PropTypes.number
  };

  render() {
    return (
      <header className="artwork">
        <h1 className="artwork__title">
          <span className="artwork__title--under">Under</span>
          <span className="artwork__title--the">The</span>
          <br />
          <span className="artwork__title--covers">Covers</span>
        </h1>
        <h2 className="artwork__description">
          <strong className="artwork__count">{this.props.volumeCount}</strong>
          volumes of songs <u>not</u> written by the people playing them
        </h2>
      </header>
    );
  }
}

export default Artwork;
