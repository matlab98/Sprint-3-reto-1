import React from "react";
import PropTypes from "prop-types";

import "../styles/Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div id="display">{this.props.value}</div>
      </div>
    );
  }
}
