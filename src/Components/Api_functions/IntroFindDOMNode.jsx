import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class IntroFindDOMNode extends Component {
  constructor(props) {
    super(props);
    this.findDomNodeOne = this.findDomNodeOne.bind(this);
    this.findDomNodeTwo = this.findDomNodeTwo.bind(this);
  }

  findDomNodeOne() {
    let myDiv = document.getElementById("myDivOne");
    ReactDOM.findDOMNode(myDiv).style.color="Red";
  }
  findDomNodeTwo() {
    let myDiv = document.getElementById("myDivTwo");
    ReactDOM.findDOMNode(myDiv).style.color="Green";
  }
  render() {
    return (
      <div>
        <h4>About find DOM Node function</h4>
        <p>To use this function we must import React.DOM object</p>
        <p>this function will find HTML tag inside the DOM and update it</p>
        <h4>Example of React DOM with the following tags</h4>
        <button onClick={this.findDomNodeOne}>find_NodeOne</button>
        <button onClick={this.findDomNodeTwo}>find_NodeTwo</button>
        <h4 id="myDivOne">Node One</h4>
        <h4 id="myDivTwo"> Node Two</h4>
      </div>
    );
  }
}
