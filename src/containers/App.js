import React from "react";
import Display from "../components/Display";
import ButtonPanel from "../components/ButtonPanel";
import calculate from "../logic/calculate";
import "../styles/App.css";
import "../styles/format.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div id="wrapper" className="main">
        <div id="drum-machine">
            <div className="component-app">
              <Display value={this.state.next || this.state.total || "0"} />
              <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}
