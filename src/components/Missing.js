import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

class Missing extends React.Component {
  static propTypes = {
    volumeCount: PropTypes.number,
    clearAlbum: PropTypes.func
  };

  componentDidMount() {
    this.props.clearAlbum();
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {`Under The Covers • ${this.props.volumeCount} volumes of cover songs`}
          </title>
          <meta
            name="og:title"
            content={`Under The Covers: ${this.props.volumeCount} volumes of cover songs`}
          />
          <meta name="og:type" content="website" />
          <meta
            name="og:description"
            content={`Under The Covers is a collection of ${this.props.volumeCount} mixes made entirely of cover songs.`}
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
          <meta name="og:url" content="https://coversjukebox.com/" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content={`Under The Covers: ${this.props.volumeCount} volumes of cover songs`}
          />
          <meta
            name="twitter:description"
            content={`Under The Covers is a collection of ${this.props.volumeCount} mixes made entirely of cover songs.`}
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
            content={`Under The Covers is a collection of ${this.props.volumeCount} mixes made entirely of cover songs.`}
          />
          <body className="missing" />
        </Helmet>
        <header className="billboard billboard--missing">
          <h1 className="billboard__title">Loading Malfunction</h1>
          <p className="billboard__description">
            Please try loading another album.
          </p>
        </header>
      </React.Fragment>
    );
  }
}

export default Missing;
