import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default class Teacher extends Component {
  constructor() {
    super();
    state = {
      teacherCount: 1
    };
  }
  render() {
    return (
      <React.Fragment>
        Teacher name: <input type="search" name="teacher" id="teacher" />
        <button className="btn btn-lg">Add teacher</button>
      </React.Fragment>
    );
  }
}
