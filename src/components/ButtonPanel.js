import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "../styles/ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      
      <div className="component-button-panel">
        <div>
          <Button id="clear" name="AC" clickHandler={this.handleClick} />
          <Button id="divide" name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="seven" name="7" clickHandler={this.handleClick} />
          <Button id="eight" name="8" clickHandler={this.handleClick} />
          <Button id="nine" name="9" clickHandler={this.handleClick} />
          <Button id="multiply" name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="four" name="4" clickHandler={this.handleClick} />
          <Button id="five" name="5" clickHandler={this.handleClick} />
          <Button id="six" name="6" clickHandler={this.handleClick} />
          <Button id="subtract" name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="one" name="1" clickHandler={this.handleClick} />
          <Button id="two" name="2" clickHandler={this.handleClick} />
          <Button id="three" name="3" clickHandler={this.handleClick} />
          <Button id="add" name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button id="zero" name="0" clickHandler={this.handleClick} wide />
          <Button id="decimal" name="." clickHandler={this.handleClick} />
          <Button id="equals" name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
