import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Subject extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          Subject Name: <input type="text" />
        </div>
      </React.Fragment>
    );
  }
}
