import React from "react";
import PropTypes from "prop-types";

class Album extends React.Component {
  componentDidMount() {
    this.props.setActiveAlbum(this.props.match.params.volume);
  }

  componentDidUpdate(prevProps, prevState) {
    let selectedAlbum = this.props.match.params.volume;
    let previousAlbum = prevProps.match.params.volume;
    if (selectedAlbum !== previousAlbum) {
      this.props.setActiveAlbum(selectedAlbum);
    }
  }

  render() {
    return <h2>Album Info Goes Here</h2>;
  }
}

export default Album;
