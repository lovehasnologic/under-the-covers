import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

class Billboard extends React.Component {
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
            name="description"
            content={`Under The Covers is a collection of ${this.props.volumeCount} mixes made entirely of cover songs.`}
          />
        </Helmet>
        <header className="billboard">
          <h1 className="billboard__title">
            <span className="billboard__title--under">Under</span>
            <span className="billboard__title--the">The</span>
            <br />
            <span className="billboard__title--covers">Covers</span>
          </h1>
          <h2 className="billboard__description">
            <strong className="billboard__count">
              {this.props.volumeCount}
            </strong>
            volumes of songs <u>not</u> written by the people playing them
          </h2>
        </header>
      </React.Fragment>
    );
  }
}

export default Billboard;
