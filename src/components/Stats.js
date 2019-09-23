import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Stats extends React.Component {
  static propTypes = {
    volumes: PropTypes.object.isRequired,
    artists: PropTypes.array,
    original_artists: PropTypes.array,
    rankUniqueValues: PropTypes.func.isRequired,
    setActiveAlbum: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.setActiveAlbum("0");
    if (this.props.artists.length < 1) {
      this.props.rankUniqueValues("artist", "artists");
      this.props.rankUniqueValues("original_artist", "original_artists");
    }
  }

  render() {
    const chartCount = 25;
    return (
      <React.Fragment>
        <Helmet>
          <title>Top Artists • Under The Covers</title>
          <meta name="og:title" content="Top Artists on Under The Covers" />
          <meta name="og:type" content="website" />
          <meta
            name="og:description"
            content={`A list of artists appearing throughout the ${
              Object.keys(this.props.volumes).length
            } mixes made entirely of cover songs that make up the Under The Covers collection.`}
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
          <meta name="og:url" content="https://coversjukebox.com/stats" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Top Artists on Under The Covers"
          />
          <meta
            name="twitter:description"
            content={`A list of artists appearing throughout the ${
              Object.keys(this.props.volumes).length
            } mixes made entirely of cover songs that make up the Under The Covers collection.`}
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
            content={`A list of artists appearing throughout the ${
              Object.keys(this.props.volumes).length
            } mixes made entirely of cover songs that make up the Under The Covers collection.`}
          />
          <meta
            name="description"
            content={`A list of artists appearing throughout the ${
              Object.keys(this.props.volumes).length
            } mixes made entirely of cover songs that make up the Under The Covers collection.`}
          />
          <body className="pageLoaded" />
        </Helmet>
        <div className="stats">
          <h1 className="stats__heading">Jukebox Statistics</h1>
          <div className="stats__column stats__column--players">
            <h2 className="stats__subHeading">Top Players</h2>
            <ol className="stats__topList">
              {this.props.artists.slice(0, chartCount).map(value => (
                <li
                  key={value.value}
                  className="stats__topItem"
                  itemScope=""
                  itemType="https://schema.org/MusicGroup"
                >
                  <span className="stats__topArtist" itemProp="name">
                    {value.value}
                  </span>
                  <span className="stats__topCount">{value.count}</span>
                </li>
              ))}
            </ol>
            <h3 className="stats__subHeading--minor">Other Players</h3>
            <p className="stats__others">
              {this.props.artists
                .slice(chartCount + 1)
                .sort((a, b) =>
                  a.value.replace("The ", "") > b.value.replace("The ", "")
                    ? 1
                    : -1
                )
                .map(value => (
                  <span
                    className="stats__otherArtist"
                    key={value.value}
                    itemScope=""
                    itemType="https://schema.org/MusicGroup"
                  >
                    <span itemProp="name">{value.value}</span>
                  </span>
                ))}
            </p>
          </div>
          <div className="stats__column stats__column--writers">
            <h2 className="stats__subHeading">Top Writers</h2>
            <ol className="stats__topList">
              {this.props.original_artists.slice(0, chartCount).map(value => (
                <li key={value.value} className="stats__topItem">
                  <span className="stats__topArtist">{value.value}</span>
                  <span className="stats__topCount">{value.count}</span>
                </li>
              ))}
            </ol>
            <h3 className="stats__subHeading--minor">Other Writers</h3>
            <p className="stats__others">
              {this.props.original_artists
                .slice(chartCount + 1)
                .sort((a, b) =>
                  a.value.replace("The ", "") > b.value.replace("The ", "")
                    ? 1
                    : -1
                )
                .map(value => (
                  <span className="stats__otherArtist" key={value.value}>
                    {value.value}
                  </span>
                ))}
            </p>
          </div>
        </div>
        <Link to="/" className="link__home">
          &larr; Back To Selections
        </Link>
      </React.Fragment>
    );
  }
}

export default Stats;
