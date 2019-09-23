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
          <meta name="og:title" content="About The Under The Covers Project" />
          <meta name="og:type" content="website" />
          <meta
            name="og:description"
            content="This is the story of how the Under The Covers collection came to be."
          />
          <meta
            property="og:image:secure_url"
            content={`https://coversjukebox.com/assets/images/favicons/social-default.png`}
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="825" />
          <meta property="og:image:height" content="825" />
          <meta
            property="og:image:alt"
            content="Under The Covers Website Billboard"
          />
          <meta name="og:url" content="https://coversjukebox.com/info" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="About The Under The Covers Project"
          />
          <meta
            name="twitter:description"
            content="This is the story of how the Under The Covers collection came to be."
          />
          <meta
            name="twitter:image"
            content={`https://coversjukebox.com/assets/images/favicons/social-default.png`}
          />
          <meta
            property="twitter:image:alt"
            content={`Under The Covers Website Billboard`}
          />
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
