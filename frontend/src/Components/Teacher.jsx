import React, { Component } from "react";
import "./logo.png";
import "bootstrap/dist/css/bootstrap.css";

export default class Teacher extends Component {
  constructor() {
    super();
    this.state = {
      teacherCount: 1
    };
  }

  handleclick = () => {
    this.setState({ teacherCount: this.state.teacherCount + 1 });
    console.log(this.state.teacherCount);
  };

  render() {
    return (
      <React.Fragment>
        Teacher name: <input type="search" name="teacher" id="teacher" />
        <button onClick={this.handleclick} className="btn btn-lg">
          Add teacher
        </button>
        <br />
      </React.Fragment>
    );
  }
}
