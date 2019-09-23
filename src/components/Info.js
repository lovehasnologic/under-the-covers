import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Info extends React.Component {
  static propTypes = {
    volumes: PropTypes.object.isRequired,
    setActiveAlbum: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.setActiveAlbum("0");
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>About The Under The Covers Project</title>
          <meta
            name="description"
            content="This is the story of how the Under The Covers collection came to be."
          />
          <body className="pageLoaded" />
        </Helmet>
        <h1>Info</h1>
        <Link to="/" className="link__home">
          &larr; Back To Selections
        </Link>
      </React.Fragment>
    );
  }
}

export default Info;
