import React, { Component } from "react";

export default class ComponentLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This is Component Life Cycle with each phase </h1>
        <ol>
          <li>
            Initial Phase (Birth of Component)
            <ul>
              <li>
                <strong>getDefaultProps()</strong>
                <p>
                  It will use default value of this.props and create the
                  compnent in React JS
                </p>
              </li>
              <li>
                <b>getInitialState()</b>
                <p>
                  This will use the default value of this.state and creae and
                  pass into class Component
                </p>
              </li>
            </ul>
          </li>
          <li>
            Mounting Phase
            <ul>
              <li>
                <strong>constructor()</strong>
              </li>
              <li>
                <strong>static getDerivedStateFromProps()</strong>
              </li>
              <li>
                <strong>render()</strong>
              </li>
              <li>
                <strong>compnentDidMount()</strong>
              </li>
              <strong> Note: ComponentWillMount() function</strong>
            </ul>
          </li>
          <li>Updating Phase</li>
          <li>Unmouniting Phase</li>
        </ol>
      </div>
    );
  }
}
