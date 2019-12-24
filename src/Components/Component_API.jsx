import React, { Component } from "react";
import IntroSetState from "./Api_functions/IntroSetState";
import IntroForceUpdate from "./Api_functions/IntroForceUpdate";
import IntroFindDOMNode from "./Api_functions/IntroFindDOMNode";
class Component_API extends Component {
  render() {
    return (
      <div>
        <h1> This is a class component API function</h1>
        <p>
          Componen has two branches func and class class has API with three
          functions and class compnent has its own lifecycle.{" "}
        </p>
        <p> React compenet API it top level api in React.js it help us to: </p>
        <ul>
          <li> Create HTML element</li>
          <li>Transform /update element</li>
          <li>Resue the element</li>
        </ul>
        <h3> Following are the three functions in Component API</h3>
        <ol>
          <li>
            setState()
            <IntroSetState></IntroSetState>
          </li>
          <br />
          <li>
            forceUpdate()
            <IntroForceUpdate></IntroForceUpdate>
          </li>
          <br />
          <li>
            findDOMNode()
            <IntroFindDOMNode></IntroFindDOMNode>
          </li>
        </ol>
      </div>
    );
  }
}

export default Component_API;
