import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      window.innerWidth < 1200
    ) {
      setTimeout(function() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, 250);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
