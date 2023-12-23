import React, { Component, PureComponent } from "react";

export default class PureCounterComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
      toggle: true,
    };
  }

  render() {
    console.log("This is a Pure Component");
    return (
      <div>
        <h1>Pure Component</h1>
        <h3>{this.state.count}</h3>
        <button
          style={{
            backgroundColor: `${this.state.toggle ? "green" : "red"}`,
            color: "white",
          }}
          onClick={() => {
            this.setState({ toggle: !this.state.toggle });
          }}
        >
          Toggle
        </button>
        <button
          onClick={() => {
            if (this.state.toggle) {
              this.setState({ count: this.state.count + 1 });
            } 
            else {
              this.setState({ count: this.state.count });
            }
          }}
        >
          Counter
        </button>
      </div>
    );
  }
}
