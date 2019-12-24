import React, { Component } from "react";

export class IntroSetState extends Component {
  constructor(props) {
    //we call state object in constructor always
    super(props);

    this.state = {
      msg: "this is intro of setState Functions"
    };
    this.updateSetState=this.updateSetState.bind(this)
  }

  //to use setSate we have to create own function
  //class does not contain word function within it
  updateSetState() {
    this.setState({
      msg: "this is updated setState result"
    });
  }

  render() {
    return (
      <div>
        <h4> About setState() function</h4>
        <p>
          The function does not always replace or udpate the satte itself... we
          have to call setState() the function where we want to change the satet
        </p>
        <h4>{this.state.msg}</h4>
        <button onClick={this.updateSetState}>Click Me</button>
      </div>
    );
  }
}

export default IntroSetState;
