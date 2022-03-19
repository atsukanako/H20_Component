import React from "react";
import { render } from "react-dom";

import "./App.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  H2OState(temp) {
    if (temp >= 100) {
      return "steam";
    }
    if (0 < temp && temp < 100) {
      return "water";
    }
    return "ice";
  }

  render() {
    const { temp } = this.state;

    return (
      <div className={this.H2OState(temp)}>
        <h2>
          phase: {this.H2OState(temp)},{temp} 度
        </h2>
        <button onClick={this.onClickUp}>+</button>
        <button onClick={this.onClickTenUp}>+10</button>
        <button onClick={this.onClickDown}>-</button>
        <button onClick={this.onClickTenDown}>-10</button>
      </div>
    );
  }

  onClickUp = () => {
    this.setState({ temp: this.state.temp + 1 });
  };
  onClickTenUp = () => {
    this.setState({ temp: this.state.temp + 10 });
  };
  onClickDown = () => {
    this.setState({ temp: this.state.temp - 1 });
  };
  onClickTenDown = () => {
    this.setState({ temp: this.state.temp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
