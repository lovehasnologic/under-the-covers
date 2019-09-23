import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavItem extends React.Component {
  static propTypes = {
    location: PropTypes.string.isRequired
  };

  render() {
    const location = this.props.location;
    return (
      <li className="nav__item">
        <Link
          to={`/${location}`}
          className="nav__link"
          title={`Link to ${location} page`}
        >
          <img
            src={`/assets/images/icons/${location}.svg`}
            className="nav__icon"
            alt={`${location} icon`}
          />
        </Link>
      </li>
    );
  }
}

export default NavItem;
