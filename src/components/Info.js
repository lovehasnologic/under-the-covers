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
        <article class="article">
          <h1>History Of The Under The Covers Project</h1>
          <p>
            Many years ago I was a volunteer of the{" "}
            <Link to="http://chirpradio.org/">
              Chicago Independent Radio Project
            </Link>
            . We were a bunch of independent-minded music & media fans that
            liked to be surprised by what we heard on the radio dial. We also
            liked to surprise each other. Each year for our holiday party we
            would have a “mixtape” exchange. Bring a mix for the bag and pull
            one out at the end of the night. When music nerds make mixes they
            tend to go a bit over the top. That is how this project began.
          </p>
          <p>
            That first year saw me put together the first two volumes of cover
            songs. After carefully selecting and sequencing the tracks I turned
            to the artwork. I ended up pulling a template for a gatefold
            two-disc sleeved digipak with the outside panels being the album
            artwork from the album that the original version of the first track
            for each volume appeared on. I turned to my digital editing
            background to replace the artist/album name with that of the series
            and volume number. I was pleased with the outcome and the person
            that pulled it out of the bag passed along good feedback.
          </p>
          <p>
            As the next holiday party approached I had a tough time coming up
            with a new theme, but I also didn’t want to just do what I did last
            year. Of course I couldn’t come up with any better ideas, and a
            tradition was born. I whipped up volumes 3 and 4, created a new
            quadruple gatefold package and that was that. The next year I
            doubled it again with an 8-volume, octuple gatefold. For my final
            year as a volunteer I exhausted myself with a 16-volume set that was
            almost 7 feet long when it was opened completely.
          </p>
          <h2>From Physical Discs to HTML / CSS / JS</h2>
          <p>
            While I’m no longer a volunteer at the organization I do continue to
            collect cover songs. I wanted to find a way to share these mixes
            with friends (and friends of friends, and friends of my friends’
            friends, and so on). After procrastinating for a few years I found I
            also had an urge to dive head-first into a handfull of new(-ish)
            front-end technologies and used this site as an excuse to explore
            React / ES6, the native JS audio API, and CSS Grid. And while the
            web-based format affords me more flexibility I plan on sticking to
            the limitation of 74 minutes max per volume (the length of time that
            could fit on a standard CD-R).
          </p>
          <p>
            There are several benefits to having a website like this versus
            creating physical mixes:
          </p>
          <ol>
            <li>
              It’s easier to share a URL with people than it is to create a new
              set of discs and packaging
            </li>
            <li>
              The overhead to add more volumes is greatly reduced (at the time
              of writing this I have roughly 75 volumes in various stages of
              creation)
            </li>
            <li>
              I can continue to use this as a learning playground, continuing to
              improve my craft while also making the site better for people that
              enjoy these mixes
            </li>
          </ol>
          <h2>Are you allowed to do this?</h2>
          <p>
            The more technical way of asking this question is, “Do you have a
            copyright for all of these songs?”. The answer to that question is
            no. This project started simply as sharing mixes with friends,
            something that has been legal from the early days of cassette tapes.
            However, I’m not so naive as to think that posting these to a
            website is the same thing as making mixtapes for your friends. To
            that end, I have taken a handful of steps to respect the owners of
            these songs:
          </p>
          <ul>
            <li>
              I have used various techniques to restrict the pages of this site
              from showing up in search engine results. This project will be
              shared with friends, who will then share it with their friends,
              etc.
            </li>
            <li>
              Each track has a link to a resource to learn more about the
              release. Optimistically I hope this encourages you to explore some
              new artists. I link to sites in this order of priority: Discogs,
              Bandcamp, Wikipedia, Amazon, any source that is available. The
              priority is information over commerce, and in the cases where the
              only resource I can find is a site selling the release, I make no
              money and use no affiliate links.
            </li>
            <li>
              Downloaded files are tagged to include the original artist in the
              Composer field while the notes field contains the information
              about the release the song is from (album and same URL as here on
              the site). That way people who enjoy these mixes offline still
              have access to information about the artists and songs contained.
            </li>
          </ul>
          <p>
            If you have reason to want one of the songs I've included in these
            mixes removed (performer, label owner, copyright holder, etc.)
            please{" "}
            <a href="mailto:problems@coversjukebox.com">send me an email</a> and
            let me know which track and your relationship to it. It’d help me if
            you could let me know which volume the song is on as well. It might
            take me a bit to get back to you, since I have a job and a family
            and this is just a hobby project, but I promise that this entire
            project comes from a place of admiration and respect. I will be sure
            to respect your requests the same as I have the project itself.
          </p>
        </article>
        <Link to="/" className="link__home">
          &larr; Back To Selections
        </Link>
      </React.Fragment>
    );
  }
}

export default Info;
