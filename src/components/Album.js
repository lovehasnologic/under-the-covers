import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Album extends React.Component {
  static propTypes = {
    setActiveAlbum: PropTypes.func,
    match: PropTypes.object
  };

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
    return (
      <React.Fragment>
        <h2>Album Info Goes Here</h2>
        <Link to="/">Close &times;</Link>
      </React.Fragment>
    );
  }
}

export default Album;
