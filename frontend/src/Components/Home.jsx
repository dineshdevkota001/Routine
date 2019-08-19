import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src="https://picsum.photos/200"
          className="rounded-circle"
          alt="somePicture"
          srcSet=""
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome to Routine Manager</h1>
        <br />
        <br />
        <br />
        <h5>Click Routine to get started</h5>
      </React.Fragment>
    );
  }
}
