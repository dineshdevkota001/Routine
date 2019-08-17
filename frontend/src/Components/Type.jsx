import React, { Component } from "react";

export default class Type extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <select className="dropdown-menu" name="SubjectType" id="subtype">
          <option className="dropdown-item" value="Lecture" href="#!">
            Lecture
          </option>
          <option className="dropdown-item" value="Practical" href="#!">
            Practical
          </option>
          <option className="dropdown-item" value="Theory" href="#!">
            Theory
          </option>
        </select>
      </React.Fragment>
    );
  }
}
