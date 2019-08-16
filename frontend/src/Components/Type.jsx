import React, { Component } from "react";

export default class Type extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <select name="SubjectType" id="subtype">
          <option value="Lecture">Lecture</option>
          <option value="Practical">Practical</option>
          <option value="Theory">Theory</option>
        </select>
      </React.Fragment>
    );
  }
}
