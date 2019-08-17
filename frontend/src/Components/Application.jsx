import React, { Component } from "react";
import Navigation from "./Navigation";
import Routine from "./Routine";

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      page: "Home"
    };
  }

  onPageChange = selection => {
    this.setState({ page: selection });
  };

  render() {
    return (
      <React.Fragment>
        <Navigation className="shadow-lg" pageHandler={this.onPageChange} page={this.state.page} />
        {this.state.page === "Home" && <Routine />}
      </React.Fragment>
    );
  }
}
