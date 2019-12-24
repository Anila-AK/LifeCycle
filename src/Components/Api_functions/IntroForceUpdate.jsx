import React, { Component } from "react";

export default class IntroForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }
  forceUpdateState() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h4>About force udpate function </h4>
        <p>
          We can use this function when we want to force an update directly from
          DOM/HTML object
        </p>
        <h4>Example of Random Number using force uodate method</h4>
        <h4>Ramdom Number:{Math.random()}</h4>
        <button onClick={this.forceUpdateState}>Force Update</button>
      </div>
    );
  }
}
