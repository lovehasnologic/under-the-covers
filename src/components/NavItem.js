import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavItem extends React.Component {
  static propTypes = {
    location: PropTypes.string.isRequired
  };

  render() {
    return (
      <li className="nav__item">
        <Link to={`/${this.props.location}`} className="nav__link">
          <img
            src={`/assets/images/icons/${this.props.location}.svg`}
            className="nav__icon"
          />
        </Link>
      </li>
    );
  }
}

export default NavItem;
